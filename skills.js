const skillsList = document.querySelector('.skills-list');

const skills = [
  '🧱 HTML',
  '🎨 CSS',
  '⚡ JavaScript',
  '⚛️ React.js',
  '☕ Java',
  '🗄️ MySQL',
  '🔧 Git',
  '🐙 GitHub',
  '🖥️ VS Code'
  
];

let skillsHTML = '';

skills.forEach(skill => {
  skillsHTML += `<div class="skill">${skill}</div>`;
});

skillsList.innerHTML = skillsHTML;
