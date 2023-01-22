import React from 'react'
import AboutEco from '../components/old/abouteco'
import Sectionthird from '../components/old/section3'
import Category from '../components/old/category'
import Banner from '../components/old/banner'
import FeturedProducts from '../components/product/feturedProducts'
import dynamic from "next/dynamic";
import {GridLayout} from "../components/commonComponent/features";
import Marque from "../components/commonComponent/marque";
const FamilyComponent = dynamic(() => import("../components/review/review"), { ssr: false })



export default function Index() {
  return (

    <>
      <Banner />
      <Marque/>
      <Category />
      <Sectionthird />
      <GridLayout/>
      <AboutEco />
      {/*<FeturedProducts />*/}
      <FamilyComponent />
    </>
  )
}
