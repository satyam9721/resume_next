import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  TwitterIcon,
  Linkedin,
  Github,
} from "lucide-react";
interface Contact {
  type: string;
  icon: JSX.Element;
  value: string;
  href?: string;
  datetime?: string;
  isAddress?: boolean;
}
export const Name = "Aman Gupta";
export const Occupation = "Web Developer";

export const contacts: Contact[] = [
  {
    type: "Email",
    icon: <Mail />,
    value: "imaman9294@gmail.com",
    href: "mailto:",
  },
  {
    type: "Phone",
    icon: <Phone />,
    value: "9170615023",
    href: "tel:+12133522795",
  },

  {
    type: "Location",
    icon: <MapPin />,
    value: "Delhi India",
    isAddress: true,
  },
];

export const socialMediaLinks = [
  {
    name: "Twitter",
    url: "https://x.com/amangupta041?t=UVyLQ5ZY9ZRQKfy4WmtUmw&s=09",
    icon: <TwitterIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aman-gupta-7577691b5",
    icon: <Linkedin />,
  },
  {
    name: "Github",
    url: "https://github.com/amanguptak",
    icon: <Github />,
  }
  // Add more social media objects as needed
];

export const AboutMe = `I am a  Web Developer with a fervor for crafting interactive and responsive web applications. Possessing proficiency in JavaScript, TypeScript, React, Redux, Node.js, Express.js, Next.js,
        HTML, CSS, and Git,
       I bring a comprehensive skill set to the development landscape. My commitment 
       to continual learning is evidenced by my quick adaptability and eagerness to broaden my knowledge base. Recognized as a dedicated team player, I am enthusiastic about collaborative efforts to conceive and deliver exceptional
        applications. My professional approach and passion for web
         development fuel my commitment to contributing meaningfully to 
         collaborative projects I collaborate closely with clients to
      create efficient, scalable, and user-friendly solutions that solve
      real-world problems. Let's work together to bring your ideas to life!`;

export const SkillsData  = [
  {
    name: "Html",
    img: "https://cdn-icons-png.flaticon.com/512/174/174854.png",
  },
  {
    name: "Css",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png",
  },
  {
    name: "Javascript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
  },
 
  {
    name: "React",
    img: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png",
  },
  {
    name: "Next js",
    img: "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
  },
  {
    name: "Node Js",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-node-js-3550841-2970426.png"},
  {
    name: "Express js",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMljNHtufEhORorpm03zCLtzlnY2R_gvx4cZYwSh_auF0rSZvjFO5kALPmyDgj9axhleY&usqp=CAU",
  },
  {
    name: "GitHub",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn11Rru16VFClaKhYzoL9yGLIwOEaggMpa1Q&usqp=CAU",
  },
  {
    name: "Docker",
    img: "https://miro.medium.com/v2/resize:fit:601/1*e8u6teTHyalPejIBauj4Jw.png",
  },
  {
    name: "Redux",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTifmdBhm6i8KHRRMO9XDSytESNl3ywhe867Q&s",
  },
  {
    name: "Tailwind Css",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKPw4CK4jcH7udsFHZdiB3iIOuI3fUCsxUZosXy4Y1yd25NA-dzCBPrSDIhg1BwObl3w&usqp=CAU",
  },
  {
    name: "Sass",
    img: "https://sass-lang.com/assets/img/styleguide/seal-color-reversed.png",
  },
  {
    name: "TypeScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201",
  },
  {
    name: "Bootstrap",
    img: "https://cdn3d.iconscout.com/3d/free/thumb/free-bootstrap-framework-logo-6563486-5453031.png?f=webp",
  },
  {

    name: "aws",
    img:"https://cdn3d.iconscout.com/3d/free/thumb/free-amazon-web-services-8074662-6507782.png?f=webp"
  },
  {
    name: "Gitlab",
    img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/gitlab_tile_logo_icon_170092.png",
  },
  {
    name:"React query",
    img:"https://media.dev.to/cdn-cgi/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fglll1swn5umyjemv09ql.png"
  }
];

export const projectsData = [
  {
    id: 1,
    title: "Anime Clothing store use NextJS and Mern Stack",
    description: "A ecommerce Web app full responsive using Next Js redux, bootstrap,,mui , expressjs and mongdb(mongoAtlas), for authentication I used jwt and stored the token inside cookies for user and admin validation I created middleware. And frontend is designed in Next js and redux toolkit used reduxthunk for api call,login ,register page with attractive user interface and use Scss..",
    image: "/animeEcom.png",
    tag: ["All", "Web"],
    gitUrl: "https://gitlab.com/animeuchiha/Ecom",
    previewUrl: "https://anime-clothing-frontend.vercel.app",
  },
  {
    id: 2,
    title: "Job Hunting Website",
    description: "Job website where user can apply for the job and they can accesses more feature a website after registration , frontend of website is based on React and backend is based on Express js and jwt is used for authentication mongoDB is used as database.",
    image: "/jobwebsite.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amanguptak/JobWebsite/tree/master",
    previewUrl: "/",
  },
 
  {
    id: 3,
    title: "Weather App React  PWA",
    description: "Used axios , React and used PWA features of React ",
    image: "/weather.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://weatherappbyaman.web.app/",
  },
  {
    id: 4,
    title: "Motion an Ai powered note talking app",
    description: "Motion, fully responsive web application utilizing Next.js 13, an innovative frontend framework rooted in React.js. Developed with TypeScript, the project featured meticulous styling using Tailwind CSS to achieve a refined and contemporary user interface. Integrated MongoDB as the backend database for streamlined and secure data management. Successfully orchestrated the seamless integration of the OpenAI API, enhancing the application with cutting-edge artificial intelligence capabilities. Implemented Pinecone for precise request optimization, resulting in a substantial improvement in overall performance. A standout feature of this project is the integration of an AI chatbot 🤖, seamlessly incorporated to deliver insightful responses derived from users' current notes, thereby significantly enhancing overall user engagement. This project serves as a testament to proficiency in contemporary web development technologies and a steadfast commitment to optimizing the user experience.",
    image: "https://i.postimg.cc/hjHdG1M3/Screenshot-2023-12-11-120722.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/amanguptak/MotionMan",
    previewUrl: "https://motion-aman.vercel.app",
  },
  {
    id: 5,
    title: "Icommunify College Club managing web app",
    description: "A college club managing web app for client based on mern stack where I have implemented all frontend features Using Next js and Redux toolkit and used bootstrap and scss for responsiveness for api call used axios.",
    image: "/icom.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.icommunify.com",
  }, {
    id: 6,
    title: "Motion-School LMS Web Application",
    description: "- Developed an advanced Learning Management System (LMS) platform using Next.js 13 with the App Router within the React.js Framework. Implemented TypeScript for a robust and modern frontend architecture.\n- Implemented Prisma for seamless data management and Stripe for secure payment processing.\n- Integrated Mux for advanced video streaming and employed Tailwind for modern, responsive styling.\n- Developed a multifaceted authentication system with Google, GitHub, and email login options using clerk.\n- Demonstrated proficiency in latest technologies, emphasizing commitment to user-friendly solutions in educational technology.",
    image: "/lmsprotfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/amanguptak/Motion-school",
    previewUrl: "https://motion-school.vercel.app",
  },
  {
      id: 7,
      title: "Anime Song Music Player",
      description: "Music player using Vanilla javascript and css with responsive design",
      image: "/music-player.png",
      tag: ["All", "Web"],
      gitUrl: "/",
      previewUrl: "https://aman-music-playerv1.netlify.app/",
    },
    {
      id: 8,
      title: "Pomodoro Timer", 
      description: `A Pomodoro timer has been developed utilizing React.js and vanilla CSS, leveraging the features of the React Context API for state management.  Here's how the Pomodoro Technique typically works:
    
      Set a Timer: Choose a task you want to work on and set a timer for 25 minutes (one Pomodoro).
      
      Work: Focus solely on the task at hand until the timer rings. Avoid distractions and interruptions during this time.
      
      Short Break: When the timer rings, take a short break (usually around 5 minutes) to relax and recharge.
      
      Repeat: After completing a Pomodoro and taking a short break, start another Pomodoro. After completing four Pomodoros, take a longer break (usually around 15-30 minutes).`,
      image: "/pomodoro.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/amanguptak/PomodoroTimer/tree/master",
      previewUrl: "https://pomodose.vercel.app",
    }

];


export const educationData = [

  {
    title: "KIET Group Of Institutions (AKTU) Delhi, India ",
    duration: "2018 — 2022",
    description: "  B.Tech (Electronics & Communication)   8.12 CGPA (81.2%) "
  },
  {
    title: "Sarswati Vidhya Mandir Kanpur , India",
    duration: "",
    description: "12th (77%)"
  },


];

export const experienceData = [
  {
    title: "Web Developer Intern",
    duration: "Jun 2021 - Nov 2021",
    description: "Developing and maintaining web applications using Javascript, HTML, CSS, and other related technologies. Acquired solid knowledge of JavaScript, HTML, CSS, and React Js for front-end web development. Demonstrated proficiency in JavaScript and React, optimizing code for improved performance in scalable web applications. Implementing responsive design and ensuring cross-browser compatibility."
  },
  {
    title: "MERN STACK Developer",
    duration: "Jan 2021 - Feb 2022",
    description: "Acquired solid knowledge of JavaScript, HTML, CSS, and React Js for front-end web development. Demonstrated proficiency in JavaScript and React, optimizing code for improved performance in scalable web applications. Implementing responsive design and ensuring cross-browser compatibility."
  },
  {
    title: "Full Stack Developer",
    duration: "Feb 2023 - Present",
    description: "Contributed to the implementation of a Feature Product section on the Pampered Chef Product project using Next.js, Scss, and Redux, enhancing web development standards. Developed frontend features for i-Communify web application, a College Club Managing Web App. Leveraged Next.js and Redux Toolkit, and incorporated Bootstrap and SCSS for a responsive design. Demonstrated expertise in sophisticated web development techniques. Achieved a 20% cost reduction for clients through strategic integration of efficient tools, emphasizing commitment to optimizing project outcomes. Designed and implemented a proficient Rest Api using Express.js. Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products. Implementing responsive design and ensuring cross-browser compatibility. Participating in code reviews and providing constructive feedback to other developers."
  }
];
