'use client'

import { signIn } from "next-auth/react"

export default function LoginButton() {
    return (
        <button
            onClick={() => signIn("google")}
            className="px-4 py-2 bg-cardinal text-white rounded hover:bg-opacity-80 transition"
        >
            Entrar com Google
        </button>
    )
}
