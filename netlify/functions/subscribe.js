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
    const { email, source } = JSON.parse(event.body);

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    // Initialize Supabase client
    const supabase = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_ANON_KEY
    );

    // Insert email subscriber
    const { data, error } = await supabase
      .from('email_subscribers')
      .insert([
        {
          email,
          source: source || 'newsletter',
          subscribed_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      // Check if it's a duplicate email error
      if (error.code === '23505') {
        return {
          statusCode: 200,
          body: JSON.stringify({ 
            success: true, 
            message: 'You are already subscribed!' 
          })
        };
      }
      throw error;
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: 'Successfully subscribed!' 
      })
    };

  } catch (error) {
    console.error('Subscription error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to subscribe' })
    };
  }
};
