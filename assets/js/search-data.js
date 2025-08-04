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
          description: "A growing collection of technical writing samples. Please note that the following documents are provided solely as samples for illustrative purposes. All potentially sensitive or proprietary information, including specific names, hyperlinks, and identifiable details, have been generalized or redacted to ensure compliance with confidentiality obligations. These documents do not represent actual company processes or information.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/technical-writing/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A collection of GitHub trophies and repositories. Note:\ The majority of my coding contributions are made under private, client-specific accounts and therefore not reflected in my personal account shared below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "projects-traveladvisory-api",
          title: 'TravelAdvisory API',
          description: "Sample of REST API documentation created using an OpenAPI specification in YAML format. The interactive HTML view was generated using Redocly.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-service-feature-migration-strategy",
          title: 'Service Feature Migration Strategy',
          description: "Sample of a technical strategy for migrating a feature from a generalized legacy service",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-instance-creation-procedures",
          title: 'Instance Creation Procedures',
          description: "Sample of the systematic steps and procedures involved in creating a new instance of an object within a generalized service",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-service-runbooks",
          title: 'Service Runbooks',
          description: "Sample of two service runbooks describing E2E testing and manual creation procedures with video walkthroughs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-taskpie-github-readme",
          title: 'TaskPie GitHub README',
          description: "A GitHub README featuring a recorded demo, user stories, installation guide, dependencies, and Trello board",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-i-kill-plants-but-i-want-to-grow-a-vegetable-garden",
          title: 'I KILL PLANTS But I Want to Grow a Vegetable Garden',
          description: "Sample of a detailed, practical guide for growing your own vegetable garden",
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
