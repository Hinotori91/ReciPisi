import Link from "next/link";

const LoginInput = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2 items-center">
        <label htmlFor="mail">Mail</label>
        <input id="mail" type="text" placeholder="mail" />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="password" />
      </div>
      <div className="flex justify-center">
        <input type="submit" value="Login" className="text-center border-2 border-indigo-600 p-3 rounded-2xl w-72" />
      </div>
    </div>
  )
}

// const Header = () => {
//   return <h1>Login</h1>
// }

const RegistryButton = () => {
  return <Link href="/registry" className="border-2 border-indigo-600 p-3 rounded-2xl w-72 text-center">Registry</Link>
}

export default function Login() {
  return (
    <div className="flex flex-col gap-5 items-center bg-sky-950 rounded-3xl w-80 p-10">
      {/* <Header /> */}
      <LoginInput />
      or
      <RegistryButton />
    </div>
  )
}