import { Container } from "@/components";
import { FC } from "react";
import s from "./feedbackform.module.scss";

const FeedbackForm: FC = () => {
  return <Container className={s.feedbackForm}>
    <h1>Отзывы</h1>
    <p>Оставьте свой отзыв о нашей работе!</p>
    <div className={s.form}>
      <textarea placeholder="Напишите свою оценку проделанной работе" />
      <div className={s.contacts}>
        <input placeholder="Ваше имя" />
        <select>
          <option value="">Поставьте оценку</option>
        </select>
        <button>Отправить</button>
      </div>
    </div>
  </Container>
}

export default FeedbackForm;