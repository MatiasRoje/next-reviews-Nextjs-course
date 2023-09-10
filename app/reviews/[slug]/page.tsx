import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";
import { Metadata } from "next";
import Image from "next/image";

interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: ReviewPageParams;
}

export async function generateMetadata({
  params: { slug },
}: ReviewPageProps): Promise<Metadata> {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

// export async function generateStaticParams(): Promise<ReviewPageParams[]> {
//   const slugs = await getSlugs();

//   return slugs.map((slug) => ({ slug }));
// }

async function ReviewPage({ params: { slug } }: ReviewPageProps) {
  const review = await getReview(slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-3 items-baseline mb-1">
        <p className="italic pb-2 text-sm">{review.date}</p>
        <ShareLinkButton />
      </div>
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
