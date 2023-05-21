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
    description:
      "This is a project I made in preparation for my thesis. It's a web app that summarizes articles. It's built with React and TailwindCSS, and Redux for state management. AI really interests me, so I'm planning to add more features to this app in the future, or make similar apps.",
    img: project2,
    link: "https://summarizer.loosapp.com",
  },
  {
    id: "project-2",
    title: "Portfolio Website",
    description:
      "I felt like putting this here too, since I'm quite proud of it. It's built with React and TailwindCSS, and Vite for bundling. I'm planning to add more features to this website in the future, so stay tuned!",
    img: logo2,
    link: "https://loosapp.com",
  },
  {
    id: "project-3",
    title: "Windows 98 Clone",
    description:
      "This is quite an old project from the time I was learning HTML and CSS. I felt like including it in my projects, since it gives a good idea of how far I've come, and to what extent I've improved. It also gives some insight to my love for retro tech. It's a clone of Windows 98, and it's built with HTML and CSS and a bit of JavaScript. ",
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
