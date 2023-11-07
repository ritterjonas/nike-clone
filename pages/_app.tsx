import StyledJsxRegistry from '@/lib/registry';
import Layout from '@/components/Layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledJsxRegistry>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledJsxRegistry>
  );
}
