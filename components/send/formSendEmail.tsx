"use client";

import { useState } from "react";

export default function FormSendEmail() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-blue-300 py-2 font-bold mb-2"
          htmlFor="emailaddress"
        >
          Send for our newsletter
        </label>
        <input
          className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
          id="emailaddress"
          type="email"
          placeholder="you@somewhere.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="flex items-center justify-between pt-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Email"}
        </button>
      </div>

      {status === "success" && (
        <p className="text-green-500 pt-4">Email enviado correctamente.</p>
      )}
      {status === "error" && (
        <p className="text-red-500 pt-4">Hubo un error al enviar el email.</p>
      )}
    </form>
  );
}
