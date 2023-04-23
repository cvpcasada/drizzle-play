import { db } from "@/db/drizzle-db";
import { countries } from "@/db/schema";
import { InferModel } from "drizzle-orm";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

async function getCountries() {
  return await db.select().from(countries);
}

export type Country = InferModel<typeof countries>;
export type NewCountry = Omit<Country, "id">;

async function insertCountry(country: NewCountry) {
  return db.insert(countries).values(country);
}

export async function GET() {
  return NextResponse.json({ countries: await getCountries() });
}

export async function PUT(request: NextRequest) {
  let newCountry: NewCountry = await request.json();
  let dbResponse = await insertCountry(newCountry);
  
  return NextResponse.json({ ...newCountry, id: dbResponse.insertId });
}
