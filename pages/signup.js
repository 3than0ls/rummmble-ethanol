import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import SignUpForm from '../components/auth/SignUpForm';

export default function ProfilePage() {
  return (
    <div>
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <SignUpForm />
      </Layout>

      <footer className="py-16 text-center">
        <p>Footer</p>
      </footer>
    </div>
  );
}
