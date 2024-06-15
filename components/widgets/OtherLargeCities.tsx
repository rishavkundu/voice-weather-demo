"use client"

import Link from "next/link"

export default function OtherLargeCities() {
  const dummyCities = [
    { city: "New York", coord: { lat: 40.7128, lon: -74.0060 } },
    { city: "Los Angeles", coord: { lat: 34.0522, lon: -118.2437 } },
    { city: "Chicago", coord: { lat: 41.8781, lon: -87.6298 } },
    // Add more dummy data as needed
  ];

  return (
    <div className="relative order-last hidden h-[25rem] w-full flex-col justify-between lg:block">
      <h3 className="py-3 font-semibold">Other large cities</h3>
      <div className="flex flex-col space-y-3.5">
        {dummyCities.map((item) => (
          <Link
            key={item.city}
            scroll={false}
            href="#"
            className="rounded-lg border bg-card px-6 py-4 text-card-foreground shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {item.city}
          </Link>
        ))}
      </div>
    </div>
  )
}
