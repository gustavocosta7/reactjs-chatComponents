import React from 'react'
import ChatBubbleHandler from '../../../util/ChatBubbleHandler';

interface IProps {
    width?: number,
    heigth?: number,
    text?: string
} 

const ChatBubbleComponent =  ({width = 30, heigth = 30, text = ''}: IProps) => {

    const textBubble = {
        fill: 'white'
    } as React.CSSProperties;

    const rectBubble = {
        strokeWidth: 3
    } as React.CSSProperties;

    const gradientOne = {
        stopColor: 'rgb(39,122,254)',
        stopOpacity: 1
    } as React.CSSProperties;

    const gradientTwo = {
        stopColor: 'rgb(16,144,255)',
        stopOpacity: 1
    } as React.CSSProperties;
    
    const textSizePx = ChatBubbleHandler.getMessageSizeInPx(text+"")
    let  maxSizeBallon = textSizePx + width ;

    return(
        <div>
            <svg height={heigth} width={maxSizeBallon}>
                <defs>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={gradientOne} />
                    <stop offset="100%" style={gradientTwo} />
                    </linearGradient>
                </defs>
                <g>
                    <rect width="100%" height="100%" rx="10" ry="10" fill="url(#grad3)" style={rectBubble}>
                    </rect>
                    <text x="50%" y="50%" style={textBubble} className="balao" dominantBaseline="middle" textAnchor="middle">
                        <tspan>
                            {text}
                        </tspan>
                    </text>
                </g>
            </svg>
        </div>
    )
}
export default ChatBubbleComponent;