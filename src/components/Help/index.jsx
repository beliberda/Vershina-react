import React from "react";
import "./style.css";

import MyButton from "../UI/button/MyButton";
import { ReactComponent as Up } from "../../assets/img/up.svg";

export default function Help() {
  return (
    <section className="help">
      <div className="help__wrapper container">
        <h2 className="h2">Помощь проекту</h2>

        <div className="help__title">Зачем мы это делаем?</div>

        <p className="help__description">
          Мы хотим изменить качество жизни в Артемовском городском округе.
          Сформировать постоянный местный источник финансирования социальных
          проектов некоммерческих организаций и социальных инициатив местных
          жителей. <br />
          Помощь нам – это проявить активность по решению собственных проблем
          силами некоммерческого сектора Артемовского городского округа
        </p>

        <MyButton>Пожертвовать</MyButton>

        {/* <button className='button-up'>
          <Up />
        </button> */}
      </div>
      <div className="help__wrapper_768px container">
        <h2 className="h2">
          Название компании помощи краткое описание в одно предложение
        </h2>

        <p className="help__description">
          Небольшой текст, кратко описываю- щий в чём заключается проект. Кому
          пойдут эти деньги. чего хочется достичь. Какая сумма вообще нужна.
        </p>
        <p className="help__description">
          Небольшой текст, кратко описываю- щий в чём заключается проект. Кому
          пойдут эти деньги. чего хочется достичь. Какая сумма вообще нужна.
        </p>
        <MyButton>Помочь людям</MyButton>
      </div>
    </section>
  );
}
