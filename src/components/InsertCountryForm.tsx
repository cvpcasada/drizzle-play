"use client";

import { insertCountry } from "@/db";
import { startTransition, useState } from "react";

export default function InsertCountryForm() {
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
    >
      <label className={error ? "bg-red-700" : ''}>
        <span>Add Country Entry:</span>
        <input
          name="country_name"
          className="text-black"
          type="text"
          placeholder="Philippines"
        />
      </label>
    </form>
  );
}
