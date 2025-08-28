// src/assets/assets.js
import homepage from "./homepage.jpg";
import step1 from "./work1.jpg";
import step2 from "./work2.jpg";
import step3 from "./work3.jpg";
import journey1 from "./step1.jpg";
import journey2 from "./step2.jpg";
import journey3 from "./step3.jpg";
import journey4 from "./step4.jpg";
import benefit1 from "./benefit1.jpg";
import benefit2 from "./benefit2.jpg";
import benefit3 from "./benefit3.jpg";
import benefit4 from "./benefit4.jpg";
import profile_img from "./profile.png";

export const IMAGES = {
  homepage,
  profile_img,
  steps: [work1, work2, work3],
  journey: [step1, step2, step3, step4],
  benefits: [benefit1, benefit2, benefit3, benefit4],
};

export const HOW_IT_WORKS = [
  {
    title: "Skill Matches",
    text: "Find people with the skills you need.",
    img: work1,
  },
  {
    title: "Authenticity",
    text: "Verified profiles ensure trust & safety.",
    img: work2,
  },
  {
    title: "Reviews & Credibility",
    text: "Build credibility with ratings.",
    img: work3,
  },
];

export const JOURNEY = [
  { title: "Sign Up", text: "Create your free account.", img: step1 },
  { title: "Match", text: "Find people who need your skills.", img: step2 },
  { title: "Exchange", text: "Swap skills with ease.", img: step3 },
  { title: "Review", text: "Rate & review after exchange.", img: step4 },
];

export const BENEFITS = [
  {
    title: "For Students",
    text: "Learn new skills without spending money.",
    img: benefit1,
  },
  {
    title: "For Professionals",
    text: "Network and exchange expertise.",
    img: benefit2,
  },
  {
    title: "For Creatives",
    text: "Grow your craft by collaborating.",
    img: benefit3,
  },
  {
    title: "For Everyone",
    text: "Build meaningful connections.",
    img: benefit4,
  },
];
