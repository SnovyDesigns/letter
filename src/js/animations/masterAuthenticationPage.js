import { TimelineMax } from 'gsap';
import authSVG from './authenticationPage/authSvg';
import './authenticationPage/authBox';

// Master timeline
const master = new TimelineMax({ delay: 0.5 });
master.add('s').add(authSVG());
