import React from 'react';
import Wall from '../Wall/Wall';
import WindowFrame from '../WindowFrame/WindowFrame';
import Glass from '../Glass/Glass';

const Building = () => {
  
    return (
        <>
              <Wall 
                position={[0, 0, 30]}
                scale={[5, 5, 5]} 
                rotation={[-.000005, 240.251, .000]}
                modelUrl={"/assets/3D/Wall/scene.gltf"}
                mapUrl={"/assets/3D/Wall/Textures/lambert48_diffuse.jpeg"}
                normalMapUrl={"/assets/3D/Wall/Textures/lambert48_occlusion.png"}
            />

            <Wall 
                position={[0, 6, 200]}
                scale={[7, 7, 7]} 
                rotation={[-.000005, 180.251, .000]}
                modelUrl={"/assets/3D/Tree/scene.gltf"}
                mapUrl={"/assets/3D/Tree/Textures/Material_001_baseColor.jpeg"}
                normalMapUrl={"/assets/3D/Tree/Textures/Material_001_normal.png"}
            />

            <Wall 
                position={[150, 12, -20]}
                scale={[10, 10, 10]} 
                rotation={[-.000005, 180.251, .000]}
                modelUrl={"/assets/3D/Tree/scene.gltf"}
                mapUrl={"/assets/3D/Tree/Textures/Material_001_baseColor.jpeg"}
                normalMapUrl={"/assets/3D/Tree/Textures/Material_001_normal.png"}
            />




            
        </>

    )
  }

  export default Building;