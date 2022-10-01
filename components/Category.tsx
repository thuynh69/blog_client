import styles from '../styles/components/Category.module.scss';

export const Category = ({ name }) => {
  return <p className={styles.category}>{name}</p>;
};
