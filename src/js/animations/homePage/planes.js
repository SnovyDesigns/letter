import { TimelineMax, SlowMo } from 'gsap';
import MorphSVGPlugin from '../gsap-plugins/MorphSVGPlugin';

// ------------------------------------------

// eslint-disable-next-line no-unused-vars
const plugins = [MorphSVGPlugin];

const planesSVGs = document.querySelectorAll('.plane'),
  path = MorphSVGPlugin.pathDataToBezier('#motionPath', { align: planesSVGs });

// ------------------------------------------

const planes = () => {
  const tl = new TimelineMax();
  tl.staggerTo(
    planesSVGs,
    8,
    {
      bezier: { values: path, type: 'cubic', autoRotate: true },
      ease: SlowMo.ease.config(0.3, 0.1, false),
      repeat: -1
    },
    0.5
  );

  return tl;
};

// ------------------------------------------

export default planes;
