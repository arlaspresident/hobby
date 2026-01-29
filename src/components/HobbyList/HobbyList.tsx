import "./HobbyList.css";
import { hobbies } from "../../data/hobbies";
import { HobbyCard } from "../HobbyCard/HobbyCard";

export function HobbyList() {
  return (
    <section className="list">
        {/*rubrik för listan som visar aktiviteter*/}
      <h2 className="list-title">This week</h2>

      <div className="grid">
        {/*itererar över arrayen med hobbies och skapar en komponent per objekt*/}
        {hobbies.map((item) => (
          <HobbyCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
