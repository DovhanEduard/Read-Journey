import { Link } from 'react-router';
import css from './FunctionalityDescription.module.css';

const FunctionalityDescription = () => {
  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Start your workout</h2>

      <ul className={css.list}>
        <li className={css.listItem}>
          <div className={css.itemNumber}>1</div>
          <p className={css.itemText}>
            Create a personal library:&nbsp;
            <span className={css.accentColor}>
              add the books you intend to read to it.
            </span>
          </p>
        </li>

        <li className={css.listItem}>
          <div className={css.itemNumber}>2</div>
          <p className={css.itemText}>
            Create your first workout:&nbsp;
            <span className={css.accentColor}>
              define a goal, choose a period, start training.
            </span>
          </p>
        </li>
      </ul>

      <Link className={css.link} to="/library">
        My library
      </Link>
    </div>
  );
};

export default FunctionalityDescription;
