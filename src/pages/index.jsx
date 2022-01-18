import Layout from '../components/Layout';
import styles from '../styles/Estilocss.module.css';

export default function Home() {
  return (
      <Layout titulo="App com Next.js">
          <div className={styles.roxo}>
              <h1>Estilo CSS modulos</h1>
          </div>
      </Layout>
    )
}