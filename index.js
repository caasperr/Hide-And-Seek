const hamburger = document.getElementById('humburger');
const closeBtn = document.getElementById('close');
const navbar = document.querySelector('#menu-Elements');

// Adding Projects Dynamically
const menuItems = document.querySelectorAll('.menu-item');

// Adding Modal
const appearMobileModel = document.getElementById('modal'); // Target using ID
const appearDeskModel = document.getElementById('desk-modal'); // Target using ID
const MobileModal = document.querySelector('.modal'); // Target using Class
const deskModal = document.querySelector('.desk-modal'); // Target using ID
const MobOverlay = document.querySelector('#overlay');
const Deskoverlay = document.querySelector('#Deskoverlay');
const mediaQuery = window.matchMedia('(min-width: 768px)');

function openMenu() {
  navbar.style.display = 'flex';
  hamburger.style.display = 'none';
  closeBtn.style.display = 'flex';
}

hamburger.addEventListener('click', openMenu);

function close() {
  navbar.style.display = 'none';
  hamburger.style.display = 'flex';
  closeBtn.style.display = 'none';
}

closeBtn.addEventListener('click', close);
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    if (!mediaQuery.matches) {
      navbar.style.display = 'none';
      hamburger.style.display = 'flex';
      closeBtn.style.display = 'none';
    }
  });
});

const projectsContainer = document.querySelector('.card-holder');

function generatProject({ name, image, technologies }, index) {
  return `
  <div class="card-holder-item">
    <div class="holder-image">${image}</div>
      <div class="holder-title">
          <h3>${name}</h3>
      </div>
      
      <div class="holder-discription">
        <ul class="tag">
          ${technologies.map((technology) => `<li class="tag-item">${technology}</li>`).join('')
}
        </ul>
      </div>
      <button class="btn" id="modal-btn-${index}" >See Project</button>
  </div>
</div>
  `;
}

const projects = [
  {
    name: 'Project One',
    description: 'Test',
    image: './images/bg.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
    source: 'https://google.com',
  },
  {
    name: 'Project Two',
    description: 'Test',
    image: './images/bg.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
    source: 'https://google.com',
  },
  {
    name: 'Project Three',
    description: 'Test',
    image: './images/bg.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
    source: 'https://google.com',
  },
  {
    name: 'Project four',
    description: 'Test',
    image: './images/bg.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
    source: 'https://google.com',
  },
  {
    name: 'Project Five',
    description: 'Test',
    image: './images/bg.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
    source: 'https://google.com',
  },
  {
    name: 'Project Six',
    description: 'Test',
    image: './images/bg.jpg',
    technologies: ['Ruby on rails', 'css', 'JavaScript'],
    liveVersion: 'https://mr-abdellah.github.io/my-portfolio/',
    source: 'https://google.com',
  },
];

const htmlProjects = projects.map((project, index) => generatProject(project, index)).join('');

projectsContainer.innerHTML = htmlProjects;

projects.forEach((project, index) => {
  document.getElementById(`modal-btn-${index}`).addEventListener('click', () => {
    if (mediaQuery.matches) {
      appearDeskModel.style.display = 'flex';
      deskModal.classList.add('active');
      Deskoverlay.classList.add('active');
    } else {
      appearMobileModel.style.display = 'flex';
      MobileModal.classList.add('active');
      MobOverlay.classList.add('active');
    }
  });
});

document.getElementById('close-mobile-btn').addEventListener('click', () => {
  appearMobileModel.style.display = 'none';
  MobileModal.classList.remove('active');
  MobOverlay.classList.remove('active');
});

document.getElementById('closebtnDSK').addEventListener('click', () => {
  appearDeskModel.style.display = 'none';
  deskModal.classList.remove('active');
  Deskoverlay.classList.remove('active');
});