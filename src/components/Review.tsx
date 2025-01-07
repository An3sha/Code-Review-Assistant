import MarkdownPreview from '@uiw/react-markdown-preview';
import Loader from './Loader';

const Review = ({review, isGenerating}:{review: string, isGenerating: boolean}) => {
    return (
        <div className="h-full w-6/12 relative">
            {isGenerating ? (<Loader />) : (<MarkdownPreview
                source={review}
                style={{
                    fontSize: '30px',
                    height: "100vh"
                }}
            
            />)}
            
    </div>
)
}

export default Review