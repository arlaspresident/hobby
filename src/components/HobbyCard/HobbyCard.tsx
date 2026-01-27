import "./HobbyCard.css";
import type { HobbyItem } from "../../data/hobbies";

type HobbyCardProps = {
  item: HobbyItem;
};

export function HobbyCard({ item }: HobbyCardProps) {
  return (
    <article className="card">
      <h3 className="card-title">{item.name}</h3>

      <p className="card-meta">
        Duration: <strong>{item.minutes}</strong> min
      </p>

      {/*conditional operator*/}
      <p className="card-status">
        {item.doneThisWeek ? "Done this week" : "Not done yet"}
      </p>
    </article>
  );
}
