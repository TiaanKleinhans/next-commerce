-- CreateTable
CREATE TABLE "LookupType" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "LookupType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lookup" (
    "id" TEXT NOT NULL,
    "lookupTypeId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,

    CONSTRAINT "Lookup_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LookupType_name_key" ON "LookupType"("name");

-- AddForeignKey
ALTER TABLE "Lookup" ADD CONSTRAINT "Lookup_lookupTypeId_fkey" FOREIGN KEY ("lookupTypeId") REFERENCES "LookupType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
