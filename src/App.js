import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";

import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Card
        img="swimmer.jpg"
        rating={5}
        reviewCount={7}
        country={"DE"}
        title={"Life Lessons with Katie Zaferes"}
        price={136}
      />
    </div>
  );
}
