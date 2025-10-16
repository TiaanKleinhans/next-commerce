migration

<!-- RUN MIGRATION -->
npx prisma migrate dev --name=your_migration_name

<!-- Sync Db with current (No Migration needed)  -->
npx prisma db push