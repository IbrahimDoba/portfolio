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
    title: "QR-Code Review Generator",
    description:
      " A sleek and responsive QR code generator built using Next.js, NextUI, and Tailwind CSS. This tool allows users to effortlessly generate customized QR codes, providing an intuitive interface with a modern design and seamless performance across devices.",
    href: "https://qr-gen-code.vercel.app",
    github: "https://github.com/IbrahimDoba/qr-gen-code",
    image: "/projects/qrcode.png",
    tags: ["Next.js", "Tailwind CSS", "NextUi"],
    featured: true,
  },
  {
    title: "Silver - Ai PDF",
    description:
      "Built an AI-driven platform using Next.js, Node.js, and Langchain, enabling users to upload PDF files and interact with the content by asking questions. Leveraging advanced LLM capabilities.",
    href: "https://ai-pdf-eight.vercel.app",
    github: "https://github.com/IbrahimDoba/AI-PDF",
    image: "/projects/aipdf.png",
    tags: ["NextJS", "Tailwind CSS", "NodeJs", "LLM", "LangChain"],
  },
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
    featured: true,
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
];

export const QUILLSTASH = {
  title: "Quillstash",
  description:
    "A tech-focused platform for writers and developers, using Next.js for its full-stack capabilities. The project features a responsive, user-friendly design and integrates with Neon DB for database management.",
  href: "https://quillstash.com",
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
