/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lookup` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LookupType` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Lookup" DROP CONSTRAINT "Lookup_lookupTypeId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- DropTable
DROP TABLE "public"."Category";

-- DropTable
DROP TABLE "public"."Lookup";

-- DropTable
DROP TABLE "public"."LookupType";

-- DropTable
DROP TABLE "public"."Product";

-- CreateTable
CREATE TABLE "ProductModel" (
    "id" TEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "available" INTEGER NOT NULL DEFAULT 0,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "ProductModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryModel" (
    "id" TEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "CategoryModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LookupTypeModel" (
    "id" TEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,

    CONSTRAINT "LookupTypeModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LookupModel" (
    "id" TEXT NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "value" TEXT NOT NULL,
    "lookupTypeId" TEXT NOT NULL,

    CONSTRAINT "LookupModel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CategoryModel_slug_key" ON "CategoryModel"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "LookupTypeModel_name_key" ON "LookupTypeModel"("name");

-- AddForeignKey
ALTER TABLE "ProductModel" ADD CONSTRAINT "ProductModel_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "CategoryModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LookupModel" ADD CONSTRAINT "LookupModel_lookupTypeId_fkey" FOREIGN KEY ("lookupTypeId") REFERENCES "LookupTypeModel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
