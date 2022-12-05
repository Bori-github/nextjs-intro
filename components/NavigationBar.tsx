import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavigationBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link href={'/'} legacyBehavior>
        <a style={{ color: router.pathname === '/' ? 'black' : 'gray' }}>
          Home
        </a>
      </Link>
      <Link href={'/about'} legacyBehavior>
        <a style={{ color: router.pathname === '/about' ? 'black' : 'gray' }}>
          About
        </a>
      </Link>
    </nav>
  );
};
