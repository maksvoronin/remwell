import { AdminLayout, FeedbackCard, Preload } from "@/components";
import { FeedbackResponse } from "@/types";
import { useEffect, useState } from "react";

export default function Feedback() {
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

  const deleteFeedback = (id: string, name: string) => {
    if (confirm(`Удалить отзыв от ${name}?`)) {
      fetch("/api/feedback/delete", {
        method: "DELETE",
        body: JSON.stringify({
          id,
          token: window.localStorage.token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((response) => {
          if (response.code) return alert(response.text);

          fetch("/api/feedback/all")
            .then((j) => j.json())
            .then((response: FeedbackResponse[]) => {
              setFeedbackLoading({ isLoading: false, items: response });
            })
            .catch(() => setFeedbackLoading({ isLoading: false, items: [] }));
        });
    }
  };

  return (
    <AdminLayout title="Удаление отзывов">
      <h1>Удаление отзывов</h1>
      {feedbackLoading.isLoading ? (
        <Preload />
      ) : (
        <p style={{ marginTop: 20 }}>Нажмите на пост, чтобы удалить его</p>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 20,
          marginTop: 20,
        }}
      >
        {feedbackLoading.items.length > 0 && !feedbackLoading.isLoading ? (
          feedbackLoading.items.map((e: FeedbackResponse) => (
            <FeedbackCard
              key={e.name.length + Math.random()}
              name={e.name}
              score={e.score}
              text={e.text}
              onClick={() => deleteFeedback(e._id, e.name)}
            />
          ))
        ) : (
          <p>Ещё никто не оставлял отзывы</p>
        )}
      </div>
    </AdminLayout>
  );
}
