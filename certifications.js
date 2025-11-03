const certificationsGrid = document.querySelector('.certifications-grid');

const certifications = [
  {
    id: 1,
    img: './Files/HTML & CSS.jpg',
    title: 'HTML and CSS',
    provider: 'BitDegree',
    pdfLink: './Files/HTML & CSS.pdf'
  },
  {
    id: 2,
    img: './Files/Java_HackerRank_Certificate.jpg',
    title: 'Java Certificate',
    provider: 'HackerRank',
    pdfLink: './Files/Java_HackerRank_Certificate.pdf'
  },
  {
    id: 3,
    img: './Files/Database and sql.jpg',
    title: 'Database and SQL',
    provider: 'Infosys | Springboard',
    pdfLink: './Files/Database and sql.pdf'
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
