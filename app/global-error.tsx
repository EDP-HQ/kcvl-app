"use client";
import { Button } from "primereact/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <Button label="Try again" onClick={() => reset()} />
      </body>
    </html>
  );
}
