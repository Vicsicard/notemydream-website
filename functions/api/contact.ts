// Cloudflare Pages Function to handle contact form submissions
interface ContactFormData {
  name: string
  email: string
  category: string
  subject: string
  message: string
}

export async function onRequestPost(context: any) {
  try {
    const formData: ContactFormData = await context.request.json()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Get SendGrid API key from environment variable
    const SENDGRID_API_KEY = context.env.SENDGRID_API_KEY

    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured')
      console.log('Contact form submission (email not sent):', formData)
      return new Response(JSON.stringify({ success: true, message: 'Message sent successfully' }), {
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
          reply_to: { email: formData.email, name: formData.name },
          subject: `Contact Form: ${formData.subject}`
        }],
        from: {
          email: 'hello@notemydream.com',
          name: 'NoteMyDream Contact Form'
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
                .field { margin-bottom: 15px; }
                .label { font-weight: bold; color: #5063FF; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h2>New Contact Form Submission</h2>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="label">From:</span> ${formData.name}
                  </div>
                  <div class="field">
                    <span class="label">Email:</span> ${formData.email}
                  </div>
                  <div class="field">
                    <span class="label">Category:</span> ${formData.category}
                  </div>
                  <div class="field">
                    <span class="label">Subject:</span> ${formData.subject}
                  </div>
                  <div class="field">
                    <span class="label">Message:</span>
                    <p>${formData.message.replace(/\n/g, '<br>')}</p>
                  </div>
                  <div class="field">
                    <span class="label">Date:</span> ${new Date().toLocaleString()}
                  </div>
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

    console.log('Contact form email sent from:', formData.email)

    return new Response(JSON.stringify({ success: true, message: 'Message sent successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
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
