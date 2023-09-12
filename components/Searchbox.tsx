"use client";

import { SearchableReview, searchReviews } from "@/lib/reviews";
import { Combobox } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Searchbox() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (query.length > 1) {
      (async () => {
        const response = await fetch(
          `/api/search?query=${encodeURIComponent(query)}`
        );
        const reviews = await response.json();
        setReviews(reviews);
      })();
    } else {
      setReviews([]);
    }
  }, [query]);

  const handleChange = (review: SearchableReview) => {
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
          {reviews.map((review) => (
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
