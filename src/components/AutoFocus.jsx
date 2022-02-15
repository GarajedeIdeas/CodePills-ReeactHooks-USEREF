import { useRef } from "react";

const AutoFocus = () => {

    const inputRef = useRef();

    function onFocus() {
        inputRef.current.focus();
        inputRef.current.style.border = '5px solid red';
    }

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={onFocus}>FOCUS!</button>
        </>
    );
}

export default AutoFocus;