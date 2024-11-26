export const projectsData = [
  {
    name: "Website for Student Support and Consulting at HCMUTE",
    duration: "9/2024-12/2024",
    teamSize: 2,
    position: "Back-end Developer",
    source: {
      frontend: "https://github.com/ThaiVanHandSome/hcmute-consultant-client.git",
      backend: "https://github.com/quangnghia1110/Nam4HocKy1TLCN.git",
    },
    technologies: {
      frontend: ["ReactJS"],
      backend: ["Spring Boot", "Spring Security", "JPA", "WebSocket", "MySQL"],
      services: ["Cloudinary", "Google API"],
    },
    features: `This platform enables students to ask questions, discuss topics, and receive consultations from the school. It includes role-based access where admins manage the system, advisors handle tasks within their departments, and users can ask questions or schedule consultations. Additional features include real-time messaging, consultation scheduling using WebSocket, user authentication, and profile management.`,
    responsibilities: `I designed and implemented the system architecture by integrating ReactJS for the frontend and Spring Boot for the backend. My role included developing user authentication using Spring Security and JWT, implementing real-time messaging and live consultation scheduling with WebSocket, managing database operations with JPA and MySQL, and utilizing Cloudinary for image management along with Google API for email notifications.`,
  },
  {
    name: "Building an E-commerce Website for Electro Company",
    duration: "3/2024-8/2023",
    teamSize: 1,
    position: "Full-stack Developer",
    source: {
      code: "https://github.com/quangnghia1110/electro_ecommerce.git",
    },
    technologies: {
      frontend: ["ReactJS"],
      backend: ["Spring Boot", "Spring Security", "JPA", "MySQL", "WebSocket"],
      services: ["PayPal", "Giao Hàng Nhanh"],
    },
    features: `This e-commerce platform allows users to browse products, add them to a cart, and place orders with secure payments via PayPal. Admins can manage products, orders, and users using a dedicated dashboard. Real-time notifications, delivery tracking with Giao Hàng Nhanh, and data export/import in CSV or PDF formats are also supported.`,
    responsibilities: `I designed and implemented the system's architecture to ensure scalability and security. I developed REST APIs for managing orders, products, users, and shipping integrations. The frontend was built using ReactJS to ensure a seamless and responsive user interface. I also implemented authentication and authorization using Spring Security with JWT and integrated real-time notifications and order updates using WebSocket.`,
  },
  {
    name: "FIMAE - Friend Connection App",
    duration: "2/2024-5/2024",
    teamSize: 4,
    position: "Team Leader, Front-end Developer, Back-end Developer",
    source: {
      code: "https://github.com/quangnghia1110/Fimae.git",
    },
    technologies: {
      frontend: ["Java"],
      backend: ["Spring Boot", "Firebase", "Stringee"],
    },
    features: `FIMAE is an Android social networking app that supports messaging, voice, and video calls. It allows users to set up profiles, receive notifications, and manage privacy settings such as reporting or blocking users. Users can also create posts with visibility options (public, private, or friends-only), along with additional features like short-form videos, stories, and content sharing.`,
    responsibilities: `As the team leader, I managed the team and designed the database. I integrated Firebase for real-time data synchronization and notifications, developed core features such as messaging, calls, privacy settings, and post creation, and enhanced the app with short video and story-sharing capabilities.`,
  },
  {
    name: "Milk Tea E-commerce Website",
    duration: "9/2023-12/2023",
    teamSize: 10,
    position: "Team Leader, Front-end Developer, Back-end Developer",
    source: {
      code: "https://github.com/quangnghia1110/project_java_web.git",
    },
    technologies: {
      frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      backend: ["Spring Boot", "JPA", "Spring Security", "Microsoft SQL Server"],
    },
    features: `This milk tea e-commerce website supports user registration and login with Spring Security. Users can browse products, add them to a shopping cart, and complete orders using VNPay. The admin panel allows for managing categories, products, users, and viewing sales statistics.`,
    responsibilities: `I led the team and managed the project development. My contributions included designing the database, creating the authentication interface (login, register, forgot/change password), and developing the admin panel with CRUD operations for categories, products, and users.`,
  },
  {
    name: "UTETube - Online Music Video Watching Website",
    duration: "6/2023-8/2023",
    teamSize: 1,
    position: "Front-end Developer, Back-end Developer",
    source: {
      code: "https://github.com/quangnghia1110/Nam2HocKyHePolyTube.git",
    },
    technologies: {
      frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      backend: ["Spring Boot", "Servlet", "Hibernate", "Microsoft SQL Server"],
    },
    features: `UTETube is an online platform for watching and interacting with music videos. It features video browsing, search by title or category, video details (thumbnails, view counts, and descriptions), user registration and profile updates, and admin functionalities such as managing users and adding new videos.`,
    responsibilities: `I independently developed both the frontend and backend of the platform. The user interface was built using HTML, CSS, JavaScript, and Bootstrap. I implemented backend functionalities with Spring Boot, Servlet, Hibernate, and Microsoft SQL Server while managing all database operations and resolving challenges through self-research.`,
  },
];
