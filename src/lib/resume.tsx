import { Mail, Phone, Calendar, MapPin ,

  TwitterIcon,
  Linkedin,} from 'lucide-react';
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
      type: 'Email',
      icon: <Mail />,
      value: 'imaman9294@gmail.com',
      href: 'mailto:'
    },
    {
      type: 'Phone',
      icon: <Phone />,
      value: '9170615023',
      href: 'tel:+12133522795'
    },
    
    {
      type: 'Location',
      icon: <MapPin />,
      value: 'Sacramento, California, USA',
      isAddress: true
    }
  ];

export const socialMediaLinks = [
    {
      name: 'Twitter',
      url: 'https://x.com/amangupta041?t=UVyLQ5ZY9ZRQKfy4WmtUmw&s=09',
      icon: <TwitterIcon />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aman-gupta-7577691b5',
      icon: <Linkedin />,
    },
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
      real-world problems. Let's work together to bring your ideas to life!`



export const  SkillsData = [
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
    name: "Gitlab",
    img: "https://cdn.icon-icons.com/icons2/2699/PNG/512/gitlab_tile_logo_icon_170092.png",
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
    img: "https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png"
  },
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxa54jELoPL5wy9CxwGFeyCx9yEKHtqf-j-eI3ljxM4hSvYr3fxkOaYTO9OZgnuEs49zI&usqp=CAU",
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
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'},
  {
    name: "Bootstrap",
    img: "https://w7.pngwing.com/pngs/976/131/png-transparent-bootstrap-framework-logo-dart-mobile-developer-programming-programming-language-interface-3d-icon-thumbnail.png",
  },
];