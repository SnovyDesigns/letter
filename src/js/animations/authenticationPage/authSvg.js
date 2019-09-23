import { TimelineMax, TweenLite } from 'gsap';

// ------------------------------------------

const authSvg = document.querySelector('.authentication__svg'),
  authSvgKey = authSvg.querySelector('.key'),
  authSvgInnerkey = authSvg.querySelector('.innerkey'),
  authSvgBtn = authSvg.querySelector('.btn'),
  authSvgStars = authSvg.querySelectorAll('.star');

// ------------------------------------------

TweenLite.set(authSvgStars, { opacity: 0 });

// ------------------------------------------

// Input function
const input = () => {
  const tl = new TimelineMax();
  tl.staggerTo(authSvgStars, 1.5, { opacity: 1 }, 0.1).to(authSvgBtn, 0.25, {
    scale: 0.95,
    repeat: 1,
    yoyo: true,
    transformOrigin: 'center center'
  });

  return tl;
};

// Key & innerkey function
const key = (color, innercolor) => {
  const tl = new TimelineMax();
  tl.to(
    authSvgKey,
    0.75,
    {
      fill: color,
      repeat: 1,
      yoyo: true
    },
    0
  ).to(
    authSvgInnerkey,
    0.75,
    {
      fill: innercolor,
      repeat: 1,
      yoyo: true
    },
    0
  );

  return tl;
};

const authSVG = () => {
  const tl = new TimelineMax({ repeat: -1 });
  tl.add(input())
    .add(key('#ea526f', '#f3607b'), '-=0.15')
    .set(authSvgStars, { opacity: 0 })
    .add(input())
    .add(key('#ea526f', '#f3607b'), '-=0.15')
    .set(authSvgStars, { opacity: 0 })
    .add(input())
    .add(key('#49dcb1', '#67f1c9'), '-=0.15')
    .set(authSvgStars, { opacity: 0 });
  return tl;
};

export default authSVG;
