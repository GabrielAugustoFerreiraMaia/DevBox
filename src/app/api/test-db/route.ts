// src/app/api/test-db/route.ts
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
    try {
        const users = await prisma.user.findMany()
        return NextResponse.json({ users })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Erro ao acessar o banco' }, { status: 500 })
    }
}
