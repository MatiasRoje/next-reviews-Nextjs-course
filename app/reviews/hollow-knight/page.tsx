import Heading from "@/components/Heading";
import Image from "next/image";

function HollowKnightPage() {
  return (
    <>
      <Heading>Hollow Knight</Heading>
      <Image
        src="/images/hollow-knight.jpg"
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <p>This will be the review for Hollow Knight.</p>
    </>
  );
}

export default HollowKnightPage;
