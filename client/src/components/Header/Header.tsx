import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

interface HeaderProps {
  pageUrl: string;
}

const Header: React.FC<HeaderProps> = ({ pageUrl }) => {
  const handleLogout = () => {
    fetch("http://localhost:3001/api/v1/users/logout", {
      method: "GET",
      credentials: "include",
    }).then(() => window.location.reload());
  };

  const statementsUrl = pageUrl === "/statements";
  const statementMakingUrl = pageUrl === "/statement-making";
  const adminUrl = pageUrl === "/admin";

  const titleResult = statementsUrl ? (
    <h1 style={{ fontSize: 24, fontWeight: 700 }}>Заявления</h1>
  ) : statementMakingUrl ? (
    <h1 style={{ fontSize: 24, fontWeight: 700 }}>Составить заявление</h1>
  ) : adminUrl ? (
    <h1 style={{ fontSize: 24, fontWeight: 700 }}>Панель администратора</h1>
  ) : (
    ""
  );
  const ulResult = statementsUrl ? (
    <>
      <li>
        <Link to={"/statement-making"}>
          <button className={styles.makeStatement}>Составить заявление</button>
        </Link>
      </li>
      <li>
        <Link to={"/"}>
          <button className={styles.exit} onClick={handleLogout}>
            Выйти
          </button>
        </Link>
      </li>
    </>
  ) : statementMakingUrl ? (
    <>
      <li>
        <Link to={"/statements"}>Вернуться обратно</Link>
      </li>
      <Link to={"/"}>
        <button className={styles.exit} onClick={handleLogout}>
          Выйти
        </button>
      </Link>
    </>
  ) : adminUrl ? (
    <Link to={"/"}>
      <button className={styles.exit} onClick={handleLogout}>
        Выйти
      </button>
    </Link>
  ) : (
    ""
  );

  return (
    <header>
      <div className={styles.body}>
        {titleResult}
        <nav>
          <ul className={styles.list}>{ulResult}</ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
