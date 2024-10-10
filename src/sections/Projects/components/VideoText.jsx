import { Suspense } from 'react'
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'
import CanvasLoader from '../../../components/CanvasLoader'


export function VideoText({videoUrl}) {
  const size = useAspect(1800, 1000)
  return (
    <mesh scale={size}>
      <planeGeometry />
      <Suspense fallback={<CanvasLoader/>}>
        <VideoMaterial url={videoUrl} />
      </Suspense>
    </mesh>
  )
}

function VideoMaterial({ url }) {
  const texture = useVideoTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}

function FallbackMaterial({ url }) {
  const texture = useTexture(url)
  return <meshBasicMaterial map={texture} toneMapped={false} />
}
