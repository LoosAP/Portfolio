import {
  facebook,
  facebookpng,
  figma,
  github,
  githubpng,
  instagram,
  instagrampng,
  linkedin,
  linkedinpng,
  logo2,
  people01,
  people02,
  people03,
  project1,
  project2,
  react,
  tailwind,
  vite,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    route: "",
    title: "Home",
  },

  {
    id: "projects",
    route: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    route: "contact",
    title: "Contact",
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Article Summarizer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    img: project2,
    link: "https://summarizer.loosapp.com",
  },
  {
    id: "project-2",
    title: "Portfolio Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: logo2,
    link: "https://loosapp.com",
  },
  {
    id: "project-3",
    title: "Windows 98 Clone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: project1,
    link: "https://loosap.github.io",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    name: "Instagram",
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/loos.andras/",
    image: instagrampng,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "Facebook",
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/kisloosmester111",
    image: facebookpng,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "Github",
    id: "social-media-3",
    icon: github,
    link: "https://github.com/LoosAP",
    image: githubpng,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    name: "Linkedin",
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
    image: linkedinpng,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

export const tools = [
  {
    id: "react",
    logo: react,
    link: "https://react.dev",
  },
  {
    id: "tailwind",
    logo: tailwind,
    link: "https://tailwindcss.com",
  },
  {
    id: "vite",
    logo: vite,
    link: "https://vitejs.dev",
  },
  // {
  //   id: "figma",
  //   logo: figma,
  //   link: "https://www.figma.com",
  // },
];
/*export const projects = [
  {
    id: "project_1",
    img: project_1 ,
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam amet accusamus incidunt excepturi, consequatur dolores, cupiditate molestias impedit esse ut possimus provident facere eligendi. Et dolorum impedit inventore quos officiis!"
  },
]*/
