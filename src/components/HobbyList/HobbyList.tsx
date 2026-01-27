import "./HobbyList.css";
import { hobbies } from "../../data/hobbies";
import { HobbyCard } from "../HobbyCard/HobbyCard";

export function HobbyList() {
  return (
    <section className="list">
      <h2 className="list-title">This week</h2>

      <div className="grid">
        {hobbies.map((item) => (
          <HobbyCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
