import "./App.css";
import { Header } from "./components/Header/Header.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { HobbyList } from "./components/HobbyList/HobbyList.tsx";


function App() {
  return (
    <div className="app">
      <Header title="My Hobby" />
      <main className="main">
         <HobbyList />
      </main>
      <Footer developerName="Andjela" />
    </div>
  );
}

export default App;
