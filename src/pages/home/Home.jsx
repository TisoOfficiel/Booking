import Featured from "../../components/featured/Featured"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import PropertyList from "../../components/propertyLIst/PropertyList"
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties"
import "./home.css"

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Header />
    <div className="homeContainer">
      <Featured />
      <h1 className="homeTitle">Browse by property type</h1>
      <PropertyList />
      <h1 className="homeTitle">Homes guest love</h1>
      <FeaturedProperties />
    </div>
  </div>
  )
}

export default Home