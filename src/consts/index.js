import {
  email,
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
    name: "Github",
    id: "social-media-1",
    icon: github,
    link: "https://github.com/LoosAP",
    image: githubpng,
    content:
      "Looking for my projects? You can find them on Github. Feel free to star them!",
  },
  {
    name: "Facebook",
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/kisloosmester111",
    image: facebookpng,
    content:
      "Messaging me on Facebook is the best way to get in touch with me.",
  },
  {
    name: "Email",
    id: "social-media-3",
    icon: "email",
    link: "mailto:loosandraspeter@gmail.com",
    image: email,
    content: "I check my email regularly, so feel free to send me a message.",
  },
  {
    name: "Linkedin",
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
    image: linkedinpng,
    content: "I'm not very active on Linkedin, but you can find me there too.",
  },
  {
    name: "Instagram",
    id: "social-media-5",
    icon: instagram,
    link: "https://www.instagram.com/loos.andras/",
    image: instagrampng,
    content:
      "While I don't post much, you can find me on Instagram. Feel free to follow me!",
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
