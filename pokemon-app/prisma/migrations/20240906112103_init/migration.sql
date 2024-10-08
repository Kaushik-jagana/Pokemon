-- CreateTable
CREATE TABLE "Pokemon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "sprite" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Type" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PokemonType" (
    "pokemonId" INTEGER NOT NULL,
    "typeId" INTEGER NOT NULL,

    PRIMARY KEY ("pokemonId", "typeId"),
    CONSTRAINT "PokemonType_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemon" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PokemonType_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "Type" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Type_name_key" ON "Type"("name");
