import { useDepthBuffer } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MovingSpot } from "../../../components/MovingSpot";
import { CodeMeter } from "../../../components/CodeMeter";
import { useRef } from "react";

export const CanvasComponent = () => {
    const depthBuffer = useDepthBuffer({ frames: 1 });
 
    const ref = useRef();

    return (
        <>
        <Canvas>
            <group ref={ref}>
                <MovingSpot depthBuffer={depthBuffer} color="#0c8cbf" position={[-3, 3, 2]} />
                <CodeMeter />
            </group>
        </Canvas>
        </>
    );
};