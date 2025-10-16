import {  LookupModel, PrismaClient } from "@prisma/client";
import { categoriesLookupType } from "./lookup-type-seed";

export const electronicsLookup ={
    id : "cljv1n9k200001mk6m3h1f2ey",
    value : 'electronics',
    lookupTypeId : categoriesLookupType.id,
} as LookupModel;

export const clothingLookup ={
    id : "cljv1nz0a0001bmk6r0s3t4u5",
    value : 'clothing',
    lookupTypeId : categoriesLookupType.id,
} as LookupModel;

export const homeLookup ={
    id : "cljv1nz0a0003bmk6s1u5v6w7",
    value : 'home',
    lookupTypeId : categoriesLookupType.id,
} as LookupModel;

const allLookups = [
    electronicsLookup,
    clothingLookup,
    homeLookup
] as LookupModel[];

export async function SeedCategory(prisma : PrismaClient) {
  allLookups.forEach(async (_) => {
        const existing = await prisma.lookupModel.findUnique({
            where: { id: _.id }
        });
        if (!existing) {
            await prisma.lookupModel.create({
                data: _
            });
        }
    });
}