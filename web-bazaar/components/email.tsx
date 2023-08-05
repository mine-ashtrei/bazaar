"use client";
import { useState } from "react";
import { saveEmail } from "../lib/api";

export default function EmailForm() {
  const [email, setEmail] = useState<string>("");
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Do nothing if no email is entered
    if (!email) return;
    await saveEmail(email);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email for updates"
        required
        className="px-4 py-2 border rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
      />
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}
