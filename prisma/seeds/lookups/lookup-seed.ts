
import { PrismaClient } from "@prisma/client";
import { SeedCategory } from "./category-lookup-seed";

export async function seedLookups(prisma : PrismaClient  ) {
    
    await SeedCategory(prisma);
    
}

