import { useNavigate, useParams } from 'react-router-dom';
import styles from './Prato.module.scss';
import PaginaPadrao from 'components/PaginaPadrao';
import NaoEncontrada from 'pages/NaoEncontrada';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import { useEffect } from 'react';


export default function Prato() {
  const { id } = useParams();
  const pratoSelecionado = cardapio.find((prato) => prato.id === Number(id));
  const navigate = useNavigate();
  // const { state } = useLocation();
  // const { prato } = state as { prato: typeof cardapio[0]};

  useEffect(() => {
    window.scrollTo( 0, 0);
  }, []);

  return (
    (pratoSelecionado)
      ? <PaginaPadrao>
        <button className={styles.voltar} onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
        <section className={styles.container}>
          <h1 className={styles.titulo}>
            {pratoSelecionado.title}
          </h1>
          <div className={styles.imagem}>
            <img src={pratoSelecionado.photo} alt={pratoSelecionado.title} />
          </div>
          <div className={styles.conteudo}>
            <p className={styles.conteudo__descricao}>
              {pratoSelecionado.description}
            </p>
            <TagsPrato {...pratoSelecionado} />
          </div>
        </section>
      </PaginaPadrao>
      : <NaoEncontrada />
  );
}