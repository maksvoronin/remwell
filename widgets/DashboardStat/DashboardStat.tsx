import { FC } from "react";
import s from "./dashboardstat.module.scss";
import { useEffect, useState } from "react";

const DashboardStat: FC = () => {
  const [postCount, setPostCount] = useState<number>(0);
  const [feedbackCount, setFeedbackCount] = useState<number>(0);

  useEffect(() => {
    fetch("/api/stat")
      .then((r) => r.json())
      .then((response) => {
        setPostCount(response.blogCount);
        setFeedbackCount(response.feedbackCount);
      });
  }, []);

  return (
    <div className={s.dashboardStat}>
      <p>Постов в блоге: {postCount}</p>
      <p>Всего отзывов: {feedbackCount}</p>
    </div>
  );
};

export default DashboardStat;
