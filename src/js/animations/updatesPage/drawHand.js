import { TweenMax, TimelineMax, Power3, Bounce } from 'gsap';
import { DrawSVGPlugin } from '../gsap-plugins/DrawSVGPlugin';
// eslint-disable-next-line no-unused-vars
const plugins = [DrawSVGPlugin];

// ------------------------------------------
//     Draw Hand animation - Updates page
// ------------------------------------------

let draws = document.querySelectorAll('.hand__draw'),
  circle1 = document.querySelector('.hand__circle1'),
  circle2 = document.querySelector('.hand__circle2'),
  handSVG = document.querySelector('.hand__svg');

// ------------------------------------------

TweenMax.set(draws, { visibility: 'visible' });
TweenMax.set(handSVG, { y: 1270 });

// ------------------------------------------

const drawHand = () => {
  const tl = new TimelineMax();
  tl.add('start')
    .to(handSVG, 3.5, { y: 0, ease: Power3.easeOut }, 'start')
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

// ------------------------------------------

export default drawHand;
