import { NextResponse } from "next/server";

export async function GET() {
  const allPackages = [
    { id: "1", title: "Sri Lanka Hill Country Tour", shortDesc: "Explore Sri Lanka’s mountains..." },
    { id: "2", title: "Beach Paradise", shortDesc: "Relax on the beautiful beaches..." },
  ];

  return NextResponse.json(allPackages);
}
