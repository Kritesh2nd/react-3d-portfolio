import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    mysql,
    java,
    git,
    figma,
    docker,
    
    phonepe,
    meta,
    starbucks,
    tesla,
    shopify,
    
    carrent,
    jobit,
    tripguide,
    threejs,
    merchwebstore,
    encrypter,
    todolist,

    clothingStore,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Web Designer",
      icon: creator,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Product Developer",
      company_name: "Phone pe",
      icon: phonepe,
      iconBg: "#383E56",
      date: "April 2024 - Ongoing",
      points: [
        "Complete initial training on Spring Boot, related technologies, and the company's development processes.",
        "Familiarize with the codebase, development environment, and version control system ",
        "Study Spring Boot features and best practices.",
        "Learn about microservices architecture, RESTful APIs, and database integration.",
      ],
    },
    // {
    //   title: "React.js Developer",
    //   company_name: "Starbucks",
    //   icon: starbucks,
    //   iconBg: "#383E56",
    //   date: "March 2020 - April 2021",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Clothing Web Store",
      description:
        "Develop a clothing web store using HTML, CSS for front-end design, and Java for back-end processing, enabling users to browse, purchase, and manage fashion items online.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: clothingStore,
      source_code_link: "https://github.com/Kritesh2nd/willow2",
      live_demo_link: "",
    },
    {
      name: "Encrypter and Decrypter",
      description:
        "Crafted a Simple Encryption Web Project, fortifying data security with user-friendly encryption techniques. Users can encrypt and decrypt a text message with a password.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: encrypter,
      source_code_link: "https://github.com/Kritesh2nd/encrypter",
      live_demo_link: "https://kritesh2nd.github.io/encrypter/",
    },
    {
      name: "Todo-List",
      description:
        "My Todo List React Project is a productivity powerhouse, allowing users to organize tasks efficiently with an intuitive interface, making daily life more organized and stress-free.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: todolist,
      source_code_link: "https://github.com/Kritesh2nd/todo-list",
      live_demo_link: "https://kritesh2nd.github.io/todo-list/",
    },
    // {
    //   name: "Merchandise Web Store",
    //   description:
    //     "Transformed my passion into a digital reality with a Game Merchandise Web App project. A user-friendly hub for gaming gear, designed and coded with dedication.",
    //   tags: [
    //     {
    //       name: "html",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "java",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "mysql",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: merchwebstore,
    //   source_code_link: "https://github.com/Kritesh2nd/game-merch-web-store",
    //   live_demo_link: "",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };