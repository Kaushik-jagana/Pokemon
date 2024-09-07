const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const grass = await prisma.type.create({
    data: { name: 'grass' },
  });

  const fire = await prisma.type.create({
    data: { name: 'fire' },
  });

  await prisma.pokemon.create({
    data: {
      name: 'Bulbasaur',
      sprite: 'https://pokemon.com/pictures/bulbasaur.png',
      types: {
        create: [{ typeId: grass.id }],
      },
    },
  });

  await prisma.pokemon.create({
    data: {
      name: 'Charmander',
      sprite: 'https://pokemon.com/pictures/charmander.png',
      types: {
        create: [{ typeId: fire.id }],
      },
    },
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
