// menu btn js
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close');
const menuItem = document.querySelectorAll('.list-items');// output : array
const container = document.querySelector('.humb-container');
const speakersContainer = document.querySelector('.cards-speakers-container');
const btnSeeMore = document.getElementById('see-more');


function openNav () {
  // container.classList.remove('display-none');
  container.style.top = '0'
}

function closeNav () {
  // container.classList.add('display-none');
  container.style.top = '-100'
}

menuBtn.addEventListener('click',openNav);
closeBtn.addEventListener('click',closeNav);

// array.forEach(element => {
  
// });

// // fonction open the nav
// function openNav() {
//   container.classList.remove('display-none');
// }

// // fonction close the nav
// function closeNav() {
//   container.classList.add('display-none');
// }

// // open the navbar
// menuBtn.addEventListener('click', openNav);

// // close the container when the items are selected
// menuItem.forEach((element) => {
//   element.addEventListener('click', closeNav);
// });

// // close the navbar
// closeBtn.addEventListener('click', closeNav);



let i;

const speakers = [{
  id: 1,
  name: 'Jorge Sebastiao',
  image: 'pictures/speakers/1.PNG',
  work_background:
      'CTO huawei technologies.',
  desc: 'has 6 current jobs including Chief Security Officer & Growth Hacking .',
},
{
  id: 2,
  name: 'Thomas NG',
  image: 'pictures/speakers/2.PNG',
  work_background: 'CEO of NG GLOBAL FZ LLC.',
  desc: 'a leading Consultant for state of the art Smart City Digital landscape.',
},
{
  id: 3,
  name: 'Nadine Bitar Chahine',
  image: 'pictures/speakers/3.PNG',
  work_background: 'CHIEF PLACEMAKING OFFICER.',
  desc: 'She is a thought leader on place-led approach for livable cities based in Dubai.',
},
{
  id: 4,
  name: 'Mohamed Sadek',
  image: 'pictures/speakers/4.PNG',
  work_background: 'Founder, CM-IoT technologies.',
  desc: 'he develops security solutions to enhance the safety of cities in Dubai.',
},
{
  id: 5,
  name: 'David Provenzano',
  image: 'pictures/speakers/6.PNG',
  work_background: 'a doctor.',
  desc: 'a leading expert in Pittsburgh for treating patients who suffer daily from pain.',
},
{
  id: 6,
  name: 'Vinod Shukla',
  image: 'pictures/speakers/5.PNG',
  work_background:
      'Assistant Professor, Information Technology at Amity University Dubai, UAE.',
  desc: ' ',
},
];

function createSpeaker() {
  speakersContainer.innerHTML = '';
  if (window.screen.width >= 769) {
    speakers.forEach((speaker) => {
      speakersContainer.innerHTML += `
        <div class="cards-speakers display-flex">
          <div class="card-of-speakers-img">
            <img src="${speaker.image}" alt="speaker">
          </div>
          <div class="card-of-speakers-content">
            <h5>${speaker.name}</h5>
            <p class="speaker-description-1">${speaker.work_background}
            </p>
            <p class="speaker-description-2">${speaker.desc}</p>
          </div>
        </div>`;
    });
  } else {
    for (i = 0; i < 2; i += 1) {
      speakersContainer.innerHTML += `
        <div class="cards-speakers display-flex">
          <div class="card-of-speakers-img">
            <img src="${speakers[i].image}" alt="speaker">
          </div>
          <div class="card-of-speakers-content">
            <h5>${speakers[i].name}</h5>
            <p class="speaker-description-1">${speakers[i].work_background}
            </p>
            <p class="speaker-description-2">${speakers[i].desc}</p>
          </div>
        </div>`;
    }
  }
}


btnSeeMore.addEventListener('click', () => {
  while (i < 6) {
    speakersContainer.innerHTML += `
        <div class="cards-speakers display-flex">
          <div class="card-of-speakers-img">
            <img src="${speakers[i].image}" alt="speaker">
          </div>
          <div class="card-of-speakers-content">
            <h5>${speakers[i].name}</h5>
            <p class="speaker-description-1">${speakers[i].work_background}
            </p>
            <p class="speaker-description-2">${speakers[i].desc}</p>
          </div>
        </div>`;
    i += 1;
    btnSeeMore.classList.add('display-none');
  }
});
document.addEventListener('DOMContentLoaded', createSpeaker, false);

