// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client"

declare global {
    // Evita recriar o Prisma em modo dev com Hot Reload
    var prisma: PrismaClient | undefined
}

export const prisma =
    global.prisma ||
    new PrismaClient({
        log: ['query'], // opcional para debug
    })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
