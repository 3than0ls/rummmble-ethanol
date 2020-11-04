import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import LoginForm from '../components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Log In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <LoginForm />
      </Layout>

      <footer className="py-16 text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}
