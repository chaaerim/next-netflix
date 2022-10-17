import '../../styles/globals.css';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

function MyApp({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: unknown }>) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps?.dehydratedState}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
