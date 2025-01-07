import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Editor = () => {
    return <div className="h-full w-6/12 relative">
        <CodeMirror
            minHeight="100vh"
            value="Hello World"
            onChange={() => { }}
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            style={{
                fontSize: "30px"
            }}
        
        />

    </div>
}

export default Editor;