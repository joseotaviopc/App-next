import { useRouter } from "next/router";
import Layout from '../../../components/Layout';

export default function ClientePorCodigo() {
    const router = useRouter();
    
    return(
        <Layout titulo="Navegação Dinâmica">
            <div>Código: {router.query.codigo}</div>
            <div>Filial: {router.query.filial}</div>
        </Layout>
    )
}