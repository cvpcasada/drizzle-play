import InsertCountryForm from "@/components/InsertCountryForm";
import { getCountries } from "@/db";

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
