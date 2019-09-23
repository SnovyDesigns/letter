import { TimelineMax, Power2 } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import TweenLite from 'gsap/TweenLite';

// ------------------------------------------

// eslint-disable-next-line no-unused-vars
const plugins = [TextPlugin];

const authBox = document.querySelector('.authentication__box'),
  authSignIn = document.querySelector('.authentication__signup'),
  authLogIn = document.querySelector('.authentication__login'),
  authHeader = document.querySelector('.authentication__box-header'),
  authText = document.querySelector('.authentication__box-text'),
  authTrigger = document.querySelector('.authentication__trigger'),
  authBoxTL = new TimelineMax({ paused: true });

// ------------------------------------------

// Sign In Box animation
const authSignInTL = () => {
  const tl = new TimelineMax();

  tl.to(authSignIn, 0.75, { x: -160, autoAlpha: 0, ease: Power2.easeIn });

  return tl;
};

// ------------------------------------------

// Log In Box animation
const authLogInTL = () => {
  const tl = new TimelineMax();

  tl.to(authLogIn, 0.75, { x: 0, autoAlpha: 1, ease: Power2.easeOut });

  return tl;
};

// ------------------------------------------

authBoxTL
  .add('start')
  .set(authHeader, { text: 'Welcome Back!' })
  .set(authText, {
    text: 'To keep connected with us please login with your personal info'
  })
  .set(authTrigger, { text: 'Sign In' })
  .to(authBox, 0.75, {
    width: 450,
    x: 135,
    ease: Power2.easeIn
  })
  .to(
    [authHeader, authText, authTrigger],
    0.75,
    { autoAlpha: 0, ease: Power2.easeIn },
    'start'
  )
  .add(authSignInTL(), 'start')
  .set(authHeader, { text: 'Hello, Friend!' })
  .set(authText, {
    text: 'Enter your personal data to start journey with us'
  })
  .set(authTrigger, { text: 'Sign Up' })
  .to([authHeader, authText, authTrigger], 0.75, {
    autoAlpha: 1,
    ease: Power2.easeOut
  })
  .to(
    authBox,
    0.75,
    {
      width: 320,
      x: 400,
      ease: Power2.easeOut
    },
    'start+=0.75'
  )
  .add(authLogInTL(), 'start+=0.75');

// ------------------------------------------

authTrigger.addEventListener('click', e => {
  if (e.target.classList.contains('right')) {
    authBoxTL.reverse();
    e.target.classList.remove('right');
  } else {
    authBoxTL.play();
    e.target.classList.add('right');
  }
});
