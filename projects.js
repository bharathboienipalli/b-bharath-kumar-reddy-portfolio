const projectsGrid = document.querySelector('.projects-grid');

const projects = [
   {
    id: 1,
    img: 'Files/bharath-reddy-store.png',
    title: 'Bharath Reddy Store',
    desc: 'React-based e-commerce frontend (Vite + React) — demo store with login, cart, product pages and responsive UI.',
    liveLink: 'https://bharath-reddy-store.vercel.app/',
    githubLink: 'https://github.com/bharathboienipalli/bharath-reddy-store'
  },
  {
    id: 2,
    img: 'Files/university-gatepass-logo.png',
    title: 'University GatePass Tracker',
    desc: 'Web-based system for students to request gate passes and for admin approval with secure data management.',
    liveLink: 'https://university-gatepass-tracker.onrender.com/',
    githubLink: 'https://github.com/bharathboienipalli/University_GatePass'
  },
    {
    id: 3,
    img: 'Files/youtube-clone-bharath.png',
    title: 'YouTube-Homepage-Replica-using-HTML-CSS',
    desc: 'YouTube UI replica created with pure HTML and CSS — interactive thumbnails and responsive layout.',
    liveLink: 'https://youtube-clone-bharath.vercel.app/',
    githubLink: 'https://github.com/bharathboienipalli/YouTube-Homepage-Replica-using-HTML-CSS'
  },
  {
    id: 4,
    img: 'Files/Mini-bank.png',
    title: 'MiniBank-Java',
    desc: 'Developed a console-based ATM application using Java that allows users to create and log in to accounts. Implemented core banking functionalities including deposit, withdrawal, money transfer, and balance inquiry.',
    liveLink: 'https://github.com/bharathboienipalli/MiniBank-Java',
    githubLink: 'https://github.com/bharathboienipalli/MiniBank-Java'
  }
];

let ProjectsHTML = '';

projects.forEach(project => {
  ProjectsHTML += `
    <article class="project-card" key="${project.id}">
      <img class="project-image" src="${project.img}" alt="${project.title}">
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p>${project.desc}</p>
        <div class="project-links">
          <a href="${project.liveLink}" id="live-btn${project.id}" target="_blank">Live Demo</a>
          <a href="${project.githubLink}" id="git-btn${project.id}" target="_blank">GitHub</a>
        </div>
      </div>
    </article>
  `;
});

projectsGrid.innerHTML = ProjectsHTML;
