import { Canvas } from '@react-three/fiber'
import React from 'react'
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei';
// import macContanier from './macContanier';
import MacContanier from './macContanier';
import { div } from 'three/webgpu';

const App = () => {
  return (
    <div className="w-full h-screen">
      <div className='navbar flex gap-4 absolute top-0 left-1/2 -translate-x-1/2 mt-7 '>
        {["iphone","iPad", "Services", "ios", "mac", "products,iphone","iPad", "Services", "ios", "mac", "products"].map((e)=>(
          <a a href='' className='text-white font-[500] text-xl'>{e}</a>
        ))}
      </div>
      <div className="absolute top-24 text-white left-1/2 -translate-x-1/2 font-mono">
        <h3 className='masked text-5xl tracking-tighter font-[500]'>Mackbook Pro.</h3>
        <h5 className='items-center ml-24 mt-3'>Oh so Pro !</h5>
        {/* <p className='items-center w-3/4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis ad eius minima?</p> */}
      </div>
      <Canvas camera={{fov:12, position :[0,-10,260]}}>
        <OrbitControls />
        <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/studio_small_09_2k.hdr",]} />
        <ScrollControls pages={3}>
          <MacContanier />
        </ScrollControls>
    </Canvas>
    </div>
  )
}

export default App