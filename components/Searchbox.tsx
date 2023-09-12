"use client";

import { Combobox } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const reviews = [
  { slug: "hades-2018", title: "Hades" },
  { slug: "fall-guys", title: "Fall Guys" },
];

function Searchbox() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const filtered = reviews.filter((review) => review.title.includes(query));

  const handleChange = (review) => {
    router.push(`/reviews/${review.slug}`);
  };

  return (
    <div className="relative w-80">
      <Combobox onChange={handleChange}>
        <Combobox.Input
          placeholder="Search..."
          className="border px-2 py-1 rounded w-full"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Combobox.Options className="absolute bg-white py-1 w-full">
          {filtered.map((review) => (
            <Combobox.Option key={review.slug} value={review}>
              {({ active }) => (
                <span
                  className={`block px-2 truncate w-full ${
                    active ? "bg-orange-100" : ""
                  }`}
                >
                  {review.title}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}

export default Searchbox;
