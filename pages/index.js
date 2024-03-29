import LoginPage from "@/pages/Auth/login"
import Header from "@/components/Header"
import Head from "next/head"
import { useAuth } from "@/context/AuthContext"

export default function Home() {
  const { currentUser } = useAuth()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!currentUser && <LoginPage />}
      {currentUser && (
        <main className="bg-gray-100 min-h-screen">
          <Header />
        </main>
      )}
    </>
  )
}
