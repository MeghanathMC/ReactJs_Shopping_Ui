import React,{useState} from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Collection from "../components/Collection";
import Footer from "../components/Footer";
import {Gents,Ladies} from '../data'
import Women from "../components/Women";
const MainPage = () => {
  // console.log(Gents);
  const [gentsFashion,setGentsFashion] = useState(Gents);
  // console.log(Gents);
  const[ladiesFashion,setLadiesFashion]=useState(Ladies);
  console.log(Ladies);
  return (
    <div>
      <Header />
      <Banner />
      <Collection gentsFashion={gentsFashion} />
      <Women ladiesfashion={ladiesFashion}/>
      <Footer />
    </div>
  );
};

export default MainPage;
