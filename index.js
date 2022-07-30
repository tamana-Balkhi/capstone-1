const speakersSection = document.querySelector('#featured-speakers .container-fluid');
const speakersArr = [
  {
    name: 'DR Javid Baktash',
    position: 'data Scietest',
    desc: 'He is the teacher of Kabul university kabul Afghanistan and french institute.',
    image: 'images/baktash.jpg',
    class: 'speaker1',
  },
  {
    name: 'Demis Hassabis',
    position: 'speaker',
    desc: 'Demis Hassabis is the co-founder and CEO of DeepMind, a neuroscience-inspired artificial intelligence company.',
    image: 'images/hassab.jpg',
    class: 'speaker2',
  },
  {
    name: 'Greg Brockman',
    position: 'speaker',
    desc:
      ' Co - founder and CTO of the start- up OpenAI and one of the first employees of the payment provider Stripe, Greg Brockman is still a rather unknown candidate on this list.In his current position at the non - profit company OpenAI',
    image: 'images/greg.jpg',
    class: 'speaker3',
  },
  {
    name: 'Rana el Kaliouby',
    position: 'speaker',
    desc: 'She founded the non-profit organization AI4ALL, a company that advocates for non-discriminatory educational opportunities and expands access to AI and technology education',
    image: 'images/rana.jpg',
    class: 'speaker4',
  },
  {
    name: 'As Smola',
    position: 'speaker',
    desc: 'As Smola is the Director of Machine Learning at Amazon Web Services, he works with ML, data analytics, computer vision, deep learning, and natural language processing (NLP) to develop tools for data scientists.',
    image: 'images/alex.jpg',
    class: 'speaker5',
  },
  {
    name: 'Fei-Fei Li',
    position: 'speaker"',
    desc: 'She is considered a pioneer in the field of AI and, as CEO, leads one of the currently most interesting AI software companies..',
    image: 'images/fei.jpg',
    class: 'speaker6',
  },
];

function creatSpeaker(profile) {
  speakersSection.innerHTML += `
  <article class="${profile.class} speaker">
  <div class="speakers__img">
      <img src="${profile.image}" alt="">
  </div>
  <div class="speakers-about">
      <h3>${profile.name}</h3>
      <h4>${profile.position}</h4>
      <hr>
      <p>${profile.desc}</p>
  </div>
</article>`;
}

function createspeakersSection() {
  for (let i = 0; i < speakersArr.length; i += 1) {
    creatSpeaker(speakersArr[i]);
    if (i > 1) {
      document.querySelector(`.speaker${i + 1}`).classList.add('toggle');
    }
  }
  speakersSection.innerHTML += '<div id="more">More <a href="#featured-speakers"><i class="fas fa-chevron-down"></i></a></div>';
}

createspeakersSection();

const more = document.querySelector('#more a');
const speaker = document.querySelectorAll('.speaker');

more.addEventListener('click', () => {
  for (let i = 2; i < speaker.length; i += 1) {
    speaker[i].classList.toggle('toggle');
  }
  if (speaker[2].classList.contains('toggle')) {
    more.innerHTML = "<i class='fas fa-chevron-down'></i>";
  } else {
    more.innerHTML = "<i class='fas fa-chevron-up'></i>";
  }
});
