import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login'); // ログアウト後にログインページへリダイレクト
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <main>{children}</main>
    </div>
  );
}
