import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = ``;

export const ABOUT_TEXT = `Hello! I'm a dedicated student pursuing a Bachelor of Science in Computer Science at the University of Cincinnati. My journey in technology is driven by a passion for leveraging cutting-edge tools to tackle real-world challenges and enhance user experiences. I’m currently working on my skills in full-stack development, working with HTML/CSS and React.js on the front-end, and Node, Express, and SQL on the backend.  My academic coursework and personal projects have provided me with a solid foundation in programming languages such as Java, Python, and C++. I have also gained valuable experience with various software development tools and technologies.

Beyond my technical pursuits, I enjoy lifting weights, exploring the latest advancements in technology, and spending quality time with friends. I thrive in collaborative environments and take great satisfaction in solving complex problems through teamwork and innovation.

I'm excited to continue growing as a developer and to contribute my skills to impactful projects and initiatives.`;

export const EXPERIENCES = [
  {
    year: "September 2024 - Present",
    role: "Cloud Security Intern",
    company: "iQ4",
    description: `Collaborated with a team of interns and subject matter expert mentors using the iQ4 Workforce Development platform, studied and applied the NIST Cloud Risk Management Framework (focusing on Risk Assessment, Risk Treatment, and Risk Control), and analyzed case studies to develop mitigation and management strategies for assigned cases.`,
    technologies: ["NIST Cloud Risk Management Framework"],
  },
  {
    year: "May 2024 - July 2024",
    role: "Software Developer Intern",
    company: "Gavalier Carpentry LLC",
    description: `Designed and developed a professional website for a carpentry business using HTML, CSS, and JavaScript, ensuring responsiveness and compatibility across various devices, and collaborated with the business owner to understand requirements and tailor the design to reflect the brand's identity.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Full-Stack NFT Marketplace",
    image: project1,
    description:
      "Engineered the front-end of the NFT marketplace using React with hooks and context for state management, developed reusable components for a dynamic user interface, integrated Web3.js for wallet connectivity, NFT management, and transactions, and designed a back-end with Node.js and Express to create RESTful APIs for user authentication, NFT metadata management, and transaction processing.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express"],
  },
  {
    title: "Responsive React Portfolio Website",
    image: project2,
    description:
      "Developed a fully responsive and animated portfolio website with a modern UI/UX design using React for dynamic front-end components, implementing sections such as a hero section with the developer's name, an about section with a profile image, a tech stack, work experience, highlighted projects, and contact information.",
    technologies: ["React", "Framer Motion", "Tailwind"],
  },
  {
    title: "Caesar Enciphering and Deciphering Project",
    image: project3,
    description:
      "Developed functions to analyze plaintext data statistics, including word count and character frequency, and integrated file input/output operations for reading and writing text files to ensure seamless data manipulation.",
    technologies: ["C++"],
  },
  {
    title: "Frequency Distribution Generator",
    image: project4,
    description:
      "Utilized iterative processes and conditional logic to dynamically generate frequency distributions from datasets, and incorporated error handling mechanisms and debugging to ensure the script's robustness and reliability.",
    technologies: ["Python"],
  },
];

export const CONTACT = {
  address: "65 W McMillan St, Cincinnati, OH 45219 ",
  phoneNo: "+1 216-314-9644",
  email: "deyce@mail.uc.edu",
};
