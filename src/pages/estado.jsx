import { useState } from "react";
import Layout from '../components/Layout';

export default function Estado() {
    const [num, setNum] = useState(0); // React Hooks
    
    function increment() {
        setNum(num + 1);
    }

    return(
        <Layout titulo="Componente com estado">
            <h1>{num}</h1>
            <button onClick={increment}>Incrementar</button>
        </Layout>
    )
}