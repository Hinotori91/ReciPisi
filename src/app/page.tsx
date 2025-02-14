import Image from "next/image";
import Login from "./login/page"

export default function Home() {
  return (
    <div className="flex gap-5 items-center justify-center min-h-screen">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold underline">Willkommen bei</h1>
        <Image src="/Logo/ChatGPT_Logo_Versuch.png" alt="ResiPisi" width={250} height={200} />
      </div>
      <Login />
    </div>
  )
}
