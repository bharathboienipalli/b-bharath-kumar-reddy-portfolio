const educationList = document.querySelector('.education-list');

const educationData = [
  {
    degree: 'Integrated MCA',
    institution: 'Parul University',
    duration: '2022 - 2026',
    result: 'CGPA: 8.61 / 10'
  },
  {
    degree: 'Intermediate (12th Standard) - BIPC',
    institution: 'Sri Chaitanya Junior Kalasala',
    duration: '2020 - 2022',
    result: 'Percentage: 95.5 / 100'
  },
  {
    degree: 'SSC (10th Standard)',
    institution: 'RBVRR Model High School',
    duration: '2019 - 2020',
    result: 'CGPA: 10 / 10'
  }
];

let educationHTML = '';

educationData.forEach(edu => {
  educationHTML += `
    <div class="education-item">
      <div class="edu-left">
        <h3>${edu.degree}</h3>
        <p>${edu.institution}, ${edu.duration}</p>
      </div>
      <div class="edu-right">
        <p>${edu.result}</p>
      </div>
    </div>
  `;
});

educationList.innerHTML = educationHTML;
