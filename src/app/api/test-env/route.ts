import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    hasToken: !!process.env.ZEPTOMAIL_API_TOKEN,
    domain: process.env.ZEPTOMAIL_DOMAIN,
    contactEmail: process.env.CONTACT_EMAIL,
    tokenLength: process.env.ZEPTOMAIL_API_TOKEN?.length || 0
  });
}
