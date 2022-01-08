import React from 'react';
import Picture from '../Picture/Picture';
import Display from '../Display/Display';
import Video from '../Video/Video';
const Art = () => {
  
    return (
        <>
        {/* liam portrait */}
        <Picture 
            url={"/assets/3D/Portrait/scene.gltf"}
            scale={[10, 10, 10]}
            position={[80.3, 14, 10]}            
            rotation={[0, -Math.PI+.55, 0]}
            metalness={0.9}
            reflectivity={90}
            roughness={0.9}
        />
      
        

        {/* wedding */}
        <Picture 
            url={"/assets/3D/Wedding/scene.gltf"}
            scale={[10, 10, 10]}
            position={[25, 14, 15]}            
            rotation={[Math.PI / 2, Math.PI, .55]}
            metalness={0.0}
            reflectivity={90}
            roughness={0.3}
        />

         <Picture 
            url={"/assets/3D/Portrait/scene.gltf"}
           scale={[10, 10, 10]}
            position={[25, 14, 50]}            
            rotation={[0, -Math.PI-.55, 0]}
            metalness={0.9}
            reflectivity={90}
            roughness={0.9}
        />

        {/* wedding */}
        <Picture 
            url={"/assets/3D/Wedding/scene.gltf"}
           scale={[10, 10, 10]}
            position={[80.3, 14, 55]}            
            rotation={[Math.PI / 2, Math.PI, -.55]}
            metalness={0.0}
            roughness={0.3}
        />
         


        {/* wilson portrait */}
         <Picture 
            url={"/assets/3D/Wilson/scene.gltf"}
          scale={[10, 10, 10]}
            position={[-19.3, 14, 0]}            
            rotation={[-Math.PI / 2, 0, 0]}
            metalness={0}
            roughness={0.3}
        />

        {/* old man portrait */}
        <Picture 
            url={"/assets/3D/OldMan/scene.gltf"}
          scale={[10, 10, 10]}
            position={[-19.4, 14, 25]}            
            rotation={[0, 0, 0]}
            metalness={0.9}
            roughness={0.9}
        />
        


        {/* wilson portrait */}
         <Picture 
            url={"/assets/3D/Wilson/scene.gltf"}
          scale={[10, 10, 10]}
            position={[-19.3, 14, 50]}            
            rotation={[-Math.PI / 2, 0, 0]}
            metalness={0}
            roughness={0.3}
        />
    
        {/* old man portrait */}
        <Picture 
            url={"/assets/3D/OldMan/scene.gltf"}
           scale={[10, 10, 10]}
            position={[-19.4, 14, 75]}            
            rotation={[0, 0, 0]}
            metalness={0.9}
            roughness={0.9}
        />
      
         {/* girl portrait */}
         <Picture 
            url={"/assets/3D/Girl/scene.gltf"}
           scale={[10, 10, 10]}
            position={[-34.6, 14, 12]}            
            rotation={[-Math.PI / 2, 0, 0]}
            metalness={0.7}
            roughness={0.8}
        />
         
    </>

    )
  }

  export default Art;