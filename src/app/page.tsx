import InsertCountryForm from "@/components/InsertCountryForm";
import { getCountries } from "@/db";

export default async function Home() {
  let countries = await getCountries();

  return (
    <main>
      <InsertCountryForm />
      <ul className="px-6 list-disc">
        {countries.length > 0 ? (
          countries.map((c) => (
            <li key={c.id}>
              {c.name}
            </li>
          ))
        ) : (
          <li>Countries list is empty</li>
        )}
      </ul>
    </main>
  );
}

export const runtime = "experimental-edge";
