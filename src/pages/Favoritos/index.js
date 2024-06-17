import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos() {
    return(
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='2' titulo='Unicórnio' capa='https://i.pinimg.com/564x/09/d3/ce/09d3ce82f765a1783cf69d9704857082.jpg' />
            </section>
        </>
    );
}

export default Favoritos;
