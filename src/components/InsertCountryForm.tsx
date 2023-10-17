"use client";

import { insertCountry } from "@/db";
import { useState, useTransition } from "react";

export default function InsertCountryForm() {
  let [transitioning, startTransition] = useTransition();
  let [error, setError] = useState<{
    name: string;
    message: string;
    cause?: unknown;
  } | null>(null);

  return (
    <form
      action={async (formData) => {
        setError(null);
        const name = formData.get("country_name") as string;
        let result = await insertCountry({ name });

        startTransition(() => {
          if (result?.error) setError(result.error);
        });
      }}
      className="p-2"
    >
      <label className="inline-flex gap-4">
        <span className={error ? "bg-red-700 rounded-md" : ''}>Add Country Entry:</span>
        <input
          name="country_name"
          className="text-black rounded-md px-2"
          type="text"
          placeholder="Philippines"
        />
        <span>{transitioning ? "loading..." : ""}</span>
      </label>
    </form>
  );
}
