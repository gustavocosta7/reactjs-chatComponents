interface SelectProtected {
    readonly spanElement: HTMLSpanElement;
}

export default class ChatBubbleHandler {
    static getMessageSizeInPx(text: string): number {
        const selectProtected: SelectProtected = {
            spanElement: document.createElement("span")
        };
        const {spanElement} = selectProtected;
        spanElement.innerText = text;

        document.body.appendChild(spanElement);
        const width = spanElement.offsetWidth;
        
        if (spanElement.parentNode) {
            spanElement.parentNode.removeChild(spanElement)
        }

        return width
        
    }
}