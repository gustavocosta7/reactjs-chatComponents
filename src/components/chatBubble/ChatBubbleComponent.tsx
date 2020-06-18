import React from 'react'


const ChatBubbleComponent = (props: { width?: any; heigth?: any; }) => {
    const {
        width,
        heigth
    } = props;

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


    return(
        <div>
            <svg height="50" width="326px">
                <defs>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={gradientOne} />
                    <stop offset="100%" style={gradientTwo} />
                    </linearGradient>
                </defs>
                <g>
                    <rect width="100%" height="100%" rx="10" ry="10" fill="url(#grad3)" style={rectBubble}>
                    </rect>
                    <text x="50%" y="50%" style={textBubble} className="balao" dominant-baseline="middle" text-anchor="middle">
                        <tspan>
                            Olá pessoas como vão vocÊs
                        </tspan>
                    </text>
                </g>
            </svg>
        </div>
    )
}
export default ChatBubbleComponent;