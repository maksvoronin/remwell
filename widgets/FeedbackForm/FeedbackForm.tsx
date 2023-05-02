import { Container } from "@/components";
import { FC, useState } from "react";
import s from "./feedbackform.module.scss";

const FeedbackForm: FC = () => {
  const [text, setText] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [score, setScore] = useState<number>(0);

  const sendFeedback = () => {
    if (!name.trim()) return alert("Укажите Ваше имя");
    if (!text.trim()) return alert("Напишите свой отзыв");
    if (score < 1 || score > 5) return alert("Оцените нашу работу");
    fetch("/api/feedback/create", {
      method: "POST",
      body: JSON.stringify({ name, text, score }),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(() => {
        alert("Отзыв успешно опубликован!");
        window.location.reload();
      })
      .catch(() => {
        alert("Произошла ошибка при создании отзыва");
      });
  };

  return (
    <Container className={s.feedbackForm}>
      <h1>Отзывы</h1>
      <p>Оставьте свой отзыв о нашей работе!</p>
      <div className={s.form}>
        <textarea placeholder="Напишите свою оценку проделанной работе" onChange={({ target }) => setText(target.value)} value={text} />
        <div className={s.contacts}>
          <input placeholder="Ваше имя" onChange={({ target }) => setName(target.value)} value={name} />
          <select onChange={({ target }) => setScore(Number(target.value))} value={score}>
            <option value={0}>Поставьте оценку</option>
            <option value={1}>1 - Работа выполнена ужасно</option>
            <option value={2}>2 - Работа выполнена плохо</option>
            <option value={3}>3 - Работа выполнена удовлетворительно</option>
            <option value={4}>4 - Работа выполнена хорошо</option>
            <option value={5}>5 - Работа выполнена на отлично</option>
          </select>
          <button onClick={sendFeedback}>Отправить</button>
        </div>
      </div>
    </Container>
  );
};

export default FeedbackForm;
