import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/titan-one'
import './App.css'

import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
      <section className="section"></section>
      <section className="section"></section>
      <section className="section"></section>
      <section className="section"></section>
      <section className="section"></section>
    </>
  )
}

export default App
