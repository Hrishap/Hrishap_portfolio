const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];



const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "JavaScript"],
  },
  {
    category: "Data structures and Algorithm",
    items: ["C++", "C"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Hrishap",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/hrishap-joshi/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [

    // ▶ Project 1: Nova Agent
    {
      id: 5,
      name: "Nova Agent – AI Mock Interview Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Nova Agent.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Nova Agent is an AI-powered mock interview platform designed to simulate real interview experiences.",
            "It allows users to practice interviews, receive AI-generated questions, and get structured feedback on responses.",
            "The platform helps candidates improve communication, confidence, and interview readiness using AI.",
            "Built using modern full-stack technologies with AI integration for real-time evaluation."
          ],
        },
        {
          id: 2,
          name: "nova-agent.github",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Hrishap/nova",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "nova-agent.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/nova.jpeg",
        },
        {
          id: 4,
          name: "GitHub.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Hrishap/nova",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2: Parallel Lives
    {
      id: 6,
      name: "Parallel Lives – What-if Simulator",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Parallel Lives.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Parallel Lives is a what-if simulation platform that explores alternative life choices and outcomes.",
            "Users can simulate different decisions and visualize how their lives might unfold under different scenarios.",
            "The project blends AI reasoning with storytelling to create meaningful and engaging simulations.",
            "It demonstrates strong problem modeling, system design, and creative AI usage."
          ],
        },
        {
          id: 2,
          name: "parallel-lives.github",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Hrishap/ParallelLives",
          position: "top-20 left-20",
        },
        {
          id: 3,
          name: "parallel-lives.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-parallelLives.png",
        },
        {
          id: 4,
          name: "GitHub.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Hrishap/ParallelLives",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3: AI Car Marketplace
    {
      id: 7,
      name: "AI Car Marketplace",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Car Marketplace.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "AI Car Marketplace is an intelligent platform for discovering and comparing cars using AI-driven recommendations.",
            "It helps users find suitable cars based on preferences, budget, and usage patterns.",
            "The system focuses on improving user decision-making using smart filtering and AI insights.",
            "This project highlights practical AI usage in a real-world marketplace scenario."
          ],
        },
        {
          id: 2,
          name: "ai-car-marketplace.github",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Hrishap/ai-car-marketplace",
          position: "top-10 right-20",
        },
   
        {
          id: 3,
          name: "GitHub.url",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Hrishap/ai-car-marketplace",
          position: "top-60 right-20",
        },
      ],
    },
    // ▶ Project 4: Signalist
{
  id: 8,
  name: "Signalist – AI Stock Market Platform",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-80 left-40",
  windowPosition: "top-[45vh] left-7",
  children: [
    {
      id: 1,
      name: "Signalist.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
        "Signalist is an AI-powered modern stock market platform designed for real-time financial insights and automation.",
        "It enables users to track live stock prices, manage watchlists, and set personalized alerts.",
        "The platform provides AI-driven company insights, sentiment analysis, earnings notifications, and daily market digests.",
        "An admin dashboard allows managing stocks, publishing news, and monitoring user activity.",
        "Built using Next.js, Shadcn UI, Better Auth, and Inngest with event-driven workflows for scalable automation."
      ],
    },
    {
      id: 2,
      name: "signalist.app",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://signalist-sand-tau.vercel.app",
      position: "top-10 right-20",
    },
    {
      id: 3,
      name: "signalist.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-80",
      imageUrl: "/images/signalist.png",
    },
    {
      id: 4,
      name: "GitHub.url",
      icon: "/images/plain.png",
      kind: "file",
      fileType: "url",
      href: "https://github.com/Hrishap/Signalist",
      position: "top-60 right-20",
    },
  ],
}

  ],
};


const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    // {
    //   id: 1,
    //   name: "me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-10 left-5",
    //   imageUrl: "/images/hrishap-1.jpg", // replace with your photo
    // },
    // {
    //   id: 2,
    //   name: "casual-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-28 right-72",
    //   imageUrl: "/images/hrishap-2.jpg", // optional casual photo
    // },
    // {
    //   id: 3,
    //   name: "conference-me.png",
    //   icon: "/images/image.png",
    //   kind: "file",
    //   fileType: "img",
    //   position: "top-52 left-80",
    //   imageUrl: "/images/hrishap-3.jpg", // optional professional photo
    // },
    {
      id: 1,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "AI-Focused Full Stack Developer",
      image: "/images/hrishap-1.jpeg",
      description: [
        "Hey! I’m Hrishap Joshi 👋 — a passionate full-stack developer with a strong interest in AI-driven products and problem solving.",
        "I enjoy building intelligent applications that combine clean user experiences with meaningful backend logic and AI capabilities.",
        "My work spans modern web technologies, system design, and applied AI — from mock interview platforms to intelligent simulators and marketplaces.",
        "I believe good software should be simple to use, scalable by design, and built with clarity in both code and purpose.",
        "Currently, I’m focused on sharpening my engineering skills, building real-world projects, and preparing for high-impact software roles."
      ],
    },
  ],
};


const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMinimized: false, isMaximized: false },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
