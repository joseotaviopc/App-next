import Link from 'next/link';
import styles from '../styles/Layout.module.css';

export default function Layout(props){
    return(
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h2>{props.titulo ?? 'App'}</h2>
                <div>
                    <Link href="/">App</Link>
                    <Link href="/home">Home</Link>
                    <Link href="/jsx">Jsx</Link>
                    <Link href="/estilocss">Estilo</Link>
                    <Link href="/cliente/RJ/124578">Cliente</Link>
                    <Link href="/estado">Estado</Link>
                    <Link href="/integracao">Integração</Link>
                </div>
            </div>
            <div className={styles.conteudo}>
                {props.children}
            </div>
        </div>
    )
}