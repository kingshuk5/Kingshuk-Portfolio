
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
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  import threatprism from '../assets/company/threatprism.png';
  import ngoeureka from '../assets/company/ngoeureka.jpg';
  import hittimes from '../assets/company/hittimes.png';
  import flutter from '../assets/tech/flutter.png';
  import nextjs from '../assets/tech/nextjs.png';
  import python from '../assets/tech/python.png';
  import java from '../assets/tech/java.png';
  import blinkitclone from '../assets/blinkitclone.jpg';
  import times from '../assets/times.png';
  import recruitment from '../assets/recruitment.png';
  import criceurekaapp from '../assets/criceurekaapp.jpg';
  import thtkhabri from  '../assets/thtkhabri.jpg';




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
      title: "Android Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Flutter Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
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
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Next JS",
      icon: nextjs,
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
      name: "Java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "Android Development Intern",
      company_name: "Threat Prism",
      icon: threatprism,
      iconBg: "black",
      date: "Jan 2023 - Feb 2023",
      points: [
        "Developing and maintaining Android applications using Kotlin,Xml and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Created application based on the requirement of the company.",
        "Participating in real-time api integration and providing feedback to users according to their need.",
      ],
    },
    {
      title: "Flutter & Next.js Developer",
      company_name: "NGO Eureka",
      icon: ngoeureka,
      iconBg: "white",
      date: "july 2024 - Dec 2024",
      points: [
        "Developed an interactive Post section in a Flutter application, divided into five distinct categories to enhance user engagement.",
        "Implemented a Live Cricket Score feature with API integration for live and past matches, seamlessly managed through an admin portal.",
        "Integrated Email Authentication and Razorpay Payment Gateway for secure user access and smooth payment processing.",
        "Built an Admin Portal using Next.js and Tailwind CSS to manage the application, enabling CRUD operations for Posts, Live Matches, and Past Matches, as well as an interactive user management section displaying all registered users.",
      ],
    },
    {
      title: "Full stack Web/App Developer",
      company_name: "The HIT Times",
      icon: hittimes,
      iconBg: "black",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining Android applications using Flutter, MongoDB, Node.js and related technologies to deliver robust and scalable solutions.",
        "Collaborated with a team to design and build an interactive website along with an admin portal for the Club, leveraging Next.js,MongoDB,React.js and Tailwind CSS.",
        "Created a comprehensive user registration form with seven sections and over 150 fields, enabling seamless registration for events and workshops. This system has successfully handled registrations for over 700 users, with real-time data stored in CSV format.",
        "Working closely with cross-functional teams—including designers, developers, and other team members—to produce high-quality content for the college's official E-Media and Print-Media Club, The HIT Times.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but He proved me wrong.",
      name: "Shawank Srivastava",
      designation: "CFO",
      company: "Threat Prism",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a flutter developer who truly cares about their clients' success like He does.",
      name: "Chris Brown",
      designation: "CTO",
      company: "The Good Game Theory",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After He optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Upendra Navada",
      designation: "COO",
      company: "1Stop",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "The HIT Times Website",
      description:
        "www.thehittimes.com maintains an active presence along with other social media platforms to reach a broader audience and keep the community informed about the latest happenings and publications ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
      ],
      image: times,
      source_code_link: "https://github.com/",
    },
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "next.js",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Recruitment Portal",
      description:
        "This recruitment portal features a user registration form divided into seven sections with over 150 fields, streamlining the registration process. It has successfully managed registrations for over 700 user.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "react",
          color: "pink-text-gradient",
        },
      ],
      image: recruitment,
      source_code_link: "https://github.com/",
    },
  ];
  const Androidprojects = [
    {
      name: "THT Khabri App",
      description:
        "Contributed in developing the THT Khabri app using Flutter, Node.js, and MongoDB, enabling seamless cross-platform access. Demonstrated expertise in full-stack development and scalable solutions.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Node js",
          color: "pink-text-gradient",
        },
      ],
      image: thtkhabri,
      source_code_link: "https://github.com/",
    },
    {
      name: "NGO Eureka App",
      description:
        "A Flutter app with a Post section, Live Cricket Score feature, Email Authentication, and Razorpay integration. It also has a admin portal for managing posts, matches, and users.",
      tags: [
        {
          name: "Flutter",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
      ],
      image: criceurekaapp,
      source_code_link: "https://github.com/",
    },
    {
      name: "Blinkit Clone",
      description:
        "A Blinkit clone app using Flutter , Node.js , and MongoDB. Features include product browsing, cart management, secure user authentication and seamless control for inventory and orders.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "node.js",
          color: "pink-text-gradient",
        },
      ],
      image: blinkitclone,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, Androidprojects };