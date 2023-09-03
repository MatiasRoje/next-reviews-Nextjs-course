import Heading from "@/components/Heading";
import { getReview } from "@/lib/reviews";
import Image from "next/image";

interface ReviewPageProps {
  params: { slug: string };
}

async function ReviewPage({ params: { slug } }: ReviewPageProps) {
  const review = await getReview(slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="italic pb-2 text-sm">{review.date}</p>
      <Image
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate text-justify"
      />
    </>
  );
}

export default ReviewPage;
