// app/api/contact/route.ts
// This is an API route to handle submissions from your /contact page form

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically integrate with a service like Resend, SendGrid, 
    // or a database (Prisma/MongoDB) to store the inquiry.
    // Example: await sendEmail({ to: 'info@gbrschools.edu.in', subject: `New Inquiry from ${name}`, text: message });

    console.log('Received contact submission:', { name, email, message });

    // Return success response
    return NextResponse.json(
      { message: 'Message sent successfully. We will get back to you soon!' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}