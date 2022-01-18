import { useState } from "react";
import Layout from "../components/Layout";

export default function Integracao(){
    const [cliente, setCliente] = useState({});
    const [codigo, setCodigo] = useState(1);

    // Usando Promises
    // function obterCliente() {
    //     fetch(`http://localhost:3000/api/clients/${codigo}`)
    //         .then(resp => resp.json())
    //         .then(dados => setCliente(dados));
    // }

    // Usando código sícrono -> async/await
    async function obterCliente() {
        const resp = await fetch(`https://app-next-seven.vercel.app/api/clients/${codigo}`);
        // https://app-next-seven.vercel.app/
        const dados = await resp.json();
        setCliente(dados);
    }
    
    return (
        <Layout>
            <div>
                <input type="number" value={codigo} onChange={e => setCodigo(e.target.value)}/>
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
};