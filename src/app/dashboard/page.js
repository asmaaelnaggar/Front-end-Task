"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = localStorage.getItem("user");
    if (!u) {
      router.push("/login");
    } else {
      try {
        setUser(JSON.parse(u));
      } catch (err) {
        console.error("Failed to parse user from localStorage:", err);
        router.push("/login");
      }
    }
  }, []);

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500 p-4 text-white">
      <h1 className="text-4xl font-bold mb-5">Welcome, {user.name}</h1>
      <p className="text-lg">You are successfully logged in.</p>
    </div>
  );
}
