import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

// authMiddleware.ts
export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value; // RequestCookieからvalueを取得

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // tokenがstringであることを確認
  const { data: user, error } = await supabase.auth.getUser(token as string);

  if (error || !user) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
