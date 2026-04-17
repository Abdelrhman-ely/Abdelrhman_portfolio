/**
 * data.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth — ALL data extracted directly from Abdelrhman's CV.
 * Edit this file to update any section of the portfolio.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const portfolioData = {

  /* ── Personal ─────────────────────────────────────────────────────────── */
  personal: {
    name:       "Abdelrhman Elyamny Moawad",
    nameShort:  "Abdelrhman Elyamny",
    title:      "AI Engineer & ML Engineer",
    titleTypes: ["AI Engineer", "ML Engineer", "Data Scientist", "Problem Solver"],
    bio:        "Third-year Computer Science student with hands-on experience building and deploying end-to-end ML systems using Python, Scikit-learn, XGBoost, TensorFlow, FastAPI, and Streamlit. Seeking an AI Engineer Internship to apply practical ML skills and contribute to real-world AI products within a production-focused team.",
    photo:      "profile-photo.jpeg",
    cvFile:     "Abdelrhman_Elyamny_CV.pdf",
    location:   "Tanta, Egypt",
    email:      "abdelrhmanelyamny70@gmail.com",
    phone:      "+201020002696",
    whatsapp:   "https://wa.me/201020002696",
    linkedin:   "https://www.linkedin.com/in/abdelrhman-elyamny/",
    github:     "https://github.com/Abdelrhman-ely",
  },


  /* ── Education ────────────────────────────────────────────────────────── */
  education: [
    {
      degree:      "Bachelor of Computer Science",
      institution: "Faculty of Computers and Information — Tanta University",
      period:      "2023 – 2027",
      grade:       "Very Good",
      icon:        "fa-solid fa-graduation-cap",
      description: "Third-year student focused on AI, Machine Learning, Algorithms, Data Structures, and software engineering fundamentals.",
    },
  ],

  /* ── Experience ───────────────────────────────────────────────────────── */
  experience: [
    {
      title:      "AI for Business Creative Trainee",
      company:    "National Training Initiative (NTI)",
      companyUrl: "https://nti.sci.eg/",
      period:     "Mar 2026 – Present",
      duration:   "Ongoing",
      location:   "Egypt",
      locationUrl: "#",
      type:       "Training / Internship",
      bullets: [
        "Applying supervised and unsupervised ML algorithms to real-world business datasets through hands-on assignments.",
        "Building and evaluating classification and regression models with focus on practical performance and model selection.",
      ],
    },
    {
      title:      "Data Scientist Trainee",
      company:    "Digital Egypt Pioneers Initiative (DEPI)",
      companyUrl: "https://depi.gov.eg/content/home",
      period:     "Jun 2025 – Dec 2025",
      duration:   "7 months",
      location:   "Egypt · Hybrid",
      locationUrl: "https://maps.app.goo.gl/ioNjcSXtz7j4xZfH9",
      type:       "Training / Internship",
      bullets: [
        "Received intensive training in AI, data analysis, and ML using Python, Pandas, and Scikit-learn.",
        "Worked on hands-on projects covering data cleaning, visualization, and building predictive models.",
        "Collaborated in a team-based environment to solve real-world data problems.",
      ],
    },
  ],

  /* ── Skills ───────────────────────────────────────────────────────────── */
  skills: [
    {
      category: "Machine Learning & AI",
      icon:     "fa-solid fa-brain",
      items: [
        { name: "Machine Learning", icon: "fa-solid fa-robot" },
        { name: "Deep Learning", icon: "fa-solid fa-network-wired" },
        { name: "Scikit-learn", icon: "fa-solid fa-flask" },
        { name: "Model Optimization", icon: "fa-solid fa-chart-line" },
      ],
    },
    {
      category: "Data Science & Analytics",
      icon:     "fa-solid fa-chart-bar",
      items: [
        { name: "Pandas", icon: "fa-solid fa-table" },
        { name: "NumPy", icon: "fa-solid fa-square-root-variable" },
        { name: "Matplotlib", icon: "fa-solid fa-chart-line" },
        { name: "Seaborn", icon: "fa-solid fa-palette" },
        { name: "Data Preprocessing", icon: "fa-solid fa-filter" },
      ],
    },
    {
      category: "Programming & Databases",
      icon:     "fa-solid fa-code",
      items: [
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "SQL", icon: "fa-solid fa-database" },
        { name: "C++", icon: "fa-solid fa-code" },
        { name: "OOP", icon: "fa-solid fa-cube" },
        { name: "MongoDB", icon: "fa-solid fa-leaf" },
      ],
    },
    {
      category: "Deployment & Developer Tools",
      icon:     "fa-solid fa-rocket",
      items: [
        { name: "FastAPI", icon: "fa-solid fa-bolt" },
        { name: "Streamlit", icon: "fa-solid fa-desktop" },
        { name: "Docker", icon: "fa-brands fa-docker" },
        { name: "Git & GitHub", icon: "fa-brands fa-github" },
        { name: "VS Code", icon: "fa-solid fa-file-code" },
        { name: "Jupyter Notebook", icon: "fa-solid fa-book" },
      ],
    },
  ],

  /* ── Projects ─────────────────────────────────────────────────────────── */
  projects: [
    {
      id:          "safe-eye",
      title:       "Safe Eye — Road Safety AI",
      description: "Real-time accident detection & traffic congestion monitoring system using YOLOv8 and Computer Vision. Top 10 Finalist at LUXSAI SUMMIT 2026 Hackathon. Led the technical team in designing system architecture and integrating the AI model with the backend pipeline.",
      tags:        ["Python", "YOLOv8", "Computer Vision", "FastAPI", "Real-time AI"],
      category:    "AI",
      github:      "https://github.com/Abdelrhman-ely",
      live:        null,
      featured:    true,
      badge:       "🏆 Top 10 — LUXSAI SUMMIT 2026",
      icon:        "fa-solid fa-car-burst",
    },
    {
      id:          "movie-recommendation",
      title:       "Movie Recommendation System",
      description: "Two-stage recommendation system (Retrieval + Ranking) using TensorFlow & MovieLens 1M dataset. Implemented Two-Tower Neural Network for candidate retrieval and a DNN ranking model for rating prediction. Deployed a full ML pipeline using FastAPI + Streamlit.",
      tags:        ["Python", "TensorFlow", "Two-Tower NN", "FastAPI", "Streamlit"],
      category:    "ML",
      github:      "https://github.com/Abdelrhman-ely/Movie-Recommendation-Systems",
      live:        null,
      featured:    true,
      badge:       null,
      icon:        "fa-solid fa-film",
    },
    {
      id:          "trip-price-prediction",
      title:       "Trip Price Prediction",
      description: "XGBoost regression model trained on ~100K trip records achieving MAE ≈ 1.20. Built a full preprocessing pipeline with Scikit-learn and deployed via FastAPI + Streamlit. Applied KMeans clustering and DBSCAN anomaly detection to analyze ride patterns and pricing anomalies.",
      tags:        ["Python", "XGBoost", "Scikit-learn", "FastAPI", "Streamlit", "KMeans"],
      category:    "ML",
      github:      "https://github.com/Abdelrhman-ely/Trip-Price-Prediction",
      live:        "https://trip-price-prediction.streamlit.app",
      featured:    false,
      badge:       null,
      icon:        "fa-solid fa-car",
    },
    {
      id:          "drone-delivery",
      title:       "Drone Delivery Route Optimization",
      description: "Implemented a Genetic Algorithm to optimize drone delivery routes under real-world constraints. Designed the fitness function and tuned GA parameters (mutation rate, crossover, population size). Collaborated with a team to deliver the final solution and technical report.",
      tags:        ["Python", "Genetic Algorithm", "Optimization", "Operations Research"],
      category:    "AI",
      github:      "https://github.com/Abdelrhman-ely/Drone-Delivery-Route-Optimization",
      live:        null,
      featured:    false,
      badge:       null,
      icon:        "fa-solid fa-location-crosshairs",
    },
  ],

  /* ── Certifications ───────────────────────────────────────────────────── */
  certifications: [
    {
      name:   "Supervised Machine Learning: Regression & Classification",
      issuer: "DeepLearning.AI — Coursera",
      date:   "Oct 2025",
      icon:   "fa-solid fa-robot",
      url:    "https://www.coursera.org/account/accomplishments/specialization/certificate/0HIEVF3R50JP",
    },
    {
      name:   "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI — Coursera",
      date:   "Dec 2025",
      icon:   "fa-solid fa-brain",
      url:    "https://www.coursera.org/account/accomplishments/specialization/certificate/0HIEVF3R50JP",
    },
    {
      name:   "Unsupervised Learning, Recommenders & Reinforcement Learning",
      issuer: "DeepLearning.AI — Coursera",
      date:   "Feb 2026",
      icon:   "fa-solid fa-circle-nodes",
      url:    "https://www.coursera.org/account/accomplishments/specialization/certificate/0HIEVF3R50JP",
    },
    {
      name:   "AI & ML Training (Neural Networks, CV, NLP)",
      issuer: "National Training Initiative (NTI) × Huawei",
      date:   "Feb 2026",
      icon:   "fa-solid fa-microchip",
      url:    "#",
    },
  ],

  /* ── Project filter categories ────────────────────────────────────────── */
  projectCategories: ["All", "AI", "ML"],
};
