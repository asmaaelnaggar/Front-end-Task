"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new URLSearchParams(form),
      });

      const data = await res.json();

      if (data.status) {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data));
        router.push("/dashboard");
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500 p-4">
      <form
        onSubmit={submit}
        className="bg-white rounded-3xl shadow-xl p-8 w-full max-w-md space-y-5"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 focus:outline-none transition"
        />

        <button
          disabled={loading}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
