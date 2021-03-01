export const homeObjectOne = {
  id: "about", //this is literally the about section after the Hero section
  lightBg: false, //making it become dark
  lightText: true,
  lightTextDesc: true,
  topLine: "Premium Bank",
  headLine: "Unlimited Transactions with zero fees",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions without getting charged and fees",
  buttonLabel: "Get Started",
  imgStart: false, //this come second cause the image is in the right side which is second or we set it to true
  img: require("../../images/svg-1.svg").default,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjectTwo = {
  id: "discover", //this is literally the discover section after the Hero section
  lightBg: true, //making it become dark
  lightText: false,
  lightTextDesc: false,
  topLine: "Premium Bank",
  headLine: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an Internet connection and a phone or computer",
  buttonLabel: "Learn More",
  imgStart: true, //this come second cause the image is in the right side which is second or we set it to true
  img: require("../../images/svg-2.svg").default,
  alt: "finance",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjectThree = {
  id: "signup", //this is literally the about section after the Hero section
  lightBg: true, //making it become dark
  lightText: false,
  lightTextDesc: false,
  topLine: "Join our Team",
  headLine: "Creating an account is extremely easy",
  description:
    "Get everything set up and ready in under 10minutes. All you need to do is add your information and you're ready to go",
  buttonLabel: "Start Now",
  imgStart: false, //this come second cause the image is in the right side which is second or we set it to true
  img: require("../../images/svg-3.svg").default,
  alt: "Paper",
  dark: false,
  primary: false,
  darkText: true,
};
