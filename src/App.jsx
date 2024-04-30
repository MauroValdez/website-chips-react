import '@fontsource/poppins/400.css'
import '@fontsource/poppins/600.css'
import '@fontsource/titan-one'
import './App.css'
import './layouts/ScrollBar.css'

import Header from './layouts/Header'
import Home from './layouts/Home'
import Favorites from './layouts/Favorites'
import Care from './layouts/Care'
import Banner from './layouts/Banner'
import Products from './layouts/Products'
import Contact from './layouts/Contact'
import Footer from './layouts/Footer'
import ScrollUp from './layouts/ScrollUp'
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
                <Footer />
                <ScrollUp />
            </main>
        </>
    )
}

export default App
