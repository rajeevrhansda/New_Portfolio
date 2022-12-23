import GoogleClone from "../img/mobile/GoogleClone.jpg";
import WeatherApp from "../img/mobile/PWA_WeatherApp.jpg";
import WeatherApp_Mobile from "../img/mobile/PWA_WeatherApp_Mobile.jpg";
import ReactBlog from "../img/mobile/ReactBlog.jpg";
import AmazonClone from "../img/mobile/AmazonClone.jpg";

export const experienceData = [
  {
    id: 1,
    pName: "Google search API",
    pDescription:
      "Developed a search engine that shows users the results of their queries. Utilized Google's search API to retrieve data. Tailwind CSS made development 10% faster than plain CSS. Accessible, user-friendly, and easy to navigate UI.",
    pFeature: [
      "Search websites",
      "Search images",
      "Search news",
      "Search videos",
      "Theme selection",
    ],
    pSkill: ["React.js", "React router", "React context", "Tailwind CSS"],
    pImage: GoogleClone,
    pMobileImage: "",
    pLink: "https://google-searchengine-clone0.netlify.app/",
    pGitLink: "https://github.com/rajeevrhansda/google-searchengine-clone",
  },
  {
    id: 2,
    pName: "Weather API",
    pDescription:
      "Developed a web application to display weather conditions around the world. The responsive user interface is compatible with 98% of the devices available today. The UI was developed using React and API requests were handled using Axios. It is lightweight and works on even the slowest internet connection.",
    pFeature: ["Search weather", "Responsive", "Lightweight"],
    pSkill: ["React.js", "RapidAPI"],
    pImage: WeatherApp,
    pMobileImage: WeatherApp_Mobile,
    pLink: "https://pwa-weatherapp0.netlify.app/",
    pGitLink: "https://github.com/rajeevrhansda/PWA-Weatherapp",
  },
  {
    id: 3,
    pName: "E-commerce",
    pDescription:
      "Developed an eCommerce website and a fully functional cart system. The website allows users to browse products and add them to their shopping cart. Instant cart updates using React context. Firebase is used to store user data. Ergonomic web design beautiful style and color combination.",
    pFeature: ["Browse products", "Add product to cart", "Beautiful UI"],
    pSkill: ["React.js", "React context", "Firebase"],
    pImage: AmazonClone,
    pMobileImage: "",
    pLink: "https://amazonclone0.netlify.app/",
    pGitLink: "https://github.com/rajeevrhansda/amazonclone",
  },
  {
    id: 4,
    pName: "Blog",
    pDescription:
      "Developed a blog website that allows users to write, update, or delete blog entries. MongoDB is used for storing and authenticating user data. JWT is used for user authorization in conjunction with access tokens and refresh tokens. Password encryption using Bcrypt password hashing. Dotenv for securing environment variables. Use the express route to make API calls.",
    pFeature: [
      "User register",
      "User login",
      "Admin privilege",
      "Create, Update, Delete Post",
    ],
    pSkill: ["React.js", "React router", "React context", "Axios", "Node.js", "Express.js", "MongoDB", "Bcrypt", "Dotenv", "Styled components"],
    pImage: ReactBlog,
    pMobileImage: "",
    pLink: "https://react-blog0.netlify.app/",
    pGitLink: "https://github.com/rajeevrhansda/react-blog/tree/master",
  },
];
