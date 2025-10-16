
import { prisma } from '@/lib/prisma';
import { seedLookups } from './lookups/lookup-seed';
import { SeedLookupType } from './lookups/lookup-type-seed';


const prismaClient = prisma;


async function seedDb() {

       await SeedLookupType(prismaClient);
     await seedLookups(prismaClient);

}


seedDb().then(async () => {
    
    console.log('Seeding Finished.');
await prisma.$disconnect();
}).catch(async (e) => {
    console.error('Something Went Wrong Seeding the Db' , e);
    await prisma.$disconnect();
    process.exit(1);
});