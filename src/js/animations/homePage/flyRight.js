import { TweenLite, TimelineMax, Power3 } from 'gsap';

// ------------------------------------------

const flyRightGroups = document.querySelectorAll('.fly_right');

// ------------------------------------------

TweenLite.set(flyRightGroups, {
  x: -800,
  y: 500,
  z: 0,
  scale: 0,
  autoAlpha: 0,
  transformOrigin: 'center center 0px'
});

const flyRight = () => {
  const tl = new TimelineMax();
  tl.staggerTo(
    flyRightGroups,
    2,
    {
      perspective: 800,
      x: -200,
      y: 0,
      z: -3,
      scale: 1.8,
      autoAlpha: 1,
      ease: Power3.easeOut
    },
    0.55
  );
  return tl;
};

// ------------------------------------------

export default flyRight;
