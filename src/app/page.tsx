import InsertCountryForm from "@/components/InsertCountryForm";
import { db } from "@/db/drizzle-db";
import { countries } from "@/db/schema";

async function getCountries() {
  return await db.select().from(countries);
}

export default async function Home() {
  let countries = await getCountries();

  return (
    <main>
      <ul>
        {countries.length > 0 ? (
          countries.map((c) => <li key={c.id}>{c.name}</li>)
        ) : (
          <li>Countries list is empty</li>
        )}
      </ul>

      <InsertCountryForm />
    </main>
  );
}

export const runtime = "experimental-edge";
