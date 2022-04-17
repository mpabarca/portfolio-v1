import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: 'Maria Paz Abarca - Frontend Developer',
    description: 'My portfolio',
    image: '/avatar.png',
    type: 'website',
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Maria Paz Abarca' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <main className='w-full dark:bg-gray-800'>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
