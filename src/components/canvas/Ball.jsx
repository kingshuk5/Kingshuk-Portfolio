import React from 'react';

const BallCanvas = ({ icon ,name}) => {
  return (
    <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-violet-700 via-indigo-800 to-blue-950 shadow-white group hover:scale-110 "> 
      <img 
        src={icon} 
        alt="Ball Icon" 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 object-cover rounded-full shadow-lg" 
      />
      <div className="absolute bottom-14 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-2 py-1 rounded">
        {name}
      </div>
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent to-pink-500 opacity-75 rounded-full blur-sm"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-transparent to-orange-500 opacity-75 rounded-full blur-sm"></div> */}
    </div>
  );
};

export default BallCanvas;

// import React,{Suspense} from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Decal,Float,OrbitControls,Preload,useTexture } from '@react-three/drei';
// import CanvasLoader from '../Loader';

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl])


//   return (
//     <Float speed={1.75} rotationIntensity={1} floatIntensity={2}> 
//       <ambientLight  intensity={0.25}/>
//       <directionalLight position={[0,0,0.05]}/>
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1,1]} />
//         <meshStandardMaterial 
//           color='#fff8eb'
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading
//         />
//         <Decal 
//           position={[0,0,1]}
//           rotation={[2*Math.PI, 0 , 6.25]}
//           flatShading
//           map={decal}
//         />
//       </mesh>
//     </Float>
//   )
// }

// const BallCanvas =({icon}) =>{
//   return (
//     <Canvas 
//       frameloop='demand'
//       gl={{preserveDrawingBuffer: true}}
//     >
//       <Suspense
//         fallback={<CanvasLoader/>}
//       >
//         <OrbitControls 
//          enableZoom={false}
//         />
//         <Ball imgUrl={icon} />
//       </Suspense>
//       <Preload all/>
//     </Canvas>
//   )
// }


// export default BallCanvas