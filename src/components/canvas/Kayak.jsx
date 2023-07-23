
import React from "react";
import { Suspense, useEffect,useState } from "react";

import {Canvas} from "@react-three/fiber"; 
import { OrbitControls,Preload,useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader"; 


const Kayak = ({isMobile}) => {
    const kayak = useGLTF("./kayakorange/scene.gltf")
  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor='black'/>
        <spotLight
            position={[5,5,5]}
            angle={5.12}
            penumbra={5}
            castShadow
            shadow-mapSize={1024}
        />
        <pointLight intensity={1}/>
        <primitive
            object={kayak.scene}
            scale={isMobile ? 3.2 : 5.75}
            position={isMobile ? [0 , -3 , -2.2] : [0 , -3.25 ,-1.5]}
            rotation={[-0.01, -0.2,-0.1]}
            
            
        />
    </mesh>
  )
}


const KayakCanvas =()=>{

    const [isMobile, setIsMobile] = useState(false); 

    useEffect(()=>{
        const mediaQuery = window.matchMedia("(max-width: 500px)"); 

        setIsMobile(mediaQuery.matches); 

        const handleMediaQueryChange =(event)=>{
            setIsMobile(event.matches);
        }; 

        mediaQuery.addEventListener("change",handleMediaQueryChange);

        return()=>{
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        }
    }, []); 
    return(
        <Canvas 
            frameloop="demand"
            shadows
            dpr={[1,2]}
            camera={{position: [20,3,5], fov: 25}}
            gl={{preserveDrawingBuffer: true}}

        >
            <Suspense fallback={<CanvasLoader/>}>
            <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI/2}
                minPolarAngle={Math.PI/2}
            />
            <Kayak/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default KayakCanvas; 
