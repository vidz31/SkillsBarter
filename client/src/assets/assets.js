// src/assets/assets.js
import homepage from "./homepage.jpg";
import work1 from "./work1.jpg";
import work2 from "./work2.jpg";
import work3 from "./work3.jpg";
import step1 from "./step1.jpg";
import step2 from "./step2.jpg";
import step3 from "./step3.jpg";
import step4 from "./step4.jpg";
import benefit1 from "./benefit1.jpg";
import benefit2 from "./benefit2.jpg";
import benefit3 from "./benefit3.jpg";
import benefit4 from "./benefit4.jpg";
import profile_img from "./profile_img.png";
import { Wallet, Brain, Star } from "lucide-react";


export const IMAGES = {
  homepage,
  profile_img,
  steps: [work1, work2, work3],
  journey: [step1, step2, step3, step4],
  benefits: [benefit1, benefit2, benefit3, benefit4],
};

export const HOW_IT_WORKS = [
  {
    title: "Skill Wallet",
    text: "Earn and spend Skill Credits for your bartering activities, tracking your contributions and acquired skills seamlessly.",
    img: work1,
    icon: "Wallet",
  },
  {
    title: "AI Matching",
    text: "Our intelligent algorithm connects you with compatible partners based on your offered and needed skills, ensuring perfect matches.",
    img: work2,
    icon: "Brain",
  },
  {
    title: "Reviews & Credibility",
    text: "Build a strong reputation with peer reviews and a credibility score, fostering trust and reliability within the community.",
    img: work3,
    icon: "Star",
  },
];

export const STEPS = [
  { number:1, title: "Sign Up", text: "Create your free account.", img: step1 },
  { number:2, title: "Match", text: "Find people who need your skills.", img: step2 },
  { number:3, title: "Exchange", text: "Swap skills with ease.", img: step3 },
  { number:4, title: "Review", text: "Rate & review after exchange.", img: step4 },
];

export const BENEFITS = [
  {
    title: "For Students",
    text: "Access a wide range of skills to support your studies and projects, from coding to design, without tuition fees.",
    img: benefit1,
  },
  {
    title: "For Professionals",
    text: "Expand your portfolio, learn new skills, and connect with clients by exchanging services within the community.",
    img: benefit2,
  },
  {
    title: "For Creatives",
    text: "Find collaborators for your creative projects, get feedback, and share your unique talents with an appreciative audience.",
    img: benefit3,
  },
  {
    title: "For Everyone",
    text: "Leverage community expertise for your social initiatives, finding volunteers with specific skills to help your cause thrive.",
    img: benefit4,
  },
];

export const faqs = [
  {
    question: "How does Skill Barter work?",
    answer:
      "Skill Barter allows you to exchange skills with others. You offer your expertise in one area and, in return, receive help or lessons in another skill you want to learn.",
  },
  {
    question: "What is a Skill Wallet?",
    answer:
      "A Skill Wallet is your personalized profile where you can showcase the skills you offer and the skills you want to learn. It helps in matching you with the right people.",
  },
  {
    question: "How does AI Matching ensure good matches?",
    answer:
      "Our AI analyzes your skills, learning preferences, and availability to recommend the best possible matches for skill exchanges, ensuring a balanced and beneficial barter.",
  },
  {
    question: "Can I offer multiple skills?",
    answer:
      "Yes, you can list multiple skills in your Skill Wallet, making it easier for others to connect with you based on different expertise.",
  },
  {
    question: "What happens if a barter doesn’t go well?",
    answer:
      "If a barter doesn’t meet your expectations, you can end the exchange and provide feedback. This helps us improve the community and ensures better future matches.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Yes! Our mobile app is available for both iOS and Android, so you can connect and manage your skill exchanges on the go.",
  },
];
