"use client";
import { usePathname } from "next/navigation";

export default function HeaderView() {
  const pathname = usePathname();
  console.log(pathname);
  // return <span>Path: {pathname}</span>;
  return <span>{pathname}</span>;
}
