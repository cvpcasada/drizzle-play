"use client";

import type { NewCountry } from "@/app/api/countries/route";
import { startTransition } from "react";

import { useRouter } from "next/navigation";

export default function InsertCountryForm() {
  let router = useRouter();

  async function handleSubmit(country: NewCountry) {
    // stub validation
    if (!country.name) return;

    await fetch("/api/countries", {
      method: "PUT",
      body: JSON.stringify(country),
    });

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        let formData = new FormData(event.target as HTMLFormElement);
        handleSubmit({ name: formData.get("country_name") as string });
      }}
    >
      <label>
        <span>Add Country Entry: </span>
        <input name="country_name" className="text-black" type="text" placeholder="Philippines" />
      </label>
    </form>
  );
}
