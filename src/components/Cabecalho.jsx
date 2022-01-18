export default function Cabecalho(props) {
    // props é usado somente para leitura
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}