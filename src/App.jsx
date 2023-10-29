import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx"
import Card from "./components/Card";
import Datas from "./data.js";



function App() {

  const passedData = Datas.map( data => {
    return <Card key={data.id} img={data.coverImg} rating={data.stats.rating} reviewCount={data.stats.reviewCount} country={data.location} title={data.title} price={data.price} badge={data.openSpots} />
  })
 
  return (
    <div className="main--div">
      <Navbar />
      {/* <Hero /> */}
      <section className='card-list'>
      {passedData}
      </section>
    
    </div>
  )
}

export default App
