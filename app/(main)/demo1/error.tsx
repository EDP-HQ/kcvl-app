"use client";
import { Button } from "primereact/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h2>Page went wrong!</h2>
      <Button label="Try again" onClick={() => reset()} />
    </div>
  );
}
