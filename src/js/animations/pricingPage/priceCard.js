import { TimelineMax, TweenLite, Power3 } from 'gsap';
import { Power0 } from 'gsap/TweenLite';

// ------------------------------------------

// Variables
const priceCards = document.querySelectorAll('.price-card'),
  priceCard1 = document.querySelector('.price-card--1'),
  priceCard2 = document.querySelector('.price-card--2'),
  priceCardHeader = document.querySelectorAll('.price-card__header'),
  priceCardCurrency = document.querySelectorAll('.price-card__currency'),
  priceCardPrice = document.querySelectorAll('.price-card__price'),
  svgBasic = document.querySelector('.svg-basic'),
  svgBasicBG = svgBasic.querySelector('.bg'),
  svgBasicCog = svgBasic.querySelector('.cog'),
  svgPremium = document.querySelector('.svg-premium'),
  svgPremiumBG = svgPremium.querySelector('.bg'),
  svgPremiumLine1 = svgPremium.querySelector('.line1'),
  svgPremiumLine2 = svgPremium.querySelector('.line2'),
  svgPremiumLine3 = svgPremium.querySelector('.line3');

// ------------------------------------------

// Setting elements on animation start
TweenLite.set([priceCards], { scale: 0 });
TweenLite.set(priceCard1, { transformOrigin: '100% 50%' });
TweenLite.set(priceCard2, { transformOrigin: '0% 50%' });
TweenLite.set([priceCardHeader, priceCardCurrency, priceCardPrice], {
  autoAlpha: 0,
  y: 15
});
TweenLite.set([svgBasic, svgPremium, svgBasicBG, svgPremiumBG], {
  autoAlpha: 0
});
TweenLite.set([svgBasicCog], {
  transformOrigin: 'center center'
});
TweenLite.set([svgPremiumLine1, svgPremiumLine2, svgPremiumLine3], {
  width: 0
});
// ------------------------------------------

// Price Card animation
const priceCard = () => {
  const tl = new TimelineMax();
  tl.staggerTo(priceCards, 1, { scale: 1, ease: Power3.easeOut }, 0.25)
    .add('card')
    .staggerTo(
      [priceCardHeader, priceCardCurrency, priceCardPrice],
      0.25,
      { autoAlpha: 1, y: 0, ease: Power3.easeIn },
      0.25,
      'card-=0.55'
    )
    .staggerTo(
      [svgBasic, svgPremium],
      0.25,
      { autoAlpha: 1, ease: Power3.easeIn },
      0.25,
      'card-=0.35'
    )
    .staggerTo(
      [svgBasicBG, svgPremiumBG],
      0.25,
      { autoAlpha: 1, ease: Power3.easeIn },
      0.25,
      'card-=0.3'
    )
    .add('icon')
    .to(svgBasicCog, 8, {
      rotation: '+=360',
      ease: Power0.easeNone,
      repeat: -1
    })
    .staggerTo(
      [svgPremiumLine1, svgPremiumLine3],
      2.5,
      { width: 30, ease: Power0.easeNone, repeat: -1, yoyo: true },
      0.25,
      'icon'
    )
    .to(
      svgPremiumLine2,
      2.5,
      { width: 22, ease: Power0.easeNone, repeat: -1, yoyo: true },
      'icon+=0.2'
    );

  return tl;
};

export default priceCard;
