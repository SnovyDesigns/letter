import { TimelineMax } from 'gsap';
import girl from './pricingPage/girl';
import priceCard from './pricingPage/priceCard';

console.log(window);

// Master timeline
const master = new TimelineMax({ delay: 0.5 });

if (window.innerWidth <= 768) {
  master.add(priceCard());
} else {
  master.add(girl()).add(priceCard(), '-=0.5');
}
