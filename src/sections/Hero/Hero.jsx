

import { Canvas} from '@react-three/fiber'
import { CanvasComponent } from './components/CanvasComponent';
import { Button } from '../../components/Button';

export default function Hero() {


  return (
    <section className='w-full h-screen'>
    <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
       <CanvasComponent />
    </Canvas>
    <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}







