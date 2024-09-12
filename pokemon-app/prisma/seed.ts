const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Use upsert to avoid unique constraint violations
  const grass = await prisma.type.upsert({
    where: { name: 'grass' },
    update: {},
    create: { name: 'grass' },
  });

  const fire = await prisma.type.upsert({
    where: { name: 'fire' },
    update: {},
    create: { name: 'fire' },
  });

  const water = await prisma.type.upsert({
    where: { name: 'water' },
    update: {},
    create: { name: 'water' },
  });

  const electric = await prisma.type.upsert({
    where: { name: 'electric' },
    update: {},
    create: { name: 'electric' },
  });

  const flying = await prisma.type.upsert({
    where: { name: 'flying' },
    update: {},
    create: { name: 'flying' },
  });

  // Create Pokémon
  await prisma.pokemon.upsert({
    where: { name: 'Bulbasaur' },
    update: {},
    create: {
      name: 'Bulbasaur',
      sprite: 'https://pokemon.com/pictures/bulbasaur.png',
      types: {
        create: [{ typeId: grass.id }],
      },
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'Charmander' },
    update: {},
    create: {
      name: 'Charmander',
      sprite: 'https://pokemon.com/pictures/charmander.png',
      types: {
        create: [{ typeId: fire.id }],
      },
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'Squirtle' },
    update: {},
    create: {
      name: 'Squirtle',
      sprite: 'https://pokemon.com/pictures/squirtle.png',
      types: {
        create: [{ typeId: water.id }],
      },
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'Pikachu' },
    update: {},
    create: {
      name: 'Pikachu',
      sprite: 'https://pokemon.com/pictures/pikachu.png',
      types: {
        create: [{ typeId: electric.id }],
      },
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'Pidgey' },
    update: {},
    create: {
      name: 'Pidgey',
      sprite: 'https://pokemon.com/pictures/pidgey.png',
      types: {
        create: [{ typeId: flying.id }],
      },
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'Gyarados' },
    update: {},
    create: {
      name: 'Gyarados',
      sprite: 'https://pokemon.com/pictures/gyarados.png',
      types: {
        create: [
          { typeId: water.id },
          { typeId: flying.id },
        ],
      },
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'Venusaur' },
    update: {},
    create: {
      name: 'Venusaur',
      sprite: 'https://pokemon.com/pictures/venusaur.png',
      types: {
        create: [
          { typeId: grass.id },
          { typeId: flying.id },
        ],
      },
    },
  });

  await prisma.pokemon.upsert({
    where: { name: 'Raichu' },
    update: {},
    create: {
      name: 'Raichu',
      sprite: 'https://pokemon.com/pictures/raichu.png',
      types: {
        create: [{ typeId: electric.id }],
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
