import { TimelineMax, SlowMo } from 'gsap';

// ------------------------------------------

const sunImage = document.querySelector('.hero__sun');

// ------------------------------------------

// Sun animation
const sun = () => {
  const tl = new TimelineMax();
  tl.to(sunImage, 4, {
    transformOrigin: '50% bottom',
    scale: 1,
    autoAlpha: 1,
    ease: SlowMo.ease.config(0.3, 0.1, false)
  });

  return tl;
};

// ------------------------------------------

export default sun;
