import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { ReplyIcon } from '@heroicons/react/solid';
import Link from 'next/link';

type Props = {
  title: string;
  children: ReactNode;
};

const Layout: FC<Props> = ({ children, title = 'Mantine' }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="flex items-center">
        <Link href="/">
          <ReplyIcon className="mr-2 h-6 w-6 cursor-pointer text-gray-300" />
        </Link>
        Mantine Tutorial
      </header>
      <main className="flex flex-1 flex-col justify-center p-4">
        {children}
      </main>
      <footer>フッター</footer>
    </div>
  );
};

export default Layout;
