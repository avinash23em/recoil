import { useState,memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot, atom , useRecoilValue, useSetRecoilState} from 'recoil'
import { counteratom,evenSelector } from './Store/atoms/Counter'
import { useEffect } from 'react'


// function App() {
  

//   return (
//     <>
//       <RecoilRoot>
//            <Counter/>
//       </RecoilRoot>
//     </>
//   )
// }
// function Counter(){
// return (
//   <div>
//     <Currcounter/>
//     <Increase/>
//     <Decrease/>
//   </div>
// )
// }
// function Currcounter(){
// const count=useRecoilValue(counteratom);
// return (
//   <div>
//     count {count}
//   </div>
// )
// }

// function Increase(){
//   const setCount=useSetRecoilState(counteratom);
//   function increase(){
// setCount(c=>c+1);
//   }
//   return (
//     <div>
//       <button onClick={increase}>increase</button>
//     </div>
//   )
// }

// function Decrease(){
//   const setCount=useSetRecoilState(counteratom);
//   function decrease(){
// setCount(c=>c-1);
//   }
//   return (
//     <div>
//       <button onClick={decrease}>decrease</button>
//     </div>
//   )
// }   


 ///use memo to correct the issue defined 

// function App() {
  

//   return (
//     <>
//       <RecoilRoot>
//            <Counter/>
//       </RecoilRoot>
//     </>
//   )
// }

// //here count defined under counter is not passed as props to next components unders it but when after 3secc it renders whole components inside it renders too 

// function Counter(){
//   const[countt,setCount]=useState(0);
//   useEffect(()=>{
//    setInterval(()=>{
//    setCount(c=>c+1);
//    },3000)
//   },[]);

// return (
  
//   <div>
//     <Currcounter/>
//     <Increase/>
//     <Decrease/>
//   </div>
// )
// }
// const Currcounter=memo(function(){
// const count=useRecoilValue(counteratom);
// return (
//   <div>
//     count {count}
//   </div>
// )
// })

// const Increase=memo (function(){
//   const setCount=useSetRecoilState(counteratom);
//   function increase(){
// setCount(c=>c+1);
//   }
//   return (
//     <div>
//       <button onClick={increase}>increase</button>
//     </div>
//   )
// })

// const Decrease=memo(function(){
//   const setCount=useSetRecoilState(counteratom);
//   function decrease(){
// setCount(c=>c-1);
//   }
//   return (
//     <div>
//       <button onClick={decrease}>decrease</button>
//     </div>
//   )
// })



function App(){
  return (
    <div>
    <RecoilRoot>
      <Buttons/>
      <Counter/>
      <IsEven/>
      </RecoilRoot>
    </div>
  )
}
function Buttons(){
  const setCount=useSetRecoilState(counteratom);
  function increase(){
    setCount(c=>c+2);
  }

  function decrease(){
    setCount(c=>c-1);

  }


  return <div>
    <button onClick={increase}>increase</button>
    <button onClick={decrease}>decrease</button>
  </div>
}


function Counter(){
  const count=useRecoilValue(counteratom);
  return <div>
    {count}
  </div>
}

function IsEven(){
  const even=useRecoilValue(evenSelector);
return <div>
  {even ?  "even" :"odd"}
</div>
}
export default App
