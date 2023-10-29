import './App.css'
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Datas from "./data.js";



function App() {

  const passedData = Datas.map( data => {
    return <Card img={data.coverImg} rating={data.stats.rating} reviewCount={data.stats.reviewCount} country={data.location} title={data.title} price={data.price} />
  })
  // <Hero />
  return (
    <div className="main--div">
      <Navbar />
      {passedData}
    </div>
  )
}

export default App
