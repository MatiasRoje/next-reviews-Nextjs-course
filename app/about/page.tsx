import Heading from "@/components/Heading";

export const metadata = {
  title: "About",
};

function AboutPage() {
  return (
    <>
      <Heading>About</Heading>
      <p>
        A website created to learn{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="text-orange-800 hover:underline"
        >
          Next.js
        </a>
        .
      </p>
    </>
  );
}

export default AboutPage;
