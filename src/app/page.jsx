'use client';

import { useAuth } from '../context/AuthContext';

export default function Home() {
  const { user, signIn } = useAuth();

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 2rem',
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8f9fa, #e0ecff)',
      textAlign: 'center',
      borderRadius: 'var(--border-radius)'
    }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
        Welcome to the Unique Postcard NApp 🎉
      </h2>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6' }}>
        This is a creative space where you can design your own personalized postcards.
        Use the editor to write heartfelt messages and enter addresses — all in one place.
        Your changes update in real-time, so you can preview exactly what your recipient will see.
        <br /><br />
        Start by clicking on <strong>Message</strong> to write your message, or <strong>Address</strong> to fill in recipient details.
        When you're ready, your custom postcard will be waiting on the left.
      </p>

      {!user && (
        <button onClick={signIn}>
          Sign in with Google
        </button>
      )}
    </main>
  );
}
