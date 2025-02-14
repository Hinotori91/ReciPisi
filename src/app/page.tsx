import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Willkommen bei ReciPisi</h1>
      <Image src="/Logo/ChatGPT_Logo_Versuch.png" alt="Logo" width={150} height={100} />
    </div>
  )
}
