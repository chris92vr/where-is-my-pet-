import { SessionProvider } from 'next-auth/react';
import DefaultLayout from '../components/layouts/default';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </SessionProvider>
  );
}
export default MyApp;
