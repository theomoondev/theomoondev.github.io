// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-résumé",
          title: "résumé",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-technical-writing",
          title: "technical writing",
          description: "A growing collection of technical writing samples authored by Theo Moon. Please note that all potentially sensitive or proprietary information has been generalized or redacted to ensure compliance with confidentiality obligations. These documents do not represent actual company processes or information.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/technical-writing/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A growing collection of GitHub stats and repositories authored by Theo Moon. Please note that the majority of my coding contributions are made under private, client-specific accounts and therefore not reflected in the personal account shared below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "projects-traveladvisory-api",
          title: 'TravelAdvisory API',
          description: "Sample of a REST API reference written as an OpenAPI specification in YAML format, presented as an interactive HTML view using Redocly",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-legacy-api-migration-strategy",
          title: 'Legacy API Migration Strategy',
          description: "Sample of a developer-facing technical strategy for migrating a collection of API endpoints from a generalized legacy service",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-instance-creation-overview-amp-runbooks",
          title: 'Instance Creation Overview &amp;amp; Runbooks',
          description: "Sample of a developer-facing document that provides an overview on creating a new object instance within a generalized service, along with two service runbooks describing E2E testing and manual creation procedures",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-taskpie-github-readme",
          title: 'TaskPie GitHub README',
          description: "A GitHub README featuring a recorded demo, user stories, installation guide, dependencies, and Trello board",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-i-kill-plants-but-i-want-to-grow-a-vegetable-garden",
          title: 'I KILL PLANTS But I Want to Grow a Vegetable Garden',
          description: "Sample of a detailed, practical guide for growing your own vegetable garden with custom layouts, drawings, and diagrams",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%68%65%6F.%79.%73.%6D%6F%6F%6E@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/theomoondev", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/theoleemoon", "_blank");
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
