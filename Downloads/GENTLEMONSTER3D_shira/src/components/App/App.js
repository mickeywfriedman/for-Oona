import React, { Suspense, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from 'react-three-fiber';
import { Physics } from 'use-cannon';
import { Stars, Sky, Stats } from "@react-three/drei";
import Moon from '../Moon/Moon';
import Building from '../Building/Building';
import Ground from '../Ground/Ground';
import Art from '../Art/Art';
import Bench from '../Bench/Bench';
import SmallBench from '../SmallBench/SmallBench';
import Tree from '../Bench/tree';
import Camera from '../Camera/Camera';
import Player from '../Player/Player';
import Lights from '../Lights/Lights';

const App = () => {
  const [night, setNight] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if(e.code === "KeyN"){
        setNight(!night)        
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  })  

  return (
    <>
      <Canvas 
        onCreated={({ gl }) => { 
          gl.shadowMap.enabled = false
          gl.shadowMap.type = THREE.PCFSoftShadowMap
        }}
      >
        <Camera fov={60} />

        {night ? 
          <>
            <Moon position={[110, 170, -250]} />
          </>
          : 
          <>
            <Sky sunPosition={[110, 40, -250]} /> 
            <fog attach="fog" args={["#000", 10, 600]}/>
          </>
        }

        <Lights night={night} />
             
        <Physics gravity={[0, -30, 0]}>
          <Suspense fallback={null}>
            <Ground /> 
            <Building />            
            <Art />   
            <Tree />                
          </Suspense>      
          <Player />       
        </Physics>
        <Stats  showPanel={0} />
      </Canvas>
    </>
  );
}

export default App;



