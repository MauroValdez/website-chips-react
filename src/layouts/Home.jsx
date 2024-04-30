import './Home.css'
import Meat from '/src/assets/webp/meat.webp'
import HomeChip from '/src/assets/webp/home-chips.webp'
import Chips1 from '/src/assets/webp/chips-1.webp'
import Chips2 from '/src/assets/webp/chips-2.webp'
import Chips3 from '/src/assets/webp/chips-3.webp'
import Tomato1 from '/src/assets/webp/tomato-1.webp'
import Tomato2 from '/src/assets/webp/tomato-2.webp'
import Leaf3 from '/src/assets/webp/leaf-3.webp'

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">SNACK WITH NO LIMITS</h1>
          <p className="home__description">
            When you are hungry and do not have time to cook, snacks are the
            perfect solution, always prepare for midday hunger.
          </p>
          <img src={Meat} alt="meat img" className="home__meat" />
          <div className="home__buttons">
            <a href="#" className="button">
              Snack Now
            </a>
            <a href="#" className="button button__ghost">
              Buy Now
            </a>
          </div>
        </div>
        <div className="home__images">
          <div className="home__circle">
            <div className="home__subcircle"></div>
          </div>
          <img src={HomeChip} alt="chips img" className="home__img" />

          <img src={Chips1} alt="more chips" className="home__chips-1" />
          <img src={Chips2} alt="more chips" className="home__chips-2" />
          <img src={Chips3} alt="more chips" className="home__chips-3" />
          <img src={Tomato1} alt="more chips" className="home__tomato-1" />
          <img src={Tomato2} alt="more chips" className="home__tomato-2" />
          <img src={Leaf3} alt="more chips" className="home__leaf-3" />
        </div>
      </div>
    </section>
  )
}

export default Home
