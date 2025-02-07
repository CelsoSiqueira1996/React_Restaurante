import { useNavigate } from 'react-router-dom';
import styles from './NaoEncontrada.module.scss';
import { ReactComponent as NotFoundImage } from  'assets/not_found.svg';
import classNames from 'classnames';
import stylesTema from 'styles/Tema.module.scss';

export default function NaoEncontrada() {
  const navigate = useNavigate();

  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={() => navigate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFoundImage />
    </div>
  );
}