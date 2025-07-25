import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ObjectTypes } from './examples/ObjectTypes'
import { BasicTypes } from './examples/BasicTypes'

function App() {

  return (
    <>
      <div>
        <ObjectTypes />
        <BasicTypes />
      </div>
    </>
  )
}

export default App
