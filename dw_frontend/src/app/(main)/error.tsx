"use client";

import ErrorElement from "@/features/_shared/components/elements/error";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
export default function Error({
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
    <ErrorElement error={error} handleReset={handleReset} />
  );
}
