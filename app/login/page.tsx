"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/dashboard/add-product"); // protected route
    } else {
      const data = await res.json();
      setError(data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 max-w-md mx-auto flex justify-center items-center h-screen"
    >
      <div className="bg-slate-100 px-10 py-20 rounded-xl ">
        <h2 className="text-2xl font-bold mb-4 mx-0 items-center">
          Welcome to Murad Apparels
        </h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-2"
          required
        />
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </div>
    </form>
  );
}
