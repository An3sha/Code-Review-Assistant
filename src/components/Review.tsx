import MarkdownPreview from '@uiw/react-markdown-preview';

const Review = () => {
    return (
        <div className="h-full w-6/12 relative">
            <MarkdownPreview
                source={"# Review would be here"}
                style={{
                    fontSize: '30px',
                    height: "100vh"
                }}
            
            />
    </div>
)
}

export default Review