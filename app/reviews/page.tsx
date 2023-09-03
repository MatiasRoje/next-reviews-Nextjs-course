import Link from "next/link";
import Heading from "@/components/Heading";
import Image from "next/image";

function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-col gap-3">
        <li className="bg-gray-50 border rounded w-80 shadow-sm hover:shadow">
          <Link href="/reviews/stardew-valley">
            <Image
              src="/images/stardew-valley.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t"
            />
            <h2 className="py-1 text-center">Stardew Valley</h2>
          </Link>
        </li>
        <li className="bg-gray-50 border rounded w-80 shadow-sm hover:shadow">
          <Link href="/reviews/hollow-knight">
            <Image
              src="/images/hollow-knight.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t"
            />
            <h2 className="py-1 text-center">Hollow Knight</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default ReviewsPage;
