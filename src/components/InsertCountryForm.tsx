"use client";

import { insertCountry } from "@/db";

export default function InsertCountryForm() {
  return (
    <form
      action={async (formData) => {
        const name = formData.get("country_name") as string;
        await insertCountry({ name });
      }}
    >
      <label>
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
