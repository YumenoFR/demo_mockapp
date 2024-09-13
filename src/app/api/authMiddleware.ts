import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('sb:token');
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  const { data: user } = await supabase.auth.getUser(token);

  if (!user) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/protected/*'], // 認証が必要なページパスを指定
};
