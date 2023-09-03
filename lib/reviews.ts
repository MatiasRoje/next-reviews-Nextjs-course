import { readFile, readdir } from "node:fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

interface Review {
  title: string;
  date: string;
  image: string;
  body: string;
  slug: string;
}

export async function getReview(slug: string): Promise<Review> {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf8");
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content);
  return { body, title, image, date, slug };
}

export async function getReviews() {
  const slugs = await getSlugs();

  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }

  // The newest review get order at the beginning of the array, as the novelties should be at the top of the page
  return reviews.sort(
    (a: Review, b: Review) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getSlugs() {
  const files = await readdir("./content/reviews");
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
}

export async function getFeaturedReview() {
  const reviews = await getReviews();
  return reviews[0];
}
