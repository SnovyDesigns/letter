import { TimelineMax } from 'gsap';
import drawHand from './drawHand/drawHand';

// Master timeline
const master = new TimelineMax();
master.add(drawHand());
