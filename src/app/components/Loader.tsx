// src/app/components/Loader.tsx
import styles from './css/Loader.module.css';

interface LoaderProps {
  height?: string; // Optional height prop
}

export default function Loader({ height = '100vh' }: LoaderProps) {
  return (
    <div className={styles.loaderContainer} style={{ height }}>
      <div className={styles.loader}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
