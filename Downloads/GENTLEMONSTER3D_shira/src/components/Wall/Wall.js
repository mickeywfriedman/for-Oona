import React, { useState, useEffect, useMemo } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useBox } from "use-cannon";

const Wall = ({ 
    scale,
    position,
    rotation,
    modelUrl,
    mapUrl,
    normalMapUrl 
}) => {
    let texture, normal;
    const size = 1;

    const [model, setModel] = useState();
    const [refFront] = useBox(() => ({ 
        type: "static", 
        args: [70, 50, 1],
        position: [0, 0, -17],
    }));
    const [refBack] = useBox(() => ({ 
        type: "static", 
        args: [70, 50, 1],
        position: [0, 0, 44],
    }));
    const [refL] = useBox(() => ({ 
        type: "static", 
        args: [1, 50, 80],
        position: [-39.5, 0, 0],
    }));
    const [refR] = useBox(() => ({ 
        type: "static", 
        args: [1, 50, 80],
        position: [39.5, 0, 0],
    }));
    const [refTop] = useBox(() => ({ 
        type: "static", 
        args: [150, 1, 150],
        scale: [2, 2, 2],
        position: [0, 90, 0],
    }));


    const newMaterial = new THREE.MeshPhysicalMaterial({
    });

    texture = useMemo(() => new THREE.TextureLoader().load(mapUrl), [mapUrl]);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(size, size);

    normal = useMemo(() => new THREE.TextureLoader().load(normalMapUrl), [normalMapUrl]);
    normal.wrapS = THREE.RepeatWrapping;
    normal.wrapT = THREE.RepeatWrapping;
    normal.repeat.set(size, size);
  
    useEffect(() => {
      new GLTFLoader().load(modelUrl, setModel)
    }, [modelUrl]);
  
    return (
        
        model ? 
            <>
                <mesh ref={refFront}/>
                <mesh ref={refL}/>
                <mesh ref={refR}/>
                <mesh ref={refBack}/>
                <mesh ref={refTop}/>
                <primitive                   
                    position={position}
                    scale={scale}
                    rotation={rotation}
                    object={model.scene}
                    mesh={model.scene.traverse( function ( child ) {
                        if ( child.isMesh ) {
                            child.material = newMaterial;
                            child.castShadow = true;
                            child.receiveShadow = true;
                            child.material.side = THREE.DoubleSide;
                            child.material.normalMap = normal;
                            child.material.map = texture;
                            child.material.reflectivity= .1;
                            child.material.clearcoat= .9;
                            child.material.metalness = 0.00;
                            child.material.roughness = .0;
                        }
                    })} 
                /> 
            </> : null
    )
  }

  export default Wall;