import Link from 'next/link'
import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Voluntarly</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Voluntariados Activos</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Añadir voluntariado</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
