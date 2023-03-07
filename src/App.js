import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./App.css";

export default function App() {
  const mappedData = data.map((dataEle) => {
    return (
      <Card
        key={dataEle.title}
        img={dataEle.coverImg}
        rating={dataEle.stats.rating}
        reviewCount={dataEle.stats.reviewCount}
        location={dataEle.location}
        title={dataEle.title}
        price={dataEle.price}
        openSpots={dataEle.openSpots}
      />
    );
  });

  return (
    <div className="app-container">
      <Header />
      <Hero />
      <section className="card--container">{mappedData}</section>
    </div>
  );
}
