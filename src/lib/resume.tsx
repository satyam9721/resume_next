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
export const Name = "Satyam Gupta";
export const Occupation = "Web Developer & Devops Engineer";

export const contacts: Contact[] = [
  {
    type: "Email",
    icon: <Mail />,
    value: "satyamjio1456@gmail.com",
    href: "mailto:",
  },
  {
    type: "Phone",
    icon: <Phone />,
    value: "8445630698",
    href: "tel:+12133522795",
  },

  {
    type: "Location",
    icon: <MapPin />,
    value: "Navi Mumbai India",
    isAddress: true,
  },
];

export const socialMediaLinks = [
  {
    name: "Twitter",
    url: "twitter.com/Techy_Satyam",
    icon: <TwitterIcon />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/satyam-gupta-9580141b9/",
    icon: <Linkedin />,
  },
  {
    name: "Github",
    url: "https://github.com/satyam9721",
    icon: <Github />,
  }
  // Add more social media objects as needed
];

export const AboutMe = `I am a Web Developer & DevOps Engineer with a fervor for crafting interactive and responsive web applications. Possessing proficiency in JavaScript, TypeScript, React, Redux, Node.js, Express.js, Next.js, HTML, CSS, and Git, I bring a comprehensive skill set to the development landscape. Additionally, I am skilled in DevOps practices, including Docker, Kubernetes, Linux, and Azure, which enable me to manage and deploy scalable applications efficiently`;

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
    title: "OTT Platform (React+vite)",
    description: " Revolutionize entertainment with our cutting-edge React.js-based OTT Platform, For infinite scroll, the combination of React and vite allows for the implementation of smooth and efficient infinite scrolling. OTT Platform is Fully Responsive for all Screen-Size.",
    image: "/carsoul-1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/satyam9721/Full-Stack-OTT-Platform.git",
    previewUrl: "https://6569910923ead56be689edcc--stately-quokka-c984f0.netlify.app/",
  },
  {
    id: 2,
    title: "Fusion Form (MERN)",
    description: "A Responsive Landing page with Express.js backend and MongoDB integration, facilitating seamless form submission, validation. ",
    image: "/Fusion-Form.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/satyam9721/Blacksof.git",
    previewUrl: "https://64d89c95f606f97b4bfbc2e3--papaya-licorice-467ef3.netlify.app/",
  },
 
  {
    id: 3,
    title: "Weather App React",
    description: "Used axios features , React used to build this project",
    image: "/weather.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://64b7fab71872d12250a34819--gregarious-semifreddo-588bc8.netlify.app/",
  },
  {
    id: 4,
    title: "Extractify PDF",
    description: "ExtractifyPDF, is a groundbreaking tool designed to effortlessly extract valuable content from PDF documents.With ExtractifyPDF, users can seamlessly extract desired pages from big pdf.",
    image: "Extrifypdf.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/satyam9721/pdf-Page-Extractor.git",
    previewUrl: "https://6555b06795b68643a7ae964d--jazzy-druid-d5048a.netlify.app/",
  },
  {
    id: 5,
    title: "Blog Website 🌐",
    description: "User-friendly platform for sharing and managing blog posts. React.js is a popular JavaScript library for building user interfaces and its component-based architecture.",
    image: "/Techy-Blog.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://64aad3cb2211463cf72514cd--creative-cupcake-bb54c5.netlify.app/",
  }, {
    id: 6,
    title: "ATS(Smart Resume Analyzer)",
    description: "Basically our aim is to ease the recruitment process. The process will provide the quality of applicants for the companies",
    image: "/ATS.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/satyam9721/Applicant-tracking-system-ATS-.git",
    previewUrl: "",
  },
  {
      id: 7,
      title: "Emotion-based-music-Player",
      description: "Describes the advantages of using OpenCV, especially the Ad boost algorithm, in the process of face recognition. Detecting and recognition of face in complicated color images can be achieved using a combination of a particular algorithm",
      image: "/music-player.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/satyam9721/Emotion-based-music-Player.git",
      previewUrl: "",
    }
    

];


export const educationData = [

  {
    title: "AITH (AKTU) KANPUR, India ",
    duration: "2019 — 2023",
    description: "  B.Tech- IT 8.0 CGPA"
  },
  {
    title: "SMC , India",
    duration: "",
    description: "12th (78%)"
  },


];

export const experienceData = [
  {
    title: "DevOps-Tops",
    duration: "Jio (Jan 2024-Present)",
    description: "Specialized in Tops-OSS using Azure DevOps. Deployed and managed microservices (cost, billing, T2R, etc.) on Kubernetes. Utilized SQL for payment and account data retrieval. Implemented CI/CD pipelines and collaborated for seamless service operation. Maintained high availability and scalability, improved processes through automation, and documented procedures for knowledge sharing.  "
  },
  {
    title: "Software Developer",
    duration: "Emsec (Bristol - U.K) Feb-Sep 2023",
    description: "Worked on Shodan’s Clone and Breachwise Development. It's a hacker's search engine that lets users search for various types of servers connected to the internet using a variety of filters. We are using the MERN stack technology to build this project. The documentation of Shodan was created by myself."
  },
  {
    title: "Techy Satyam",
    duration: "Youtube (2019-Present)",
    description: "Helping students to learn about the latest technology. Utilized effective SEO strategies to optimize video titles, descriptions, and tags, resulting in increased discoverability and organic growth."
  },
  {
    title:"Web-Design Intern",
    duration:"Azure Skynet Solutions Pvt.Ltd",
    description:"Learn about how the front-end part of websites works. Adept at translating client requirements into captivating visual concepts,resulting in unique and tailored website designs that align with brand identity."
  }
];
