import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "next/image";
import { getReviews } from "@/lib/reviews";
import PaginationBar from "@/components/PaginationBar";

// NOTE: You can revalidate the whole page this way
// export const revalidate = 500;

const PAGE_SIZE = 6;

interface ReviewsPageProps {
  searchParams: { page?: string };
}

export const metadata = {
  title: "Reviews",
};

function parsePageParam(paramValue: string): number {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
    return 1;
  }
}

async function ReviewsPage({ searchParams }: ReviewsPageProps) {
  const page = searchParams.page ? parsePageParam(searchParams.page) : 1;
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);

  return (
    <>
      <Heading>Reviews</Heading>
      <PaginationBar href="/reviews/" page={page} pageCount={pageCount} />
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
