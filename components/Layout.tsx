import { FC, ReactNode } from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  children: ReactNode;
};

const Layout: FC<Props> = ({ children, title = 'Mantine' }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <header>Mantine Tutorial</header>
      <main className="flex flex-1 flex-col justify-center p-4">
        {children}
      </main>
      <footer>フッター</footer>
    </div>
  );
};

export default Layout;
