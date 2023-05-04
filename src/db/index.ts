import { InferModel } from "drizzle-orm";
import { db } from "./drizzle-db";
import { countries } from "./schema";
import { revalidatePath } from "next/cache";

export type Country = InferModel<typeof countries>;
export type NewCountry = Omit<Country, "id">;

export async function getCountries() {
  return await db.select().from(countries);
}

export async function insertCountry(country: NewCountry) {
  let response = db.insert(countries).values(country);
  
  // refetch all queries from this path
  revalidatePath("/");

  return response;
}