// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "* Equal Contribution, † Corresponding Author(s).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-i-was-awarded-the-title-of-2024-university-level-outstanding-communist-youth-league-member",
          title: 'I was awarded the title of “2024 University-Level Outstanding Communist Youth League Member”....',
          description: "",
          section: "News",},{id: "news-our-work-grounding-iqa-is-released-paper-project-github",
          title: 'Our work Grounding-IQA is released: Paper | Project | GitHub. ✨',
          description: "",
          section: "News",},{id: "news-i-received-the-2024-university-level-third-class-scholarship",
          title: 'I received the 2024 University-Level Third-Class Scholarship! 🥳',
          description: "",
          section: "News",},{id: "news-my-overall-assessment-score-ranked-4th-out-of-99-students-in-the-2024-2025-academic-year-️",
          title: 'My overall assessment score ranked 4th out of 99 students in the 2024-2025...',
          description: "",
          section: "News",},{id: "news-our-work-robuq-is-released-paper-github-arxiv",
          title: 'Our work RobuQ is released: Paper | GitHub | Arxiv. 🌱',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-a-reviewer-for-cvpr-2026",
          title: 'I am serving as a Reviewer for CVPR 2026. 🍉',
          description: "",
          section: "News",},{id: "news-i-received-the-2025-yanbao-scholarship-10-000-rmb",
          title: 'I received the 2025 Yanbao Scholarship (¥10,000 RMB)! 🤩',
          description: "",
          section: "News",},{id: "news-our-work-treeq-is-released-paper-github-arxiv",
          title: 'Our work TreeQ is released: Paper | GitHub | Arxiv. 🌳',
          description: "",
          section: "News",},{id: "news-i-received-the-2025-university-level-second-class-scholarship",
          title: 'I received the 2025 University-Level Second-Class Scholarship! 🎈',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-a-reviewer-for-icml-2026-and-eccv-2026",
          title: 'I am serving as a Reviewer for ICML 2026 and ECCV 2026. 🌻...',
          description: "",
          section: "News",},{id: "news-our-paper-grounding-iqa-is-accepted-by-iclr-2026",
          title: 'Our paper Grounding-IQA is accepted by ICLR 2026. 🎯',
          description: "",
          section: "News",},{id: "news-our-work-q-dit4sr-is-released-paper-github-arxiv",
          title: 'Our work Q-DiT4SR is released: Paper | GitHub | Arxiv. 🌸',
          description: "",
          section: "News",},{id: "news-i-was-awarded-the-title-of-merit-student-at-the-university-level-for-the-2024-2025-academic-year",
          title: 'I was awarded the title of “Merit Student” at the university level for...',
          description: "",
          section: "News",},{id: "news-i-am-serving-as-a-reviewer-for-neurips-2026",
          title: 'I am serving as a Reviewer for NeurIPS 2026. 🧩',
          description: "",
          section: "News",},{id: "news-our-papers-q-dit4sr-and-robuq-are-accepted-by-icml-2026",
          title: 'Our papers Q-DiT4SR and RobuQ are accepted by ICML 2026. 🀄',
          description: "",
          section: "News",},{id: "news-my-overall-assessment-score-ranked-1th-out-of-97-students-in-the-2025-2026-academic-year",
          title: 'My overall assessment score ranked 1th out of 97 students in the 2025-2026...',
          description: "",
          section: "News",},{id: "news-i-received-the-2025-2026-national-scholarship-for-undergraduate-students-10-000-rmb",
          title: 'I received the 2025-2026 National Scholarship for Undergraduate Students (¥10,000 RMB)! 🏆',
          description: "",
          section: "News",},{id: "news-our-work-justquant-is-released-paper-project-github-️",
          title: 'Our work JustQuant is released: Paper | Project | GitHub. 🗝️',
          description: "",
          section: "News",},{id: "news-our-work-second-look-prompting-is-released-paper-project-github-️",
          title: 'Our work Second-Look Prompting is released: Paper | Project | GitHub. ✏️',
          description: "",
          section: "News",},{id: "news-i-received-the-2026-university-level-first-class-scholarship",
          title: 'I received the 2026 University-Level First-Class Scholarship! 🍁',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%7A%68%61%6E%67%78%75%6E%30%34@%73%6A%74%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/xunzhang666", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-3775-3742", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=nhmD_1AAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/2382926154", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
