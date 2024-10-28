import { PrismaClient } from '@prisma/client';

function customPrismaClient() {
    return new PrismaClient();
}

let prisma: ReturnType<typeof customPrismaClient>;

if (process.env.NODE_ENV === 'production') {
    prisma = customPrismaClient();
}
else {

    const globalWithPrisma = global as typeof globalThis & { prisma: ReturnType<typeof customPrismaClient> };

    if (!globalWithPrisma.prisma) {
        globalWithPrisma.prisma = customPrismaClient();
    }

    prisma = globalWithPrisma.prisma;
}

export default prisma;