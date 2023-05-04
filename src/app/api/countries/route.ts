"use server";

import { NewCountry, getCountries, insertCountry } from "@/db";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ countries: await getCountries() });
}

export async function PUT(request: NextRequest) {
  let newCountry: NewCountry = await request.json();
  let dbResponse = await insertCountry(newCountry);

  return NextResponse.json({ ...newCountry, id: dbResponse.insertId });
}
