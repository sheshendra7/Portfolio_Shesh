import {
    mobile,
    notes,
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
    git,
    figma,
    docker,
    java,
    truvisory,
    mindsdb,
    infosys,
    imagerecognizer,
    jobit,
    threejs,
    slack,
    ecommerce,
    tictac,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    // {
    //   title: "Snowflake Integration Maintainer",
    //   company_name: "MindsDB",
    //   icon: mindsdb,
    //   iconBg: "#383E56",
    //   date: "June 2023 - Present",
    //   points: [
    //     "Maintaining and supporting the Snowflake integration for MindsDB, ensuring proper functionality and extensive documentation.",
    //     "Building new releases periodically on the Snowflake integration based on the community feedback to improve the product insights.",
    //     "Providing technical expertise and troubleshooting integration-related queries to assist the community over GitHub, Slack.",
    //     "Curating Technical Blogs, Tutorials around the new/existing integrations developed by the community members.",
    //     "Collaborating with teams to improve existing integrations, address feedback, and ensure seamless connectivity for the users.",
    //   ],
    // },
    {
      title: "Software Developer",
      company_name: "INFOSYS",
      icon: infosys,
      iconBg: "#383E56",
      date: "June 2021 - August 2022",
      points: [
        "Engineered a new feature for the HR Application to calculate total employee working hours per week and generate a CSV file, resulting in reducing workload by 15% for HR staff.",
        "Employed different Core Java concepts such as Multi-Threading, Exception Handling, Collection APIs to implement various features and enhancements. ",
        "Collaborated with cross-functional teams to create Rest APIs serving information to front-end, handling over 2,000 concurrent users with minimal latency.",
        "Implemented Tiles based framework to present the layouts to the user and developed UI using view tags (HTML), JavaScript, CSS.",
      ],
    },
    {
      title: "Software Intern",
      company_name: "INFOSYS",
      icon: infosys,
      iconBg: "#383E56",
      date: "July 2020 - June 2021",
      points: [
        "Developed unit test cases for the data access layer and business components using Junit. Used Log4j to log messages of application for debugging and tracking purposes.",
        "Utilized JIRA for bug tracking. Experience in working with version control system GIT and Maven build tool to maintain Project dependencies.",
        "Optimized Oracle database queries and schema upgrades to enhance loading speed by 32%, leading to quicker processing times for HR tasks.",
      ],
    },
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
      name: "Notes App",
      description:
        "Developed a responsive note management UI with React, enabling users to input, save text, and effortlessly create new notes. Implemented a stable Node backend for seamless communication with MongoDB, ensuring real-time updates and a dynamic note-editing experience. Integrated a delete functionality for removing unwanted notes. Achieved global access by hosting the app on Vercel.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Node",
          color: "red-text-gradient",
        },
        {
          name: "git",
          color: "pink-text-gradient",
        },
      ],
      image: notes,
      source_code_link: "https://github.com/sheshendra7",
    },
    {
      name: "E-Commerce Website",
      description:
        "Crafted a responsive e-commerce website with React, Strapi, and Stripe for an academic project. Demonstrated expertise in modern web development, applying best practices in design for optimized performance. Integrated Strapi for content management and Stripe for payments, resulting in a 15% increase in successful transactions within the academic context.",
      tags: [
        {
          name: "React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Strapi",
          color: "green-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/sheshendra7",
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "Created an interactive Tic-Tac-Toe game GUI with Python's Tkinter library, featuring a 3x3 grid. Supports single-player mode with challenging moves from the random library. Offers dynamic gaming with a computer opponent and friendly two-player competitions.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
          color: "green-text-gradient",
        },
        {
          name: "Random",
          color: "pink-text-gradient",
        },
      ],
      image: tictac,
      source_code_link: "https://github.com/sheshendra7/Tic-Tac-Toe.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };