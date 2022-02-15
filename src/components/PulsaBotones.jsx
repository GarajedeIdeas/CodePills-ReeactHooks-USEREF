import { useState, useRef } from "react";

const PulsaBotones = () => {

    // const [cont, setCont] = useState(0);
    const cont = useRef(0);

    const handleClick = (incrementa) => {
        if (incrementa) {
            cont.current++;
        } else {
            cont.current--;
        }
        console.log(`Contador: ${cont.current}`);
    }

    console.log('RENDER!!');

    return <div>
        <button onClick={() => handleClick(false)}>Decrementa</button>
        <button onClick={() => handleClick(true)}>Incrementa</button>
    </div>
}

export default PulsaBotones;