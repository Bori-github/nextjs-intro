import { ReactNode } from 'react';
import { NavigationBar } from './NavigationBar';

interface LayputProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayputProps) => {
  return (
    <main>
      <NavigationBar />
      <section>{children}</section>
    </main>
  );
};
