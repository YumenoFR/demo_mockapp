import '../styles/globals.css';

import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/users">Users</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
