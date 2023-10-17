import InsertCountryForm from "@/components/InsertCountryForm";
import { getCountries } from "@/db";
import { rsc } from "@/utils";

const Test = rsc(async (props: { children?: React.ReactNode }) => {
  return (
    <>
      {Promise.resolve("hello")}
      {props.children}
    </>
  );
});

export default async function Home() {
  let countries = await getCountries();

  return (
    <main>
      <Test>nuts all the way</Test>
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
