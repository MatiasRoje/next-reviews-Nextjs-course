import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

async function HomePage() {
  const featuredReview = await getFeaturedReview();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="bg-gray-50 border rounded w-80 sm:w-2/3 shadow-sm hover:shadow">
        <Link
          href={`/reviews/${featuredReview.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <Image
            src={featuredReview.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">
            {featuredReview.title}
          </h2>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
