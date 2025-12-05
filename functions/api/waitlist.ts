// Cloudflare Pages Function to handle waitlist submissions
interface WaitlistFormData {
  email: string
}

export async function onRequestPost(context: any) {
  try {
    const formData: WaitlistFormData = await context.request.json()

    // Validate email
    if (!formData.email || !formData.email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Valid email required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Get SendGrid API key from environment variable
    const SENDGRID_API_KEY = context.env.SENDGRID_API_KEY

    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured')
      // Still return success to user, but log the error
      console.log('Waitlist signup (email not sent):', formData.email)
      return new Response(JSON.stringify({ success: true, message: 'Added to waitlist' }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      })
    }

    // Send email via SendGrid
    const emailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: 'vicsicard@gmail.com' }],
          subject: 'New Waitlist Signup - NoteMyDream'
        }],
        from: {
          email: 'hello@notemydream.com',
          name: 'NoteMyDream Waitlist'
        },
        content: [{
          type: 'text/html',
          value: `
            <!DOCTYPE html>
            <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: #5063FF; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>New Waitlist Signup</h2>
                </div>
                <div class="content">
                  <p><strong>Email:</strong> ${formData.email}</p>
                  <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </body>
            </html>
          `
        }]
      })
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('SendGrid error:', errorText)
      throw new Error('Failed to send email')
    }

    console.log('Waitlist signup email sent:', formData.email)

    return new Response(JSON.stringify({ success: true, message: 'Added to waitlist' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

  } catch (error) {
    console.error('Waitlist form error:', error)
    return new Response(JSON.stringify({ error: 'Failed to add to waitlist' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  })
}
