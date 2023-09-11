import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "next/image";
import { getReviews } from "@/lib/reviews";

// NOTE: You can revalidate the whole page this way
// export const revalidate = 500;

export const metadata = {
  title: "Reviews",
};

async function ReviewsPage() {
  const reviews = await getReviews(6);

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review, index) => (
          <li
            className="bg-gray-50 border rounded w-80 shadow-sm hover:shadow"
            key={review.slug}
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t"
                priority={index === 0}
              />
              <h2 className="font-semibold font-orbitron py-1 text-center">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReviewsPage;
