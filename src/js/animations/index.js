import { TweenMax, TimelineMax, Power3, Bounce } from 'gsap';
import { DrawSVGPlugin } from '../vendors/gsap-plugins/DrawSVGPlugin';

// eslint-disable-next-line no-unused-vars
const plugins = [DrawSVGPlugin];

// Hand animation - Updates page
let draws = document.querySelectorAll('.hand__draw'),
  circle1 = document.querySelector('.hand__circle1'),
  circle2 = document.querySelector('.hand__circle2'),
  handSVG = document.querySelector('.hand__svg');

TweenMax.set(draws, { visibility: 'visible' });

const draw = () => {
  const tl = new TimelineMax();
  tl.add('start')
    .from(handSVG, 3.5, { y: 1270, ease: Power3.easeOut }, 'start')
    .fromTo(
      draws,
      3.5,
      { drawSVG: '100% 100%' },
      { drawSVG: '100%', ease: Power3.easeOut },
      'start'
    )
    .to(circle1, 0.5, { autoAlpha: 1, ease: Bounce.easeIn }, 'start+=0.38')
    .to(circle2, 0.5, { autoAlpha: 1, ease: Bounce.easeIn }, 'start+=1.12');

  return tl;
};

// Master timeline
const master = new TimelineMax();
master.add(draw());
