import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/titan-one'
import './App.css'

import Header from './layouts/Header'
import Home from './layouts/Home'
import Favorites from './layouts/Favorites'
import Care from './layouts/Care'
import Banner from './layouts/Banner'
import Products from './layouts/Products'
import Contact from './layouts/Contact'
function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <Favorites />
                <Care />
                <Banner />
                <Products />
                <Contact />
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
