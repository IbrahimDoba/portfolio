import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <h2 className="text-4xl font-bold text-primary">About</h2>
      <p className="text-muted-foreground mt-1 mb-4">Something About me</p>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full space-y-3 ">
          <p>
            Hi! I&apos;m <span className="text-2xl font-bold ">Ibrahim Doba</span>, a FullS-Stack Nextjs developer with 4 years of
            hands-on coding experience. What started as a curiosity for web
            development has now grown into a daily passion where I get to craft
            modern and visually appealing websites.
          </p>
          <p>
            I&apos;m a big fan of using emerging technologies like <span className="font-bold"> Next.js,
            React, and Tailwind CSS, </span> which help me bring the latest trends and
            best practices to life in web development. My goal is to create
            websites that not only function seamlessly but also leave a lasting
            visual impression.
          </p>
          <p>
            While my focus is on frontend development, I&apos;m equally
            comfortable working on full-stack applications using tools like
           <span className="font-bold"> MongoDB, Drizzle ORM, NeonDB, and Node.js.</span> Whether it&apos;s
            frontend flair or backend logic, I&apos;m all about delivering a
            complete and polished web experience.
          </p>
          <p>
            Outside of coding, I enjoy hitting the gym regularly, health first!
            I&apos;m also a huge cat lover. And who knows? When I&apos;m not coding or
            working out, you might catch me brainstorming new ideas for my next
            project.
          </p>
         
        </div>
        <div className="w-full"></div>
      </div>
    </MaxWidthWrapper>
  );
}
