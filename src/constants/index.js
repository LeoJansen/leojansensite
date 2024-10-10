export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Leo was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Leo’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Leo. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Leo was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
   
    {
      title: 'Taskfine - Task Management Tool',
      desc: 'Taskfine is a user-friendly task management tool designed to help you stay organized and productive. Similar to Trello, it uses a visual board system to organize your tasks into cards. With Taskfine, you can easily create, assign, and track tasks, making it a great tool for both personal and team projects.',
      href: 'https://taskfine.netlify.app',
      logo: '/assets/projects/taskfine.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
  
      ],
    },
    {
      title: 'Samba Code Studio',
      desc: 'Developed with the latest technologies, this website is a true work of digital art. Using artificial intelligence tools, we created unique and personalized images and animations that bring your brand to life. Immerse yourself in a stunning visual experience, designed to impress and inspire.',
      href: 'https://sambacodestudio.netlify.app/',

      logo: '/assets/projects/sambacode.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, rgba(0,0,30,0.6), rgba(180,0,0,0.6)), linear-gradient(90deg, rgba(5, 55, 55, 0.9) 0%, rgba(20, 23, 121, 0.8) 100%)',
        border: '0.2px solid rgba(120, 2, 111, 0.51)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
   
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const oldWorkExperiences = [
    {
      id: 1,
      name: 'Javascript',
      pos: 'Student',
      duration: '2022 - Present',
      title: "Comecei minha jornada no desenvolvimento web explorando o mundo do front-end. HTML, CSS e JavaScript são minhas primeiras ferramentas para criar experiências digitais incríveis.Minha paixão por criar interfaces visuais me levou a dar os primeiros passos no desenvolvimento front-end, utilizando HTML, CSS e JavaScript.",
      icon: '/assets/framer.svg',
      animation: 'salute',
    },
    {
      id: 2,
      name: 'MongoDB',
      pos: 'Freelance',
      duration: '2020 - 2022',
      title: "O MongoDB foi o catalisador da minha imersão no mundo dos bancos de dados. A flexibilidade e escalabilidade dessa tecnologia me permitiram criar um aplicativo inovador para o Ministério Público do Paraná, superando desafios e entregando resultados significativos",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Atualmente trabalhando com Next.js, elevo meus projetos a um novo patamar. A capacidade de criar aplicações web com renderização do lado do servidor, juntamente com o ecossistema rico do React, me permite entregar soluções personalizadas e com alta performance para os meus clientes.",
      icon: '/assets/notion.svg',
      animation: 'dancing',
    },
    {
      id: 4,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'acknowledging',
    },
  ];


  export const workExperiences = [
    {
      id: 1,
      name: 'Javascript',
      pos: 'Student',
      duration: '2019 - 2020',
      title: "I started my journey in web development exploring the world of front-end. HTML, CSS, and JavaScript are my first tools to create amazing digital experiences. My passion for creating visual interfaces led me to take the first steps in front-end development, using HTML, CSS, and JavaScript.",
      icon: '/assets/framer.svg',
      animation: 'salute',
    },
    {
      id: 2,
      name: 'MongoDB',
      pos: 'Freelance',
      duration: '2020 - 2022',
      title: "MongoDB was the catalyst for my immersion in the world of databases. The flexibility and scalability of this technology allowed me to create an innovative application for the Public Ministry of Paraná, overcoming challenges and delivering significant results.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'NextJS',
      pos: 'Junior Web Developer',
      duration: '2022 - Present',
      title: "Currently working with Next.js, I'm taking my projects to a new level. The ability to create web applications with server-side rendering, along with React's rich ecosystem, allows me to deliver customized and high-performance solutions to my clients.",
      icon: '/assets/notion.svg',
      animation: 'dancing',
    },
  ];