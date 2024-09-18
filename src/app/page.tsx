import Image from "next/image";
import LoginForm from "./admin/register/_components/signup";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import Link from "next/link";
// import


export default async function Home() {
  const session = await getServerSession(options);
  return (
    <div className="">
      {session ? (
        <Link href="/api/auth/signout">Logout {session.user?.email}</Link>
      ) : (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
}
