import logoImg from "./assets/logo/logo.png";
import whyChooseUsIcon1 from "./assets/images/ph_target-light.png";
import whyChooseUsIcon2 from "./assets/images/mage_light-bulb.png";
import whyChooseUsIcon3 from "./assets/images/tdesign_user-talk.png";
import whyChooseUsIcon4 from "./assets/images/healthicons_ui-secure-outline.png";
import whyChooseUsPng from "./assets/images/whychooseus-png.png";
import faqPng from "./assets/images/faq-character.png";
import appDevBanner from "./assets/images/app-dev-banner.jpg";
import webDevBanner from "./assets/images/web-landing-banner.jpg";
import webLandingAbout from "./assets/images/web-landing-about1.png";
import appLandingAbout from "./assets/images/app-landing-about.png";
import endlessOpportunitiesImg1 from "./assets/images/section-8-img-1.png";
import endlessOpportunitiesImg2 from "./assets/images/section-8-img-2.png";
import endlessOpportunitiesImg3 from "./assets/images/section-8-img-3.png";
import homeBannerVideo from "./assets/videos/home-banner.mp4";
import defaultBanner from "./assets/images/banner.jpg";
import aboutUsBanner from "./assets/images/about-us-banner.jpg";
import aboutUsGridImg1 from "./assets/images/aboutus-png1.png";
import aboutUsGridImg2 from "./assets/images/aboutus-png2.png";
import aboutUsGridImg3 from "./assets/images/aboutus-png3.png";
import aboutUsGridImg4 from "./assets/images/aboutus-png4.png";
import aboutUsGridImg5 from "./assets/images/aboutus-png5.png";
import aboutUsPageImg from "./assets/images/about-us-pageImg.jpg";
import { ReactComponent as EcommerceIcon } from "./assets/svgs/ecommerce.svg";
import { ReactComponent as SocialMediaIcon } from "./assets/svgs/socialmedia.svg";
import { ReactComponent as LandingPageIcon } from "./assets/svgs/landingpage.svg";
import { ReactComponent as CustomWebsiteIcon } from "./assets/svgs/customwebsite.svg";
import { ReactComponent as IosIcon } from "./assets/svgs/iosdevelopment.svg";
import { ReactComponent as AndroidIcon } from "./assets/svgs/androiddevelopment.svg";
import { ReactComponent as FlutterIcon } from "./assets/svgs/flutterdevelopment.svg";
import { ReactComponent as HybridAppIcon } from "./assets/svgs/hybridappdevelopment.svg";

import { lazy } from "react";
const Home = lazy(() => import("./pages/website/Home"));
const Services = lazy(() => import("./pages/website/Services"));
const ContactUs = lazy(() => import("./pages/website/ContactUs"));
const AboutUs = lazy(() => import("./pages/website/AboutUs"));

export {
  logoImg,
  whyChooseUsPng,
  whyChooseUsIcon1,
  whyChooseUsIcon2,
  whyChooseUsIcon3,
  whyChooseUsIcon4,
  faqPng,
  appDevBanner,
  webDevBanner,
  webLandingAbout,
  appLandingAbout,
  endlessOpportunitiesImg1,
  endlessOpportunitiesImg2,
  endlessOpportunitiesImg3,
  homeBannerVideo,
  defaultBanner,
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aboutUsPageImg,
};

// company details
export const companyDetails = {
  phone: "+0000000000",
  whatsapp: "+0000000000",
  address: "ABC Street, City, Country",
  email: "abc@xyz.com",
};

// website routes
export const routes = [
  {
    name: "Home",
    path: "/",
    component: <Home />,
  },
  {
    name: "Services",
    path: "/services",
    component: <Services />,
  },
  {
    name: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
  {
    name: "Contact Us",
    path: "/contact-us",
    component: <ContactUs />,
  },
];

export const faqs = [
  {
    id: 1,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 2,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 3,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 4,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
  {
    id: 5,
    question: "What is Web Development?",
    answer:
      "Web development refers to the process of creating websites and web applications. It includes tasks such as web design, web development, web programming, and database management.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerence Websites",
    icon: EcommerceIcon,
    description:
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: SocialMediaIcon,
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: LandingPageIcon,
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: CustomWebsiteIcon,
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: IosIcon,
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: AndroidIcon,
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: FlutterIcon,
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: HybridAppIcon,
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    desc: "Crafting modern, responsive, and scalable websites that deliver outstanding user experiences. From front-end to back-end, our web solutions are tailored to meet your business needs.",
    detailContent:
      "At AI Company, we specialize in delivering high-performance websites and digital platforms that help businesses thrive online. From custom web development to responsive design, we build solutions that are both user-friendly and visually stunning. Let's turn your vision into a reality.",
  },
  {
    id: 2,
    title: "Mobile App Development",
    desc: "Creating high-performance mobile applications for iOS and Android that engage users and drive business growth. Our apps are designed with a focus on usability, speed, and seamless functionality.",
    detailContent:
      "At AI Company, we specialize in creating intuitive, high-performing mobile applications tailored to meet the unique needs of businesses across industries. Our expert team combines technical expertise with creative design to develop apps that drive engagement and growth.",
  },
  {
    id: 3,
    title: "Chatbots",
    desc: "Developing intelligent chatbots to automate customer interactions, streamline processes, and enhance user engagement. Our chatbots are powered by advanced natural language processing for accurate and human-like conversations.",
    detailContent:
      "At AI Company, we specialize in developing AI-powered chatbots that streamline customer support, enhance user engagement, and improve business efficiency. Whether you're looking for a customer service assistant or an interactive sales bot, we build tailored solutions that understand and respond to your users in real time.",
  },
  {
    id: 4,
    title: "Machine Learning Solutions",
    desc: "Leveraging data-driven insights to build predictive models, automate processes, and unlock new opportunities. Our machine learning solutions are designed to optimize performance and drive innovation.",
    detailContent:
      "AI Company was founded with the vision of helping businesses harness the full potential of artificial intelligence and machine learning. With expertise in data science, AI engineering, and algorithm development, our team provides tailored solutions that address real business problems. We are committed to pushing the boundaries of what’s possible with data-driven insights and intelligent automation.",
  },
  {
    id: 5,
    title: "Game Development",
    desc: "At AI Company, we specialize in game development, creating immersive and enjoyable gaming experiences.",
    detailContent:
      "At AI Company, we don’t just build games—we create worlds. Our team of passionate developers, artists, and storytellers brings your ideas to life with captivating gameplay, stunning visuals, and unforgettable narratives. Whether it’s an action-packed adventure or a mind-bending puzzle, our games are designed to transport players into new realms and keep them engaged.",
  },
  {
    id: 6,
    title: "Computer Vision",
    desc: "Utilizing advanced computer vision techniques to analyze visual data, enabling smart automation, enhanced security, and actionable insights. From object detection to facial recognition, our solutions are precise and reliable.",
    detailContent:
      "At AI Company, we specialize in cutting-edge computer vision technology that enables machines to interpret and act on visual data. Our AI-driven solutions power automation, enhance security, and provide deep insights across industries. From object detection to video analysis, we help businesses transform raw visual data into actionable insights.",
  },
  {
    id: 7,
    title: "Virtual Reality (VR) and Augmented Reality (AR) Development",
    desc: "Immerse your audience with cutting-edge VR and AR experiences that redefine engagement and elevate brand perception.",
    detailContent:
      "At AI Company, we specialize in creating interactive augmented reality experiences that engage users, enhance brand interaction, and drive innovation. From retail and marketing to education and gaming, our AR solutions provide immersive experiences that blend the digital with the real world, offering limitless possibilities for engagement and creativity.",
  },
];

// about us page why choose content
export const whyChooseUsContent = [
  {
    title: "Customized Solutions for Every Business",
    desc: "We believe in a tailored approach because every business is unique. We take time to understand your goals and create custom digital solutions that align perfectly with your vision.",
  },
  {
    title: "Cutting-Edge Technology",
    desc: "Our team is equipped with the latest tools and technologies to bring your project to life, ensuring that you stay ahead in the ever-changing digital space.",
  },
  {
    title: "Security and Reliability",
    desc: "At AI Company, we take security seriously. Our solutions are built with stringent security protocols to safeguard your business data and protect it from cyber threats.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "We’re not just a service provider; we’re your strategic partner. From conceptualization to deployment and ongoing support, we’re with you every step of the way, ensuring your success in the digital landscape.",
  },
  {
    title: "Agility and Innovation",
    desc: "As technology evolves, so do we. We continuously adapt to the latest trends and innovations to deliver products that not only meet your current needs but are scalable for the future.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/web_projects/1.webp"),
    title: "FE-Finance",
  },
  {
    id: 2,
    img: require("./assets/images/web_projects/2.webp"),
    title: "Ocxee",
  },
  {
    id: 3,
    img: require("./assets/images/web_projects/3.webp"),
    title: "Leaderbridge",
  },
  {
    id: 4,
    img: require("./assets/images/web_projects/4.webp"),
    title: "Gigzio",
  },
  {
    id: 5,
    img: require("./assets/images/web_projects/5.webp"),
    title: "FE Group",
  },
  {
    id: 6,
    img: require("./assets/images/web_projects/6.webp"),
    title: "V Talkz",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app_projects/1.webp"),
    title: "PartEx",
  },
  {
    id: 2,
    img: require("./assets/images/app_projects/2.webp"),
    title: "Find A Driver",
  },
  {
    id: 3,
    img: require("./assets/images/app_projects/3.webp"),
    title: "Artisan Express",
  },
  {
    id: 4,
    img: require("./assets/images/app_projects/4.webp"),
    title: "House of Deliverance",
  },
];
