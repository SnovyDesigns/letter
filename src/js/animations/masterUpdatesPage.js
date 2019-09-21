import { TimelineMax } from 'gsap';
import drawHand from './updatesPage/drawHand';

// Master timeline
const master = new TimelineMax({ delay: 0.5 });
master.add(drawHand());
