import React, {useRef, useImperativeHandle, forwardRef} from 'react'
import './progressBarCircle.css'
interface IProps {
    width?: number,
    heigth?: number,
    porcentagem?: number,
    childRef: any
} 

const setPx  = (porcentagem: number, circleRef: any, divRef: any) => {
    
    const radius = circleRef.current.getAttribute('r');
    const piCircle = Math.PI * parseFloat(radius) *2;
    if (porcentagem < 0) { porcentagem = 0;}
    if (porcentagem > 100) { porcentagem = 100;}

    const pct = ((100-porcentagem)/100)*piCircle;
     
    circleRef.current.style.strokeDashoffset = pct;

} 

const  ProgressBarCircle = forwardRef((props: any, ref: any) => {
    const circleRef = useRef(null);
    const divRef = useRef(null);

    useImperativeHandle(ref, () => {
        setPx(props.porcentagem, circleRef, divRef)
     });

    return(
        <div id="cont" data-pct="100" ref={divRef}>
            <svg id="svg" width="200" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
                <circle ref={circleRef} id="bar" r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset="0"></circle>
            </svg>
        </div>
    )
})

export default ProgressBarCircle;