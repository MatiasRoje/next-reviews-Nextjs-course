import Heading from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="bg-gray-50 border rounded w-80 sm:w-2/3 shadow-sm hover:shadow">
        <Link
          href="/reviews/stardew-valley"
          className="flex flex-col sm:flex-row"
        >
          <Image
            src="/images/stardew-valley.jpg"
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-semibold font-orbitron py-1 text-center sm:px-2">
            Stardew Valley
          </h2>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
