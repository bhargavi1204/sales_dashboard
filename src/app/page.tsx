// src/app/page.tsx

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center gap-6 p-6">
      <h1 className="text-3xl font-bold">Welcome to the Sales Dashboard App</h1>
      <Link
        href="/dashboard"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
