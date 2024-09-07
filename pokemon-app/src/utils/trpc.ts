import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@/server/trpc'; // Ensure AppRouter is the correct type from your tRPC router.

// Create tRPC hook
export const trpc = createTRPCReact<AppRouter>();
