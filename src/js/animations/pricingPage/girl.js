import { TimelineMax, Back, TweenLite } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { Power2 } from 'gsap/TweenLite';

// ------------------------------------------

// Variables
const girlImg = document.querySelector('.pricing__girl img'),
  bottomLine = CSSRulePlugin.getRule('.pricing__girl:after');

// ------------------------------------------

// Setting elements on animation start
TweenLite.set(bottomLine, { width: 0 });
TweenLite.set(girlImg, { transformOrigin: '50% bottom', scale: 0 });

// ------------------------------------------

// Girl animation
const girl = () => {
  const tl = new TimelineMax();
  tl.add('start')
    .to(bottomLine, 2, { width: '70rem', ease: Power2.easeOut }, 'start')
    .to(
      girlImg,
      1.5,
      {
        scale: 1,
        ease: Back.easeOut.config(1.4)
      },
      'start+=0.25'
    );

  return tl;
};

export default girl;
