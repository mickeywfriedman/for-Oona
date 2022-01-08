import React from 'react';
import SpotLight from '../SpotLight/Spotlight';
import PointLight from '../PointLight/PointLight';
import DirectionalLight from '../DirectionalLight/DirectionalLight';

const Lights = ({ night }) => {

    return (
        <>
             <ambientLight intensity={night ? 0.002 : 0.5}/>
            <DirectionalLight
                position={[29, 90, -60]}
                target={[0, 20, 500]}
                intensity={night ? 0.09 : 9}
                color={night ? "tan" : "lightgoldenrodyellow"}               
            /> 
            {/* liam portrait light */}

             <PointLight 
                intensity={0.7} 
                position={[0, -3, 0]}
            /> 

        
            <SpotLight 
                position={[40, 19.5, 0]}
                target={[80.3, 20, 10]}
                intensity={1.0} 
                penumbra={0.5}                
                sNormalBias={0.05}
                sBias={0}
                angle={Math.PI/10}
                decay={1}
            />


             {/* liam portrait light */}
            <SpotLight 
                position={[-5, 40.5, 15]}
                target={[25, 3, 15]}
                intensity={1.0} 
                penumbra={0.5}                
                sNormalBias={0.05}
                sBias={0}
                angle={Math.PI/10}
                decay={1}
            />


            {/* wedding light */}
            <SpotLight 
                position={[-5, 40.5, 50]}
                target={[25, 3, 50]}
                intensity={1.0} 
                penumbra={0.9}                
                sNormalBias={0.05}
                sBias={0}
                angle={Math.PI/10}
                decay={1}
            />

            {/* wedding light */}
            <SpotLight 
                position={[40, 19.5, 75]}
                target={[80.3, 20, 55]} 
                intensity={1.0} 
                penumbra={0.5}                
                sNormalBias={0.05}
                sBias={0}
                angle={Math.PI/10}
                decay={1}
            />

            {/* wilson light */}
            <SpotLight 
                position={[-12, 19.5, 0]}
                target={[-21, 4, 0]}
                intensity={1.5} 
                penumbra={0.5}                
                sNormalBias={0.05}
                sBias={0}
                angle={Math.PI/10}
                decay={2}
            />

            {/* wilson light */}
            <SpotLight 
                position={[-12, 19.5, 50]}
                target={[-21, 4, 50]}
                intensity={1.5} 
                penumbra={0.5}                
                sNormalBias={0.05}
                sBias={0}
                angle={Math.PI/10}
                decay={2}
            />

            {/* old man light */}
            <SpotLight 
                position={[-12, 19.5, 25]}
                target={[-21, 4, 25]}
                intensity={1.5} 
                penumbra={0.5}                
                sNormalBias={0.05}
                sBias={0}
                angle={Math.PI/10}
                decay={2}
            />

             {/* old man light */}
            <SpotLight 
                position={[-12, 19.5, 75]}
                target={[-21, 4, 75]}
                intensity={1.5} 
                penumbra={0.5}                
                sNormalBias={0.05}
                sBias={0}
                angle={Math.PI/10}
                decay={2}
            />

            {/* creation of adam light */}
         

          

        </>
    )

}

export default Lights;