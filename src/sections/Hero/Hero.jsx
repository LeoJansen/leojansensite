

import { Canvas} from '@react-three/fiber'
import { CanvasComponent } from './components/CanvasComponent';

export default function Hero() {


  return (
    <section className='w-full h-screen'>
    <Canvas concurrent gl={{ alpha: false }} pixelRatio={[1, 1.5]} camera={{ position: [0, 3, 100], fov: 15 }}>
       <CanvasComponent />
    </Canvas>
    </section>
  )
}







