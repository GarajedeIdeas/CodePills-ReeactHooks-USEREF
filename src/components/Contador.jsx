import { useEffect, useRef, useState } from "react";

const Contador = () => {

    const timer = useRef(0);

    const [cont, setCont] = useState(0);

    useEffect(() => {
        timer.current = setInterval(() => setCont(cont => cont + 1), 1000)
    }, []);

    const handleClick = () => {
        clearInterval(timer.current);
        timer.current = 0;
    }

    return <div>
        <p>Cont: {cont}</p>
        <button onClick={handleClick}>PARAR!!</button>
    </div>
}

export default Contador;