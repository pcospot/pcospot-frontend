
import "../../design/chatInput.css"
import AddImage from "./chatFunction/addImage.tsx";
import {useFileStore} from "./chatFunction/useFileStore.tsx";

export default function ChatInput() {
    const file = useFileStore((state) => state.file);

    return(
        <div className="chatInput-container">
            <input placeholder="Send a message..." />
            {console.log(file)}
            <div className="chatInput-function">
                <AddImage/>
            </div>
        </div>
    )
}