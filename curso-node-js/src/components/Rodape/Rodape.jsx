import style from './Rodape.module.css';

const Rodape = (props) => {
    // Destruturação de props
    const {usuario} = props;
    return (
        <footer className={style.Rodape}>
            React Básico - 2025 - {usuario}
        </footer>
    );
}

export {Rodape};