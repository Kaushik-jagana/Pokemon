// src/utils/trpc.ts (or similar)
import { withTRPC } from '@trpc/next';
import { httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@/server/trpc'; // Correct the path according to your project structure
import superjson from 'superjson';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // For browser requests
    return '';
  }
  if (process.env.VERCEL_URL) {
    // SSR on Vercel
    return `https://${process.env.VERCEL_URL}`;
  }
  // SSR locally
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

// Ensure proper typing for config
export default withTRPC<AppRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
      transformer: superjson, // Optional: Use superjson for serialization
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // Adjust this based on your preference
          },
        },
      },
    };
  },
  ssr: false, // You can change this to true if SSR is needed
})(MyApp);
