import { initTRPC } from '@trpc/server';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import superjson from 'superjson'; 

const prisma = new PrismaClient();
const t = initTRPC.create({
  transformer: superjson,
});

export const appRouter = t.router({
  // Fetch a single Pokemon by name
  getPokemon: t.procedure.input(z.string()).query(async ({ input }) => {
    return prisma.pokemon.findFirst({
      where: { name: input },
      include: {
        types: { include: { type: true } },
      },
    });
  }),

  // Fetch multiple Pokemon by names array
  getPokemonArray: t.procedure.input(z.array(z.string())).query(async ({ input }) => {
    return prisma.pokemon.findMany({
      where: { name: { in: input } },
      include: { types: { include: { type: true } } },
    });
  }),

  // Fetch Pokemon by type
  getPokemonByType: t.procedure.input(z.string()).query(async ({ input }) => {
    return prisma.pokemon.findMany({
      where: { types: { some: { type: { name: input } } } },
      include: { types: { include: { type: true } } },
    });
  }),
});

export type AppRouter = typeof appRouter;
