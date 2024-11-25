export interface projectListProps {
  title: string;
  subTitle: string;
  description: string;
  stacks: string[];
  year: string;
  liveLink?: string;
  githubLink: string;
  imageLink: string;
}

export const projectList: projectListProps[] = [
  {
    title: "Evently",
    subTitle: "Event Management Full Stack Project",
    description:
      "Evently is a full-stack event management app built with Tailwind, TypeScript, Next.js, Node.js, and MongoDB. It allows users to create, manage, and track events efficiently, featuring a modern UI, responsive design, and robust backend integration.",
    stacks: ["Tailwind, Typescript, Nextjs", "MongoDB", "Nodejs"],
    year: "Dec 2024",
    liveLink: "https://evently-mu-ten.vercel.app/",
    githubLink: "https://github.com/codnrawbwj/evently",
    imageLink: "/assets/evently.png",
  },
  {
    title: "Updated Portfolio Website",
    subTitle: "Migrated from Vanila JS to Nextjs",
    description: `Previously built with Vanilla JS, HTML, and CSS, my portfolio website has evolved into a more sophisticated and dynamic platform. Leveraging TypeScript, Next.js, and Framer Motion, I have implemented advanced techniques to create a responsive, interactive, and visually engaging experience that reflects my growth as a front-end developer.`,
    stacks: ["Tailwind", "Typescript", "Nextjs", "Git"],
    year: "Nov 2024",
    liveLink: "/",
    githubLink: "https://github.com/codnrawbwj/TimmyLim",
    imageLink: "/assets/timothyLim.png",
  },
  {
    title: "Wiki-Flix",
    subTitle: "Movie Search Website for Your Taste!",
    description: `Responsive React web application using external API.
A movie listing app that displays results based on user-provided keywords.
Utilized React components and state management for efficient UI updates.
Implemented responsive design using CSS and Bootstrap.`,
    stacks: ["HTML", "CSS", "Javascript", "React"],
    year: "May 2023",
    liveLink: undefined,
    githubLink: "https://github.com/codnrawbwj/wikiflix-react",
    imageLink: "/assets/wikiflix.png",
  },
  {
    title: "Weather App",
    subTitle: "Mobile-first Designed Weather App!",
    description: `A responsive weather App using HTML, CSS, and JavaScript.
Utilized JavaScript to dynamically update the weather information based on user inputs.
Integrated an external weather API to fetch and display real-time weather information.
Designed and styled the user interface using CSS to provide an intuitive and visually appealing experience.`,
    stacks: ["HTML", "CSS", "Javascript"],
    year: "April 2023",
    liveLink: undefined,
    githubLink: "https://github.com/codnrawbwj/WeatherApp-JS",
    imageLink: "/assets/weather.png",
  },
  {
    title: "Sushi Sake",
    subTitle: "Sushi Restaurant Website!",
    description: `A visually appealing Sushi restaurant website based on provided designs and assets.
Incorporated animations and transitions using CSS and JavaScript to enhance visual appeal and interactivity.`,
    stacks: ["HTML", "CSS"],
    year: "June 2023",
    liveLink: "https://codnrawbwj.github.io/sushi-restaurant/",
    githubLink: "https://github.com/codnrawbwj/sushi-restaurant",
    imageLink: "/assets/sushisake.png",
  },
];
