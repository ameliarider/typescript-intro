import './App.css'
import { ObjectTypes } from './examples/ObjectTypes'
import { InferenceExamples } from './examples/InferenceExamples'
import { BasicTypes } from './examples/BasicTypes'
import { FunctionTypes } from './examples/FunctionTypes';

function App() {

  return (
    <>
      <div>
        <ObjectTypes />
        <InferenceExamples />
        <BasicTypes />
        <FunctionTypes />
      </div>
    </>
  )
}

export default App;
