import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
  

export default function Test(val: string) {

  const [color,setColor]=useState<string>();
      
      const colors=["green","blue","red","yellow","brown"];


  return <div 
  style={{color:color??"blue",cursor:"pointer"}}
  onClick={
    ()=>{
      var min=1;
      var max=colors.length;
     var index= Math.floor(Math.random()*(max-min+1)) + min;
       setColor(colors[index]);

    }
  }>{"cool"}</div>;
}
