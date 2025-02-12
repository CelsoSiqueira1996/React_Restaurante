import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { ReactNode } from 'react';

interface PaginaPadraoProps {
  children?: ReactNode;
}

export default function PaginaPadrao({ children }: PaginaPadraoProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}