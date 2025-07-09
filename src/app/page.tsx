import LoginButton from "@/components/LoginButton"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-raisin text-silver">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">Bem-vindo ao CineDev 🎬</h1>
        <LoginButton />
      </div>
    </main>
  )
}
