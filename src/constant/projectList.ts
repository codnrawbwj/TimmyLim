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
    title: "Mr.Lime",
    subTitle: "",
    description: `Mr.Lime is a sleek and fast cocktail information site, helping you discover and explore cocktails effortlessly. Built with Tailwind, TypeScript, React, Next.js, Node.js, and MongoDB.\n 
    It allows users to search cocktail recipes with modern UIs, responsive design, and robust backend integration.`,
    stacks: ["React", "Tailwind", "Typescript", "Nextjs", "MongoDB", "Nodejs"],
    date: "Mar 2025 - in progress",
    liveLink: "https://mrlime-timmys-projects-49ec29d6.vercel.app/",
    githubLink: "https://github.com/codnrawbwj/mrlime",
    imageLink: "./assets/mrlime.png",
  },
  {
    title: "Renewed Portfolio Website",
    subTitle: "Migrated from Vanila JS to Nextjs",
    description: `My old portfolio website had a similar design, but it was originally developed using Vanilla JavaScript, HTML, and CSS. Now, it has been migrated to React, Tailwind, and Next.js, which better showcases my Frontend skills 😉.\n You can find both versions of the code in my GitHub link below. `,
    stacks: ["React", "Tailwind", "Typescript", "Nextjs", "Git"],
    date: "Nov 2024",
    liveLink: "/",
    githubLink: "https://github.com/codnrawbwj/TimmyLim",
    imageLink: "./assets/timothyLim.png",
  },
  {
    title: "Sushi Sake",
    subTitle: "Sushi Restaurant Website!",
    description: `A visually appealing Sushi restaurant website based on provided designs and. assets.
Incorporated animations and transitions using CSS and JavaScript to enhance visual appeal and interactivity.`,
    stacks: ["HTML", "CSS"],
    date: "June 2023",
    liveLink: "https://codnrawbwj.github.io/sushi-restaurant/",
    githubLink: "https://github.com/codnrawbwj/sushi-restaurant",
    imageLink: "./assets/sushisake.png",
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
    imageLink: "./assets/wikiflix.png",
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
    imageLink: "./assets/weather.png",
  },
];
