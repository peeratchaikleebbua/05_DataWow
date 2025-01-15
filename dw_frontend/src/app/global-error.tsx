"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  function handleReset() {
    startTransition(() => {
      // calling order does not matter
      reset();
      router.refresh();
    });
  }
  return (
    <>
      <p>Global Error: {error.message}</p>
      <p>Global Error: {error.digest}</p>
      <p>
        <button onClick={handleReset}>Reset</button>
      </p>
    </>
  );
}
