import { TimelineMax } from 'gsap';
import girl from './pricingPage/girl';
import priceCard from './pricingPage/priceCard';

// Master timeline
const master = new TimelineMax({ delay: 0.5 });
master.add(girl()).add(priceCard(), '-=0.5');
