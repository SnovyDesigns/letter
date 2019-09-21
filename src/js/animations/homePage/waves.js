import { TweenMax, TimelineMax, Power1 } from 'gsap';

// ------------------------------------------

const wave1 = document.querySelector('#wave1'),
  wave3 = document.querySelector('#wave3'),
  wave4 = document.querySelector('#wave4'),
  wave5 = document.querySelector('#wave5'),
  wave6 = document.querySelector('#wave6');

// ------------------------------------------

// Setting our waves back to visible
TweenMax.set([wave1, wave3, wave5], { visibility: 'visible' });

// ------------------------------------------

// Single wave function
const wave = (item1, time, item2) => {
  const tl = new TimelineMax();
  tl.to(item1, time, {
    morphSVG: item2,
    transformOrigin: 'bottom',
    ease: Power1.easeOut,
    yoyo: true,
    repeat: 1,
    scaleY: 0,
    opacity: 1
  });

  return tl;
};

// ------------------------------------------

// Waves animation
const waves = () => {
  const tl = new TimelineMax();
  tl.add('start')
    .add(wave(wave1, 15, wave3), 'start')
    .add(wave(wave3, 15, wave4), 'start+=0.15')
    .add(wave(wave5, 15, wave6), 'start+=0.25');

  return tl;
};

// ------------------------------------------

export default waves;
