import React from 'react';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useBox } from "use-cannon";
import { draco } from 'drei';

const Tree = (props) => {
    const [ref] = useBox(() => ({
        type: "static",
        args: [10, 3, 1],
        position: [0, 0, 3],
     }))

    const { nodes } = useLoader(GLTFLoader, "/assets/3D/Tree/scene.gltf", draco());
   
    return (  
            <>
            <mesh ref={ref}/>
              <group
                scale={[11, 11, 11]} 
                rotation={[-Math.PI /2 , 0, -Math.PI /6.5]}
                position={[-0, 0, 0]}
              >
              </group>
            </> 
    );
}

export default Tree;