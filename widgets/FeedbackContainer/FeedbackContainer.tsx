import { Container, FeedbackCard, Preload } from "@/components";
import { FC, useEffect, useState } from "react";
import s from "./feedbackcontainer.module.scss";
import { FeedbackResponse } from "@/types";

const FeedbackContainer: FC = () => {

  const [feedbackLoading, setFeedbackLoading] = useState<{
    isLoading: boolean;
    items: any[];
  }>({ isLoading: false, items: [] });

  useEffect(() => {
    setFeedbackLoading({ isLoading: true, items: feedbackLoading.items });
    fetch("/api/feedback/all")
      .then((j) => j.json())
      .then((response: FeedbackResponse[]) => {
        setFeedbackLoading({ isLoading: false, items: response });
      })
      .catch(() => setFeedbackLoading({ isLoading: false, items: [] }));
  }, []);

  return <Container className={s.feedbackContainer}>
    {feedbackLoading.isLoading && <Preload />}
    {feedbackLoading.items.length > 0 && !feedbackLoading.isLoading ? (
          feedbackLoading.items.map((e: FeedbackResponse) => (
            <FeedbackCard
              key={e.name.length + Math.random()}
              name={e.name}
              score={e.score}
              text={e.text}
            />
          ))
        ) : (
          <p>Ещё никто не оставлял отзывы</p>
        )}
    <FeedbackCard name={"Maxim"} score={5} text={"nice gg"} />
  </Container>;
};

export default FeedbackContainer;
