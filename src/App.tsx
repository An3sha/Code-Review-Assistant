import "./App.css"
import Editor from "./components/Editor"
// A simple code reviewer app
// we will have two columns layout
// where we canw rite code
// AI will give review on our code => PR review

function App() {
  return (
  <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Editor />
       
   
    </div>
  )
}

export default App