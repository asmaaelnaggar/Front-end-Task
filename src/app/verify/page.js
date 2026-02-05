"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Verify() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const token = localStorage.getItem("token");
    if (!token) {
      setError("No user token found, please login first.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/verify-email`, {
        method: "POST",
        headers: { 
          Accept: "application/json",
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();

      if (data.status) {
        setSuccess("Verification successful! Redirecting...");
        setTimeout(() => router.push("/dashboard"), 1500);
      } else {
        setError(data.message || "Invalid verification code");
      }
    } catch (err) {
      setError("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500 p-4">
      <form className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md space-y-5" onSubmit={submit}>
        <h1 className="text-3xl font-bold text-center text-gray-800">Verify Account</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}

        <input
          name="code"
          placeholder="Enter Verification Code"
          required
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-center focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />

        <button
          disabled={loading}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>
      </form>
    </div>
  );
}
