"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center text-gray-800">
      <h2 className="mb-4 text-3xl font-bold">Something went wrong!</h2>
      <p className="mb-6 max-w-md text-gray-600">
        An unexpected error occurred. Please try again or return to the homepage.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="btn-3d rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-white"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-bold text-gray-800 hover:text-primary"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
