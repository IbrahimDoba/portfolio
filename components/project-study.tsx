import { QUILLAI, QUILLSTASH, SSAVER, WORDGEN } from "@/config";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";
import MaxWidthWrapper from "./max-width-wrapper";

export default function ProjectStudy() {
  const project = QUILLSTASH;
  const saver = SSAVER;
  const quillAi = QUILLAI;
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <h2 className="text-4xl font-bold">My Crafts</h2>
      <p className="text-muted-foreground mt-1 mb-4">
        A Deep Dive into What I&apos;ve Crafted
      </p>
      <div className="flex gap-8 flex-col">
      <Link href={quillAi.href}>
          <Card className="h-full group flex flex-col lg:flex-row justify-between">
            <div className="p-4 w-full">
              <div className="overflow-hidden rounded-lg">
                <Image
                  priority
                  alt="Image"
                  className="group-hover:scale-105 transition-all"
                  width={1280}
                  height={832}
                  quality={100}
                  src={quillAi.image}
                />
              </div>
            </div>
            <div className="lg:p-4 w-full lg:border-l lg:flex items-end">
              <div>
                <CardHeader className="pt-0 pb-3">
                  <CardTitle>{quillAi.title}</CardTitle>
                  <CardDescription>{quillAi.description}</CardDescription>
                </CardHeader>
                <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
                  {quillAi.tags.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </div>
            </div>
          </Card>
        </Link>
        <Link href={project.href}>
          <Card className="h-full group flex flex-col lg:flex-row justify-between">
            <div className="p-4 w-full">
              <div className="overflow-hidden rounded-lg">
                <Image
                  priority
                  alt="Image"
                  className="group-hover:scale-105 transition-all"
                  width={1280}
                  height={832}
                  quality={100}
                  src={project.image}
                />
              </div>
            </div>
            <div className="lg:p-4 w-full lg:border-l lg:flex items-end">
              <div>
                <CardHeader className="pt-0 pb-3">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
                  {project.tags.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </div>
            </div>
          </Card>
        </Link>
        <Link href={saver.href}>
          <Card className="h-full group flex flex-col-reverse lg:flex-row justify-between">
            <div className="lg:p-4 w-full lg:border-r lg:flex items-end">
              <div>
                <CardHeader className="pt-0 pb-3">
                  <CardTitle>{saver.title}</CardTitle>
                  <CardDescription>{saver.description}</CardDescription>
                </CardHeader>
                <CardFooter className="*:mr-2 *:mb-2 flex flex-wrap">
                  {saver.tags.map((tag) => (
                    <Badge variant="secondary" key={tag}>
                      {tag}
                    </Badge>
                  ))}
                </CardFooter>
              </div>
            </div>
            <div className="p-4 w-full">
              <div className="overflow-hidden rounded-lg">
                <Image
                  priority
                  alt="Image"
                  className="group-hover:scale-105 transition-all"
                  width={1280}
                  height={832}
                  quality={100}
                  src={saver.image}
                />
              </div>
            </div>
          </Card>
        </Link>
        
      </div>
    </MaxWidthWrapper>
  );
}
