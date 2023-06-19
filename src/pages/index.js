import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // Prefetch the dashboard page
    router.push("/login");
  }, [router]);
  return (
    <>
      <h1>home</h1>
    </>
  );
}
