import { useEffect, useRef, useState } from "react";

const MensajePrevio = () => {

    const [mensaje, setMensaje] = useState('');
    const prevMensaje = useRef('');

    useEffect(() => {
        prevMensaje.current = mensaje;
    }, [mensaje]);

    const modificaMensaje = (e) => {
        console.log('Modifica mensaje');
        setMensaje(e.target.value);
    }

    return (
        <>
            <input type="text" onChange={modificaMensaje} />
            <p>Mensaje: {mensaje}</p>
            <p>Mensaje Previo: {prevMensaje.current}</p>
        </>
    );
}

export default MensajePrevio;