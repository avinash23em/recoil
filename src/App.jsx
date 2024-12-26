import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot, atom , useRecoilValue, useSetRecoilState} from 'recoil'
import { counteratom } from './Store/atoms/Counter'


function App() {
  

  return (
    <>
      <RecoilRoot>
           <Counter/>
      </RecoilRoot>
    </>
  )
}
function Counter(){
return (
  <div>
    <Currcounter/>
    <Increase/>
    <Decrease/>
  </div>
)
}
function Currcounter(){
const count=useRecoilValue(counteratom);
return (
  <div>
    count {count}
  </div>
)
}

function Increase(){
  const setCount=useSetRecoilState(counteratom);
  function increase(){
setCount(c=>c+1);
  }
  return (
    <div>
      <button onClick={increase}>increase</button>
    </div>
  )
}

function Decrease(){
  const setCount=useSetRecoilState(counteratom);
  function decrease(){
setCount(c=>c-1);
  }
  return (
    <div>
      <button onClick={decrease}>decrease</button>
    </div>
  )
}


export default App
