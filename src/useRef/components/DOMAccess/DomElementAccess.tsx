import React, { useEffect, useRef } from 'react'

const DomElementAccess: React.FC = () => {
    const h1Ref = useRef<HTMLHeadingElement | null>(null);
    const pRef = useRef<HTMLParagraphElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (h1Ref.current) {
            h1Ref.current.innerText = 'Hello, <h1> useRef!'
        }
        if (pRef.current) {
            pRef.current.innerText = "Hello, <p> useRef! "
        }
    }, [])
    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.value = 'Focused via useref!'
        }
    }

    const updateUI = () => {
        if (pRef.current) {
            pRef.current.style.backgroundColor = 'lightblue';
            pRef.current.style.padding = '20px';
            pRef.current.style.color = 'black';
        }
    };


    return (
        <div>
            <h1 ref={h1Ref} >Initial h1 content</h1>
            <p ref={pRef} >Update UI</p>
            <button onClick={updateUI} >Update UI</button>
            <br />
            <br />
            <input ref={inputRef} placeholder='Type Here' />
            <button onClick={focusInput} >Focus Input tag</button>
        </div>
    )
}

export default DomElementAccess
