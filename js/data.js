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
    // titleTypes: ["AI Engineer", "ML Engineer", "Data Scientist", "Problem Solver"],
    bio:        "Computer Science professional with hands-on experience building and deploying end-to-end ML systems using Python, Scikit-learn, XGBoost, TensorFlow, FastAPI, and Streamlit. Seeking a full-time role to apply practical ML skills and contribute to real-world AI products within a production-focused team.",
    photo:      "profile-photo.jpeg",
    cvFile:     "Abdelrhman_Elyamny_CV.pdf",
    location:   "Cairo, Egypt",
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
      gpa:         "3.01",
      icon:        "fa-solid fa-graduation-cap",
      description: "Third-year student focused on AI, Machine Learning, Algorithms, Data Structures, and software engineering fundamentals.",
    },
  ],

  /* ── Experience ───────────────────────────────────────────────────────── */
  experience: [
    {
      title:      "AI for Business Engineer",
      company:    "National Training Initiative (NTI)",
      companyUrl: "https://nti.sci.eg/",
      period:     "Mar 2026 – May 2026",
      duration:   "Ongoing",
      location:   "Egypt",
      locationUrl: "#",
      type:       "Training / Internship",
      bullets: [
        "Applied supervised and unsupervised ML algorithms to real-world business datasets, completing hands-on assignments across classification, regression, and clustering tasks.", 
        "Built and evaluated ML models using performance metrics and model selection techniques, with focus on practical deployment readiness.",
        "Implemented deep learning architectures (ANN, CNN, RNN) through practical sessions on business-relevant use cases using TensorFlow/Keras."
      ],
    },
    {
      title:      "AI & ML Trainee",
      company:    "NTI - Huawei",
      companyUrl: "https://nti.sci.eg/",
      period:     "Dec 2025 – Feb 2026",
      duration:   "3 months",
      location:   "Egypt",
      locationUrl: "#",
      type:       "Training / Internship",
      bullets: [
        "Explored the foundations of Neural Networks and applied core ML algorithms; gained introductory exposure to Deep Learning, Computer Vision, and NLP concepts.",
      ],
    },
    {
      title:      "Data Scientist Trainee",
      company:    "Digital Egypt Pioneers Initiative (DEPI)",
      companyUrl: "https://depi.gov.eg/content/home",
      period:     "Jun 2025 – Dec 2025",
      duration:   "7 months",
      location:   "Egypt · Hybrid",
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
      category: "Programming & Development",
      icon:     "fa-solid fa-code",
      items: [
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "SQL", icon: "fa-solid fa-database" },
        { name: "MongoDB", icon: "fa-solid fa-leaf" },
        { name: "C++ (Basic)", icon: "fa-solid fa-code" },
        { name: "OOP", icon: "fa-solid fa-cube" },
        { name: "FastAPI", icon: "fa-solid fa-bolt" },
      ],
    },
    {
      category: "Machine Learning & AI",
      icon:     "fa-solid fa-brain",
      items: [
        { name: "Supervised/Unsupervised Learning", icon: "fa-solid fa-robot" },
        { name: "Deep Learning (ANN, CNN, RNN)", icon: "fa-solid fa-network-wired" },
        { name: "Feature Engineering", icon: "fa-solid fa-wrench" },
        { name: "Transfer Learning", icon: "fa-solid fa-share-nodes" },
        { name: "Hyperparameter Tuning", icon: "fa-solid fa-sliders" },
      ],
    },
        {
      category: "Libraries & Frameworks",
      icon:     "fa-solid fa-layer-group",
      items: [
        { name: "TensorFlow", icon: "fa-solid fa-cubes" },
        { name: "PyTorch", icon: "fa-solid fa-fire" },
        { name: "Scikit-learn", icon: "fa-solid fa-flask" },
        { name: "XGBoost", icon: "fa-solid fa-rocket" },
        { name: "Pandas", icon: "fa-solid fa-table" },
        { name: "NumPy", icon: "fa-solid fa-square-root-variable" },
        { name: "Matplotlib", icon: "fa-solid fa-chart-line" },
        {name: "Seaborn", icon: "fa-solid fa-chart-bar" },
        { name: "Streamlit", icon: "fa-solid fa-desktop" },
      ],
    },
    {
      category: "Tools & Version Control",
      icon:     "fa-solid fa-rocket",
      items: [
        { name: "Git", icon: "fa-brands fa-git-alt" },
        { name: "GitHub", icon: "fa-brands fa-github" },
        { name: "Docker", icon: "fa-brands fa-docker" },
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
      description: "Led the technical team in designing a real-time accident detection and traffic monitoring architecture using a YOLOv8 computer vision pipeline for live video feeds.",
      tags:        ["Python", "YOLOv8", "Computer Vision", "Real-time AI", "Team Leadership"],
      category:    "AI",
      github:      "https://github.com/Abdelrhman-ely",
      live:        null,
      featured:    true,
      badge:       "🏆 Top 10 Finalist – LUXSAI SUMMIT 2026",
      icon:        "fa-solid fa-car-burst",
    },
    {
      id:          "real-estate-intelligence",
      title:       "Real Estate Investment Intelligence System",
      description: "Developed a property valuation model using XGBoost regression with log transformation and integrated a Nearest Neighbors recommendation engine for investment analysis.",
      tags:        ["Python", "XGBoost", "Nearest Neighbors", "Scikit-learn", "Data Science"],
      category:    "ML",
      github:      "https://github.com/Abdelrhman-ely/UAE_Real_Estate",
      live:        null,
      featured:    false,
      badge:       null,
      icon:        "fa-solid fa-building",
    },
    {
      id:          "movie-recommendation",
      title:       "Movie Recommendation System",
      description: "Architected a two-stage pipeline (Retrieval + Ranking) using TensorFlow, Two-Tower Neural Networks, and DNNs for highly precise user-item matching.",
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
      description: "Built a high-performance predictive model achieving a Mean Absolute Error (MAE) of ≈ 1.20, utilizing KMeans clustering and DBSCAN for anomaly detection.",
      tags:        ["Python", "XGBoost", "Scikit-learn", "KMeans", "DBSCAN", "FastAPI"],
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
      description: "Implemented Genetic Algorithms to optimize drone delivery routes under real-world constraints, focusing on extensive fitness function tuning and evaluation.",
      tags:        ["Python", "Genetic Algorithms", "Optimization", "Operations Research"],
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
      name:   "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI (via Coursera)",
      date:   "Apr 2026",
      icon:   "fa-solid fa-network-wired",
      url:    "https://www.coursera.org/account/accomplishments/verify/ETOQ3BNCLGN3",
    },
    {
      name:   "Machine Learning Specialization",
      issuer: "DeepLearning.AI — Coursera",
      date:   "Feb 2026",
      icon:   "fa-solid fa-circle-nodes",
      url:    "https://www.coursera.org/account/accomplishments/specialization/certificate/0HIEVF3R50JP",
    },
  ],

  /* ── Project filter categories ────────────────────────────────────────── */
  // projectCategories: ["All", "AI", "ML"],
};
