const menuButton = document.querySelectorAll('.menu-button');

function toggleMenu() {
  document.querySelector('.page-menu').classList.toggle('hide-section');
  document.querySelector('.page-menu').classList.toggle('show-section');
}

menuButton.forEach((btn) => btn.addEventListener('click', toggleMenu));

const speakersData = [
  {
    imgSrc: './images/speaker/caramel.jpg',
    imgAlt: 'Caramel',
    name: 'Caramel',
    occupation: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum velit at amet illo repellat consequatur.',
  },
  {
    imgSrc: './images/speaker/chip.jpg',
    imgAlt: 'Chip',
    name: 'Chip',
    occupation: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos repudiandae eum? Quidem, molestias! Rem?',
  },
  {
    imgSrc: './images/speaker/pickles.jpg',
    imgAlt: 'Pickles',
    name: 'Pickles',
    occupation: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta error adipisci, hic et voluptatum blanditiis?',
  },
  {
    imgSrc: './images/speaker/rascal.jpg',
    imgAlt: 'Rascal',
    name: 'Rascal',
    occupation: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo non distinctio laboriosam ea sapiente excepturi?',
  },
  {
    imgSrc: './images/speaker/shadow.jpg',
    imgAlt: 'Shadow',
    name: 'Shadow',
    occupation: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum esse, aspernatur eveniet maxime veritatis velit!',
  },
  {
    imgSrc: './images/speaker/snowball.jpg',
    imgAlt: 'Snowball',
    name: 'Snowball',
    occupation: 'Lorem ipsum dolor sit amet.',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi sit, numquam voluptate esse voluptatum?',
  },
];

const cardImgArr = document.querySelectorAll('.card-img');
const cardNameArr = document.querySelectorAll('.card-name');
const cardOccArr = document.querySelectorAll('.card-occupation');
const cardDescArr = document.querySelectorAll('.card-desc');

for (let i = 0; i < 6; i += 1) {
  cardImgArr[i].src = speakersData[i].imgSrc;
  cardImgArr[i].alt = speakersData[i].imgAlt;
  cardNameArr[i].textContent = speakersData[i].name;
  cardOccArr[i].textContent = speakersData[i].occupation;
  cardDescArr[i].textContent = speakersData[i].desc;
}