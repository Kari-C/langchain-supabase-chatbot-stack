import { Html, Head, Main, NextScript } from "next/document";
import Link from 'next/link';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
      </Head>
      <nav className="navMenu bg-white dark:bg-slate-900 dark:text-white">
        <ul>
          <Link href="/">Home</Link>
          <Link href="/settings">Settings</Link>
        </ul>
      </nav>
      <body className="bg-white dark:bg-slate-800 dark:text-white" >
        <Main />
        <NextScript />
      </body>
    </Html >
  );
}
