import Navegador from "../components/Navegador";
import Layout from "../components/Layout";

export default function Home(){
    return(
        <Layout titulo="Navegação">
            <div>
                <Navegador texto="Home" destino="/home" />
                <Navegador texto="Jsx" destino="/jsx" />
                <Navegador texto="Estilo Css" destino="/estilocss" />
            </div>
        </Layout>
    )
}