import Heading from "@/components/Heading";
import Image from "next/image";

function StartdewValleyPage() {
  return (
    <>
      <Heading>Stardew Valley</Heading>
      <Image
        src="/images/stardew-valley.jpg"
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <p>This will be the review for Stardew Valley.</p>
    </>
  );
}

export default StartdewValleyPage;
