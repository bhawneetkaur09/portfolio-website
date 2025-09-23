// Core skills organized by category for better display
export const skillCategories = {
  languages: [
    {
      name: 'JavaScript',
      description: 'Modern ES6+ features, async programming, and DOM manipulation',
      experience: '3+ years'
    },
    {
      name: 'TypeScript',
      description: 'Type-safe development for scalable applications',
      experience: '2+ years'
    },
    {
      name: 'HTML5',
      description: 'Semantic HTML5, accessibility, and modern web standards',
      experience: '3+ years'
    },
    {
      name: 'CSS3/Sass',
      description: 'Advanced styling, Flexbox, Grid, animations, and preprocessors',
      experience: '3+ years'
    },
    {
      name: 'SQL basics',
      description: 'Database queries and basic data manipulation',
      experience: '1+ years'
    }
  ],
  frontend: [
    {
      name: 'React 18',
      description: 'Modern React with hooks, concurrent features, and server components',
      experience: '3+ years'
    },
    {
      name: 'Next.js 14',
      description: 'Full-stack React framework with App Router and SSR',
      experience: '2+ years'
    },
    {
      name: 'Redux Toolkit',
      description: 'State management for large-scale applications',
      experience: '3+ years'
    },
    {
      name: 'React Query',
      description: 'Data fetching and caching for React applications',
      experience: '2+ years'
    },
    {
      name: 'Zustand',
      description: 'Lightweight state management solution',
      experience: '1+ years'
    },
    {
      name: 'React Hook Form',
      description: 'Performant forms with easy validation',
      experience: '2+ years'
    },
    {
      name: 'Styled Components',
      description: 'CSS-in-JS styling for React components',
      experience: '2+ years'
    },
    {
      name: 'Tailwind CSS',
      description: 'Utility-first CSS framework for rapid UI development',
      experience: '2+ years'
    }
  ],
  backend: [
    {
      name: 'Node.js basics',
      description: 'Backend development basics and JavaScript runtime',
      experience: '2+ years'
    },
    {
      name: 'REST APIs',
      description: 'RESTful API design, consumption, and integration',
      experience: '3+ years'
    },
    {
      name: 'JSON',
      description: 'Data interchange format and API communication',
      experience: '3+ years'
    },
    {
      name: 'WebSockets',
      description: 'Real-time communication between client and server',
      experience: '1+ years'
    },
    {
      name: 'Postman',
      description: 'API testing, documentation, and development',
      experience: '3+ years'
    },
    {
      name: 'API debugging',
      description: 'Troubleshooting API issues and network analysis',
      experience: '2+ years'
    }
  ],
  testing: [
    {
      name: 'Jest',
      description: 'JavaScript testing framework for unit and integration tests',
      experience: '3+ years'
    },
    {
      name: 'React Testing Library',
      description: 'Testing React components with user-centric approach',
      experience: '2+ years'
    },
    {
      name: 'Cypress',
      description: 'End-to-end testing for web applications',
      experience: '2+ years'
    },
    {
      name: 'Playwright',
      description: 'Cross-browser automation and testing',
      experience: '1+ years'
    },
    {
      name: 'Storybook',
      description: 'Component development and testing in isolation',
      experience: '2+ years'
    },
    {
      name: 'Unit/Integration/E2E Testing',
      description: 'Comprehensive testing strategies across all levels',
      experience: '3+ years'
    }
  ],
  debugging: [
    {
      name: 'Chrome DevTools',
      description: 'Performance profiling, debugging, and network analysis',
      experience: '3+ years'
    },
    {
      name: 'React DevTools',
      description: 'React-specific debugging and component inspection',
      experience: '3+ years'
    },
    {
      name: 'Network analysis',
      description: 'Analyzing network requests, performance, and API calls',
      experience: '2+ years'
    },
    {
      name: 'Kibana (ELK Stack)',
      description: 'Log analysis and application monitoring',
      experience: '1+ years'
    },
    {
      name: 'Splunk',
      description: 'Search, monitoring, and analysis of machine data',
      experience: '1+ years'
    },
    {
      name: 'DataDog',
      description: 'Application performance monitoring and logging',
      experience: '1+ years'
    },
    {
      name: 'Performance profiling',
      description: 'Identifying and optimizing application bottlenecks',
      experience: '2+ years'
    }
  ],
  tools: [
    {
      name: 'Webpack',
      description: 'Module bundling and build optimization',
      experience: '2+ years'
    },
    {
      name: 'Vite',
      description: 'Fast build tool and development server',
      experience: '2+ years'
    },
    {
      name: 'Gasket',
      description: 'PayPal\'s full-stack framework for web applications',
      experience: '1+ years'
    },
    {
      name: 'Docker',
      description: 'Containerization and application deployment',
      experience: '1+ years'
    },
    {
      name: 'Git',
      description: 'Version control, branching strategies, and collaboration',
      experience: '3+ years'
    },
    {
      name: 'Jenkins',
      description: 'Continuous integration and deployment pipelines',
      experience: '2+ years'
    },
    {
      name: 'GitHub Actions',
      description: 'CI/CD workflows and automation',
      experience: '2+ years'
    },
    {
      name: 'AWS (S3, CloudFront)',
      description: 'Cloud storage, CDN, and web application deployment',
      experience: '2+ years'
    }
  ]
};

// Flattened skills array for backward compatibility
export const skills = Object.values(skillCategories).flat();

