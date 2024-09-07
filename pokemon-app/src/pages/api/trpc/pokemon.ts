import { t } from '../../../trpc'; // Import tRPC instance
import prisma from '../../../lib/prisma'; // Import Prisma client
import { z } from 'zod'; // Import Zod for input validation

export const pokemonRouter = t.router({
  // Define a procedure for getting a Pokémon by name
  getPokemon: t.procedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findFirst({
        where: { name: input },
        include: {
          types: { select: { type: { select: { name: true } } } },
        },
      });
      if (!pokemon) throw new Error("Pokemon not found");
      return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map((t) => t.type.name),
        sprite: pokemon.sprite,
      };
    }),

  // Define a procedure for getting an array of Pokémon
  getPokemonArray: t.procedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: { name: { in: input } },
        include: {
          types: { select: { type: { select: { name: true } } } },
        },
      });
      return pokemons.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map((t) => t.type.name),
        sprite: pokemon.sprite,
      }));
    }),

  // Define a procedure for getting Pokémon by type
  getPokemonByType: t.procedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: {
          types: { some: { type: { name: input } } },
        },
        include: {
          types: { select: { type: { select: { name: true } } } },
        },
      });
      return pokemons.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map((t) => t.type.name),
        sprite: pokemon.sprite,
      }));
    }),
});
