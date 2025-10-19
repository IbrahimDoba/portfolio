type Project = {
  title: string;
  description: string;
  href: string;
  github?: string;
  image: string;
  tags: string[];
  featured?: boolean;
};

export const NAVIGATION = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  //contact is included in the navigation by contact-form.tsx
];

export const PROJECTS: Project[] = [
  {
    title: "Pristique-Build",
    description:
      "Developed a modern and responsive website for Prestiq Build, a construction company specializing in steel frame housing. ",
    href: "https://www.pristiqbuild.com",
    github: "https://github.com/IbrahimDoba/PristiqueBuild",
    image: "/projects/pristiq.png",
    tags: ["NextJS", "Tailwind CSS"],
  },
  {
    title: "Silver - Movie Site",
    description:
      "A dynamic movie database site built with React and RESTful API integration. It allows users to search for movies, view detailed information, and explore various genres using a clean, user-friendly interface.",
    href: "https://silvermoviesite.netlify.app",
    github: "https://github.com/IbrahimDoba/SIlver.MovieSite",
    image: "/projects/movie.png",
    tags: ["React", "Styled Components", "TypeScript", "Rest Api"],
  },
  {
    title: "Silver - Recipe",
    description:
      "A React-powered recipe platform featuring RESTful API integration, enabling users to search for and explore a wide range of recipes. It offers detailed ingredient lists, cooking instructions,",
    href: "https://silver-recipesite.netlify.app",
    github: "https://github.com/IbrahimDoba/My_Recipe_App",
    image: "/projects/recipie.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Rest Api"],
  },
  {
    title: "Quillstash",
    description:
      "A tech-focused platform for writers and developers, using Next.js for its full-stack capabilities. The project features a responsive, user-friendly design and integrates with Neon DB for database management.",
    href: "https://quill-stash.vercel.app/",
    image: "/projects/quillstash-landing.png",
    tags: ["Next.js", "Drizzle ORM", "Tailwind CSS", "NextUi", "NeonDB"],
  },
  {
    title: "Ssaver - Youtube Saver",
    description:
      "I developed Ssaver, a web tool that allows users to download YouTube videos and thumbnails, using Next.js and Node.js for its backend and frontend functionality. The site features a clean, responsive design with Tailwind CSS.",
    href: "https://nextjs-yt-app.vercel.app",
    image: "/projects/ssaver-landing.png",
    tags: ["Nextjs", "React", "NodeJs", "Tailwind Css"],
  },
  {
    title: "Wordgen",
    description:
      "Wordgen is a multifunctional app that offers a word, name, and quote generator, alongside a dedicated space for writing daily journals. Built using Next.js for the frontend and Django for the backen. I collaborated with a team to bring this versatile tool to life.",
    href: "https://www.wordgen.org",
    image: "/projects/wordgenpng.png",
    tags: ["Nextjs", "Django", "Python", "Tailwind Css"],
  },
  {
    title: "QuillAI",
    description:
      "Effortlessly generate highly SEO-optimized articles and keywords with QuillAI, empowering businesses and writers to create impactful content and save time.",
    href: "https://quillai-beryl.vercel.app/",
    image: "/projects/quillai.png",
    tags: ["Nextjs", "Prisma", "NeonDB", "Tailwind Css"],
  },
  {
    title: "Reeplify",
    description:
      "Reeplify is an AI-powered YouTube content creation platform that automates the entire video production process — from scriptwriting and voice generation to transcription, subtitles, and compilation. Built with Node.js, it's perfect for effortless, high-quality faceless video creation.",
    href: "#", // No public URL available yet
    image: "/projects/reeplify-landing.png",
    tags: ["AI", "Node.js", "Next.js", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Dailzero Creator Tool",
    description:
      "An internal AI content creation tool built for Dailzero to generate personalized social media content for platforms like Instagram and X. It leverages AI to craft posts, captions, and visuals tailored to Dailzero's brand voice and marketing goals.",
    href: "#", // No public URL available yet
    image: "/projects/dailzero-creator.png",
    tags: ["AI", "Next.js", "Content Generation", "Tailwind CSS", "Prisma ORM"],
    featured: true,
  },
];

export const FOOTER_PAGES = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
];

export const SOCIALS = [
  {
    title: "Github",
    href: "https://github.com/IbrahimDoba",
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/ibrahimdoba/",
  },
  {
    title: "X",
    href: "https://x.com/DobaIbrahim",
  },
];

// export const OTHERS = [
//   {
//     title: "Buy me a coffee",
//     href: "https://buymeacoffee.com/swajp",
//   },
// ];

//

export const TECH_STACK = [
  {
    title: "Next.js",
    href: "https://nextjs.org",
    image: "https://cdn.simpleicons.org/Nextdotjs"
  },
  {
    title: "React",
    href: "https://reactjs.org",
    image: "https://cdn.simpleicons.org/React"
  },
  {
    title: "Git",
    href: "https://git-scm.com",
    image: "https://cdn.simpleicons.org/Git"
  },
  {
    title: "Figma",
    href: "https://figma.com",
    image:  "https://cdn.simpleicons.org/Figma"
  },
  {
    title: "MySQL",
    href: "https://www.mysql.com",
    image:  "https://cdn.simpleicons.org/Mysql"
  },
  {
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    image:  "https://cdn.simpleicons.org/Typescript"
  },
  {
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    image:  "https://cdn.simpleicons.org/Tailwindcss"
  },
  {
    title: "Framer Motion",
    href: "https://www.framer.com/motion",
    image:  "https://cdn.simpleicons.org/Framer"
  },
  {
    title: "MongoDB",
    href: "https://www.mongodb.com",
    image:  "https://cdn.simpleicons.org/Mongodb"
  },
 
  {
    title: "Drizzle ORM",
    href: "https://orm.drizzle.team",
    image:  "https://cdn.simpleicons.org/Drizzle"
  },
  {
    title: "Prisma",
    href: "https://www.prisma.io",
    image:  "https://cdn.simpleicons.org/Prisma"
  },
];

export const QUILLSTASH = {
  title: "Quillstash",
  description:
    "A tech-focused platform for writers and developers, using Next.js for its full-stack capabilities. The project features a responsive, user-friendly design and integrates with Neon DB for database management.",
  href: "https://quill-stash.vercel.app/",
  image: "/projects/quillstash-landing.png",
  tags: ["Next.js", "Drizzle ORM", "Tailwind CSS", "NextUi", "NeonDB"],
};

export const SSAVER = {
  title: "Ssaver - Youtube Saver",
  description:
    "I developed Ssaver, a web tool that allows users to download YouTube videos and thumbnails, using Next.js and Node.js for its backend and frontend functionality. The site features a clean, responsive design with Tailwind CSS.",
  href: "https://nextjs-yt-app.vercel.app",
  image: "/projects/ssaver-landing.png",
  tags: ["Nextjs", "React", "NodeJs", "Tailwind Css"],
};

export const WORDGEN = {
  title: "Wordgen ",
  description:
    " Wordgen is a multifunctional app that offers a word, name, and quote generator, alongside a dedicated space for writing daily journals. Built using Next.js for the frontend and Django for the backen. I collaborated with a team to bring this versatile tool to life.",
  href: "https://www.wordgen.org",
  image: "/projects/wordgenpng.png",
  tags: ["Nextjs", "Django", "Python", "Tailwind Css"],
};
export const REEPLIFY = {
  title: "Reelify",
  description:
    "Reeplify is an AI-powered YouTube content creation platform that automates the entire video production process — from scriptwriting and voice generation to transcription, subtitles, and compilation. Built with Node.js, it’s perfect for effortless, high-quality faceless video creation.",
  // href: "https://reeplify.com",
  image: "/projects/reeplify-landing.png",
  tags: ["AI", "Node.js", "Next.js", "Tailwind CSS"],
};

export const PLATTERNG = {
  title: "Platter",
  description:
    "Platter is a complete QR ordering system for restaurants in Nigeria, featuring an admin dashboard, guest app, staff app, and landing page. It uses Node.js for real-time communication between all apps, ensuring seamless in-dining service management and order tracking.",
  href: "https://platterng.com",
  image: "/projects/platter-landing.png",
  tags: ["Next.js", "Node.js", "Tailwind CSS", "NeonDB", "Prisma ORM"],
};

export const DAILZERO = {
  title: "Dailzero - AI Receptionist",
  description:
    "Dailzero is a real-time AI receptionist platform built with Next.js and Node.js, designed to help businesses handle calls intelligently and never miss another inquiry. It currently serves over 20+ businesses, helping them save time and improve customer satisfaction.",
  href: "https://dailzero.com",
  image: "/projects/dailzero-landing.png",
  tags: ["Next.js", "Node.js", "AI", "Realtime", "Tailwind CSS", "Prisma ORM"],
};

export const DAILZERO_CREATOR = {
  title: "Dailzero Creator Tool",
  description:
    "An internal AI content creation tool built for Dailzero to generate personalized social media content for platforms like Instagram and X. It leverages AI to craft posts, captions, and visuals tailored to Dailzero’s brand voice and marketing goals.",
  // href: "https://dailzero.com",
  image: "/projects/dailzero-creator.png",
  tags: ["AI", "Next.js", "Content Generation", "Tailwind CSS", "Prisma ORM"],
};

export const QUILLAI = {
  title: "QuillAI ",
  description:
    " Effortlessly generate highly SEO-optimized articles and keywords with QuillAI, empowering businesses and writers to create impactful content and save time.",
  href: "https://quillai-beryl.vercel.app/",
  image: "/projects/quillai.png",
  tags: ["Nextjs", "Prisma", "NeonDB", "Tailwind Css"],
};