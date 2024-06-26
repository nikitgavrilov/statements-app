import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DEFAULT_VALUES = {
  login: "",
  password: "",
  fullName: "",
  tel: "",
  email: "",
};

const RegPage: React.FC = () => {
  const [values, setValues] = React.useState(DEFAULT_VALUES);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch("http://localhost:3001/api/v1/users/reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Произошла ошибка при отправке запроса");
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === "Success") {
          navigate("/login");
        } else {
          alert(data.status);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main>
      <section>
        <div className={"form__body"}>
          <form onSubmit={handleSubmit} className={"form"}>
            <h2 className={"title"} style={{ marginBottom: 15 }}>
              Создать аккаунт
            </h2>
            <div className={"input-field"}>
              <h3 className="sub-title">Логин</h3>
              <input
                value={values.login}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValues({ ...values, login: e.target.value })}
                required
                type="text"
              />
            </div>
            <div className={"input-field"}>
              <h3 className="sub-title">Пароль</h3>
              <input
                value={values.password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValues({ ...values, password: e.target.value })}
                required
                type="password"
                style={{ marginBottom: 5 }}
              />
              <p>Пароль должен быть не менее 6 символов</p>
            </div>
            <div className={"input-field"}>
              <h3 className="sub-title">ФИО</h3>
              <input
                value={values.fullName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValues({ ...values, fullName: e.target.value })}
                required
                type="text"
              />
            </div>
            <div className={"input-field"}>
              <h3 className="sub-title">Телефон</h3>
              <input
                value={values.tel}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValues({ ...values, tel: e.target.value })}
                required
                type="tel"
              />
            </div>
            <div className={"input-field"}>
              <h3 className="sub-title">Email</h3>
              <input
                value={values.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValues({ ...values, email: e.target.value })}
                required
                type="email"
              />
            </div>
            <button type="submit" className={"submit-btn"}>
              Создать аккаунт
            </button>
            <hr />
            <div className={"redirect"} style={{ display: "flex", justifyContent: "center" }}>
              <p className={"redirect__link"}>
                <Link to={"/login"}>Уже есть аккаунт?</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default RegPage;
