export interface projectListProps {
  title: string;
  subTitle: string;
  description: string;
  stacks: string[];
  date: string;
  liveLink?: string;
  githubLink: string;
  imageLink: string;
}

export const projectList: projectListProps[] = [
  {
    title: "Evently",
    subTitle: "Event Management Full-Stack Project",
    description: `Evently is a full-stack event management app built with Tailwind, TypeScript, Next.js, Node.js, and MongoDB.\n 
    It allows users to create, manage, and track events efficiently, featuring a modern UI, responsive design, and robust backend integration.`,
    stacks: ["React", "Tailwind", "Typescript", "Nextjs", "MongoDB", "Nodejs"],
    date: "Dec 2024",
    liveLink: "https://evently-mu-ten.vercel.app/",
    githubLink: "https://github.com/codnrawbwj/evently",
    imageLink: "./public/assets/evently.png",
  },
  {
    title: "Renewed Portfolio Website",
    subTitle: "Migrated from Vanila JS to Nextjs",
    description: `My old portfolio website had a similar design, but it was originally developed using Vanilla JavaScript, HTML, and CSS. Now, it has been migrated to React, Tailwind, and Next.js, which better showcases my Frontend skills 😉.\n You can find both versions of the code in my GitHub link below. `,
    stacks: ["React", "Tailwind", "Typescript", "Nextjs", "Git"],
    date: "Nov 2024",
    liveLink: "/",
    githubLink: "https://github.com/codnrawbwj/TimmyLim",
    imageLink: "./public/assets/timothyLim.png",
  },
  {
    title: "Sushi Sake",
    subTitle: "Sushi Restaurant Website!",
    description: `A visually appealing Sushi restaurant website based on provided designs and./public assets.
Incorporated animations and transitions using CSS and JavaScript to enhance visual appeal and interactivity.`,
    stacks: ["HTML", "CSS"],
    date: "June 2023",
    liveLink: "https://codnrawbwj.github.io/sushi-restaurant/",
    githubLink: "https://github.com/codnrawbwj/sushi-restaurant",
    imageLink: "./public/assets/sushisake.png",
  },
  {
    title: "Wiki-Flix",
    subTitle: "Movie Search Website for Your Taste!",
    description: `Responsive React web application using external API.
A movie listing app that displays results based on user-provided keywords.
Utilized React components and state management for efficient UI updates.
Implemented responsive design using CSS and Bootstrap.`,
    stacks: ["HTML", "CSS", "Javascript", "React"],
    date: "May 2023",
    liveLink: undefined,
    githubLink: "https://github.com/codnrawbwj/wikiflix-react",
    imageLink: "./public/assets/wikiflix.png",
  },
  {
    title: "Weather App",
    subTitle: "Mobile-first Designed Weather App!",
    description: `A responsive weather App using HTML, CSS, and JavaScript.
Utilized JavaScript to dynamically update the weather information based on user inputs.
Integrated an external weather API to fetch and display real-time weather information.
Designed and styled the user interface using CSS to provide an intuitive and visually appealing experience.`,
    stacks: ["HTML", "CSS", "Javascript"],
    date: "April 2023",
    liveLink: undefined,
    githubLink: "https://github.com/codnrawbwj/WeatherApp-JS",
    imageLink: "./public/assets/weather.png",
  },
];
