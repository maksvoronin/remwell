import { FC, MouseEventHandler } from "react";
import s from "./feedbackcard.module.scss";

const FeedbackCard: FC<{
  name: string;
  score: number;
  text: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}> = ({ name, score, text, onClick }) => {
  return (
    <div className={s.feedbackCard} onClick={onClick}>
      <span>{score}</span>
      <h1>{name}</h1>
      <p>{text}</p>
    </div>
  );
};

export default FeedbackCard;
