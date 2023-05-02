import { FC } from "react";
import s from "./feedbackcard.module.scss";

const FeedbackCard: FC<{
  name: string;
  score: number;
  text: string;
}> = ({ name, score, text }) => {
  return (
    <div className={s.feedbackCard}>
      <span>{score}</span>
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  );
};

export default FeedbackCard;
