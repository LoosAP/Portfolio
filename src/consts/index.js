import {
  email,
  emailpng,
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
  project4,
  react,
  tailwind,
  vite,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    route: "./",
    title: "Home",
  },

  {
    id: "projects",
    route: "./projects",
    title: "Projects",
  },
  {
    id: "contact",
    route: "./contact",
    title: "Contact",
  },
];

export const projects = [
  {
    id: "project-4",
    title: "Lunch Ordering App",
    description:
      "During my 8 week work experience at Alföldi Printing House, I was tasked with developing a website that would enable the employees to order lunch, and for the vendors to check the orders and update the menu. I used NextJS for the frontend, NodeJS for the backend. I also used PocketBase for the database, and TailwindCSS, and Radix-UI for styling. Authentication is handled through cookies. Email services were solved with Resend. Hosting a showcase is a bit difficult, since it's a private app, but you can check out the code on Github.",
    img: project4,
    link: "https://github.com/LoosAP/Ebed-nextjs-pocketbase",
  },
  {
    id: "project-3",
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
      "I felt like putting this here too, since I'm quite proud of it. I learned a lot about self hosting through the process of making this website. It's built with React and TailwindCSS, and it's hosted on my Raspberry Pi. I'm planning to add more features to this website in the future, so stay tuned! ",
    img: logo2,
    link: "https://loosapp.com",
  },
  {
    id: "project-1",
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
        name: "Summarizer",
        link: "https://summarizer.loosapp.com",
      },
      {
        name: "Windows 98 Clone",
        link: "https://loosap.github.io",
      },
      {
        name: "Portfolio",
        link: "https://loosapp.com",
      },
    ],
  },
  {
    title: "Things i use",
    links: [
      {
        name: "TailwindCSS",
        link: "https://tailwindcss.com",
      },
      {
        name: "ReactJS",
        link: "https://react.dev",
      },
      {
        name: "ViteJS",
        link: "https://vitejs.dev",
      },
      {
        name: "NodeJS",
        link: "https://nodejs.org/en/",
      },
      {
        name: "Nginx",
        link: "https://www.nginx.com",
      },
    ],
  },
  {
    title: "Social Media",
    links: [
      {
        name: "Github",
        link: "https://github.com/LoosAP",
      },
      {
        name: "Facebook",
        link: "https://www.facebook.com/kisloosmester111",
      },
      {
        name: "Email",
        link: "mailto:loosandraspeter@gmail.com",
      },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/loosap/",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/loos.andras/",
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
    icon: email,
    link: "mailto:loosandraspeter@gmail.com",
    image: emailpng,
    content: "I check my email regularly, so feel free to send me a message.",
  },
  {
    name: "Linkedin",
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/loosap/",
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
