const certificationsGrid = document.querySelector('.certifications-grid');

const certifications = [
  {
    id: 1,
    img: './Files/HTML & CSS.jpg',
    title: 'HTML and CSS',
    provider: 'BitDegree',
    pdfLink: 'https://drive.google.com/file/d/1EXGL-4o-LtNYrrKap9dwoIUNXDgi07si/view?usp=drive_link'
  },
  {
    id: 2,
    img: './Files/Java_HackerRank_Certificate.jpg',
    title: 'Java Certificate',
    provider: 'HackerRank',
    pdfLink: 'https://drive.google.com/file/d/1eXxUKx2IGnwNP8VfFHymQ2unTEurJqPN/view?usp=drive_link'
  },
  {
    id: 3,
    img: './Files/Database and sql.jpg',
    title: 'Database and SQL',
    provider: 'Infosys | Springboard',
    pdfLink: 'https://drive.google.com/file/d/1lRSbbLf_SHUmY9oYO9y778_oa3NFmKT4/view?usp=drive_link'
  },
  {
    id: 4,
    img: './Files/Python_SpokenTutorial.jpg',
    title: 'Python 3.4.3 Training ',
    provider: 'Spoken Tutorial, IIT Bombay',
    pdfLink: 'https://drive.google.com/file/d/1o09Kpr3eqt3y2bVX9mGkJ4AsYL-vW72F/view?usp=drive_link'
  }
];

let certificationsHTML = '';

certifications.forEach(cert => {
  certificationsHTML += `
    <article class="project-card">
      <img class="project-image" src="${cert.img}" alt="${cert.title}">
      <div class="project-content">
        <h3 class="project-title">${cert.title}</h3>
        <p>${cert.provider}</p>
        <div class="project-links">
          <a href="${cert.pdfLink}" target="_blank" id="view-certificate${cert.id}">View Certificate</a>
        </div>
      </div>
    </article>
  `;
});

certificationsGrid.innerHTML = certificationsHTML;
