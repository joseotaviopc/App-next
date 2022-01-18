import Layout from '../components/Layout';
import styles from '../styles/Estilocss.module.css';

export default function Estilocss() {
    return (
        <Layout titulo="Estilização">
            <div className={styles.roxo}>
                <h1>Estilo CSS modulos</h1>
            </div>
        </Layout>
    )
}