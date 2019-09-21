import { TimelineMax } from 'gsap';
import waves from './homePage/waves';
import sun from './homePage/sun';
import planes from './homePage/planes';
import flyRight from './homePage/flyRight';

// Master timeline
const master = new TimelineMax({ delay: 0.5 });
master
  .add('s')
  .add(waves())
  .add(sun(), 's+=1')
  .add(flyRight(), 's+=1.25')
  .add(planes(), 's+=1');
