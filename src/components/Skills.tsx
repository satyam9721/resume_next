import React from "react";
import { SkillsData } from "@/lib/resume";
const Skill = () => {
  return (
    <div>
    <ul className="grid lg:grid-cols-6 m-5 grid-cols-2 gap-4">
        {SkillsData.map((skill, index) => {
          return (
            <li
              key={index}
              className="icon-box relative rounded-xl overflow-hidden flex flex-col items-center m-2 w-24 h-24 border-2 cursor-pointer border-[#ffcd67] p-4 transform hover:translate-y-1 hover:shadow-xl transition ease-in-out duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className=" object-cover rounded-md"
                loading="lazy"
              />
              <span className="absolute bottom-0 left-0 right-0 bg-[#163a5c] text-white text-center text-md px-1 lg:text-[14px]">
                {skill.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const list = [
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
];

export default Skill;
