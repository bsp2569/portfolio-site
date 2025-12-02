export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const griditems = [
  {
    id: 1,
    title: "Building Insightful Data Solutions & Scalable Software",
    description: "",
    className: "lg:col-span-3 md:col-span-3 text-2xl md:row-span-2 lg:min-h-[45vh] md:min-h-[40vh] min-h-[30vh]",
    imgClassName: "w-full h-full lg:top-60 mx-auto my-0",
    titleClassName: "justify-end text-4xl ",
    img: "/laptop.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Available across time zones for seamless collaboration",
    description: "",
    className: "lg:col-span-2 lg:col-start-0 md:col-span-3 md:row-span-2 lg:row-span-1 min-h-[20vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Skillset & Tech Stack",
    description: "I stay updated and improve",
    className: "lg:col-span-2 lg:col-start-0 md:col-span-2 md:row-span-2 lg:row-span-1 min-h-[20vh] z-10",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate about AI‑driven engineering & innovation",
    description: "",
    className: "lg:col-span-2 lg:row-span-1 md:col-span-1 md:row-span-2 row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Building next‑gen AI + motion libraries",
    description: "Experimenting with AI‑enhanced animations and interactive systems.",
    className: "lg:col-span-3 md:col-span-3 text-2xl md:row-span-2 lg:min-h-[45vh] md:min-h-[40vh] min-h-[30vh]",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s collaborate and create something impactful",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 ",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center z-4",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  // {
  //   id: 1,
  //   title: "Crack Detection & Segmentation (CNN)",
  //   des: "Deep learning–powered crack detection system using CNN architectures (DeepCrack, RoadNet), image augmentation, and Random Forest post-classification achieving 92% accuracy.",
  //   img: "/crack.png",
  //   iconLists: ["/py.svg", "/tf.svg", "/cv.svg", "/sk.svg"],
  //   link: "https://github.com/bsp2569/UGP_Crack-Detection",
  // },
  {
    id: 2,
    title: "IPL Cricket Match Predictor",
    des: "Analyzed 10,000+ match records, engineered predictive features, and built an 85% accuracy Random Forest classifier with Streamlit visual dashboards.",
    img: "/ipl.svg",
    iconLists: ["/py.svg", "/sk.svg", "/stream.svg", "/plot.svg"],
    link: "https://github.com/bsp2569/IPL_Winner",
  },
  // {
  //   id: 3,
  //   title: "Stock Market Trend Forecasting",
  //   des: "Machine learning pipeline analyzing market trends, forecasting stock movement, and visualizing performance metrics using Matplotlib & Scikit-learn.",
  //   img: "/stock.svg",
  //   iconLists: ["/py.svg", "/sk.svg", "/mpl.svg"],
  //   link: "https://github.com/bsp2569/Stock_market_project",
  // },
  {
    id: 4,
    title: "Flipkart Customer Retention Analysis",
    des: "CSAT & retention analysis using customer service datasets, creating metric trees, churn drivers, and actionable insights to improve satisfaction.",
    img: "/flip.svg",
    iconLists: ["/py.svg", "/sql.svg", "/powerbi.svg"],
    link: "https://drive.google.com/drive/folders/1HE7SkbiprMmhCVje_srsut_ytrQzQK5T?usp=share_link",
  },
  {
    id: 5,
    title: "Amazon Brazil → India Market Insights",
    des: "Performed SQL-based RFM, segmentation, seasonal trend analysis & payment category insights to drive India-focused e-commerce strategy.",
    img: "/amazon.svg",
    iconLists: ["/sql.svg", "/py.svg", "/psql.svg"],
    link: "https://drive.google.com/drive/folders/1ks0mPpgGLOr_eq8vjHkp9pd_ffxWgKxy?usp=sharing",
  },
  {
    id: 6,
    title: "Discord Clone (MERN + Redis + IPFS)",
    des: "Full real-time chat platform with Socket.IO, Redis for scalable events, and IPFS for decentralized media storage.",
    img: "/discord.svg",
    iconLists: ["/re.svg", "/node.svg", "/mongo.svg", "/socket.svg", "/ipfs.svg"],
    link: "https://github.com/bsp2569", 
  },
  {
    id: 7,
    title: "Chaitify – Real-Time Chat App",
    des: "MERN + Socket.IO real-time chat application with JWT auth, bcrypt security, media sharing, and responsive UI.",
    img: "/chat.svg",
    iconLists: ["/re.svg", "/node.svg", "/mongo.svg", "/socket.svg"],
    link: "https://chatify-kbmc.onrender.com/",
  },
  {
    id: 8,
    title: "MERN E-Commerce Web App",
    des: "Full-stack e-commerce app with Redux Toolkit, JWT auth, cart/order management, PayPal integration, and responsive UI.",
    img: "/ecom.svg",
    iconLists: ["/re.svg", "/node.svg", "/mongo.svg", "/redux.svg"],
    link: "https://github.com/bsp2569",
  },
  {
  id: 9,
  title: "Bumble User Behavior & Preference Analysis",
  des: "Performed exploratory data analysis on Bumble’s user dataset to uncover patterns in demographics, preferences, match likelihood, and engagement behavior. Built visual insights to support product & marketing strategies.",
  img: "/bumble.svg",
  iconLists: ["/py.svg", "/pandas.svg", "/sk.svg", "/seaborn.svg", "/plot.svg"],
  link: "https://github.com/bsp2569/Bumble_Analysis", 
},

];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];