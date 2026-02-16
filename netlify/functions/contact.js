const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' })
      };
    }

    // Initialize Supabase client
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );

    // Insert contact message into users table (or create a contacts table)
    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          name,
          email,
          open_id: `contact_${Date.now()}`, // Generate unique ID
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      throw error;
    }

    // TODO: Send email notification to theshadowindexbook@gmail.com
    // You can use a service like SendGrid, Mailgun, or Resend here

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully!' 
      })
    };

  } catch (error) {
    console.error('Contact form error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message' })
    };
  }
};
