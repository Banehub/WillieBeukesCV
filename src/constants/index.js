const navLinks = [
  // {
  //   name: "Work",
  //   link: "#work",
  // },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Passion", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Passion", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 4, suffix: " Years", label: "Experience" },
  // { value: 2, suffix: " Years", label: "Figma Designs" },
  // { value: 1, suffix: " Year", label: "three.js Projects" },
  // { value: 3, suffix: " Years", label: "React Native Projects" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "I keep you in the loop every step of the way. No confusion, just honest updates and open conversations.",
  },
  {
    imgPath: "/images/time.png",
    title: "Always On Time",
    desc: "When I commit to a deadline, I stick to it. Your time matters, and I respect that.",
  },
  {
    imgPath: "/images/seo.png",
    title: "Ready for Challenges",
    desc: "I'm not afraid to take on new projects or tackle tough problems. That's where the growth happens.",
  },
  {
    imgPath: "/images/person.png",
    title: "Reliable Partner",
    desc: "I'm loyal to the projects I work on and the people I work with. You can count on me to see things through.",
  },
  {
    imgPath: "/images/code.svg",
    title: "Passionate About Code",
    desc: "I genuinely love what I do. Writing clean code and building solutions isn't just work—it's what drives me.",
  },
  {
    imgPath: "/images/devices.png",
    title: "Learning & Adapting",
    desc: "I'm always learning new tools and technologies. Every project is a chance to grow and improve my skills.",
  },
];

const techStackImgs = [
  {
    name: "React Frontend Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "CSS Developer",
    imgPath: "/images/logos/css.png",
  },
  {
    name: "UI/UX Designer",
    imgPath: "/images/logos/figma.png",
  },
  {
    name: "React Native Developer",
    modelPath: "/models/react_logo-transformed.glb",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Frontend Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "CSS Developer",
    imgPath: "/images/logos/css.png",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "UI/UX Designer",
    imgPath: "/images/logos/figma.png",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "React Native Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Willie's dedication and technical skills have been exceptional. He consistently delivers high-quality work and takes ownership of every project he touches.",
    imgPath: "/images/exp1.png",
    logoPath: null,
    logoText: "V",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Translate Figma designs into responsive, pixel-perfect React applications.",
      "Develop and maintain interactive game interfaces with smooth animations and user experiences.",
      "Conduct thorough testing and debugging to ensure optimal performance across all devices.",
      "Collaborate with designers and backend teams to bring creative visions to life.",
    ],
  },
  {
    review: "Willie was an invaluable member of the DevCraftHouse team. His ability to tackle complex frontend challenges and deliver clean, maintainable code made every project a success.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/icon.webp",
    title: "Frontend Developer at DevCraftHouse",
    date: "July 2021 - December 2022",
    responsibilities: [
      "Built and maintained all frontend features for client projects using React and modern JavaScript.",
      "Worked closely with clients to understand requirements and deliver solutions that exceeded expectations.",
      "Implemented responsive designs and ensured cross-browser compatibility.",
      "Optimized application performance and improved loading times through code refactoring.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  // {
  //   name: "insta",
  //   imgPath: "/images/insta.png",
  // },
  // {
  //   name: "fb",
  //   imgPath: "/images/fb.png",
  // },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  // },
  // {
  //   name: "linkedin",
  //   imgPath: "/images/linkedin.png",
  // },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
