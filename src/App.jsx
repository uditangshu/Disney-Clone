import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/slider'
import ProductionHouse from './components/productionHouse'
import GenreMovieList from './components/GenreMovieList'

function App() {
  
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList/>
     
    </div>
  )
}

export default App
