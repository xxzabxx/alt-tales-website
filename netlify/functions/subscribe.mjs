import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

export const handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { email, source } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    let dbMessage = '';
    let isAlreadySubscribed = false;

    // Try to save to Supabase (best effort — don't block on failure)
    try {
      const supabase = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_ANON_KEY
      );

      const { error } = await supabase
        .from('email_subscribers')
        .insert([{
          email,
          source: source || 'newsletter',
          subscribed_at: new Date().toISOString()
        }])
        .select();

      if (error) {
        if (error.code === '23505') {
          isAlreadySubscribed = true;
          dbMessage = 'already subscribed';
        } else {
          console.error('Subscription DB error:', error);
          dbMessage = 'db error';
        }
      } else {
        dbMessage = 'saved to db';
      }
    } catch (dbErr) {
      console.error('Supabase connection error:', dbErr);
      dbMessage = 'db connection failed';
    }

    // Send email notification to owner via Resend (best effort)
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const now = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
      const bookSource = source === 'grimm' ? 'The Grimm Forge' : 'The Shadow Index';

      await resend.emails.send({
        from: 'Alt Tales Signups <noreply@alt-tales.com>',
        to: 'theshadowindexbook@gmail.com',
        subject: `New Signup: ${email} — ${bookSource}`,
        html: `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 2rem; background: #0A1628; color: #D1D5DB; border-radius: 8px;">
            <h2 style="color: #10B981; margin-bottom: 0.5rem;">New Email Signup</h2>
            <p style="color: #9CA3AF; margin-bottom: 2rem; font-size: 0.9rem;">${now}</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 0.75rem 0; border-bottom: 1px solid #1F2937; color: #6B7280; font-size: 0.85rem; width: 120px;">Email</td>
                <td style="padding: 0.75rem 0; border-bottom: 1px solid #1F2937; color: #D1D5DB; font-weight: bold;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 0.75rem 0; border-bottom: 1px solid #1F2937; color: #6B7280; font-size: 0.85rem;">Book</td>
                <td style="padding: 0.75rem 0; border-bottom: 1px solid #1F2937; color: #D1D5DB;">${bookSource}</td>
              </tr>
              <tr>
                <td style="padding: 0.75rem 0; color: #6B7280; font-size: 0.85rem;">DB Status</td>
                <td style="padding: 0.75rem 0; color: #D1D5DB;">${isAlreadySubscribed ? 'Already subscribed' : dbMessage}</td>
              </tr>
            </table>
          </div>
        `
      });
    } catch (emailErr) {
      console.error('Resend notification error:', emailErr);
      // Don't fail the request if email notification fails
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: isAlreadySubscribed ? 'You are already subscribed!' : 'Successfully subscribed!'
      })
    };

  } catch (error) {
    console.error('Subscription error:', error);
    // Still return success so frontend can redirect to thank-you page
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Redirecting...'
      })
    };
  }
};
