import './Home.css'

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
          <img
            src="./src/assets/webp/meat.webp"
            alt="meat img"
            className="home__meat"
          />
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
          <img
            src="./src/assets/webp/home-chips.webp"
            alt="chips img"
            className="home__img"
          />

          <img
            src="./src/assets/webp/chips-1.webp"
            alt="more chips"
            className="home__chips-1"
          />
          <img
            src="./src/assets/webp/chips-2.webp"
            alt="more chips"
            className="home__chips-2"
          />
          <img
            src="./src/assets/webp/chips-3.webp"
            alt="more chips"
            className="home__chips-3"
          />
          <img
            src="./src/assets/webp/tomato-1.webp"
            alt="more chips"
            className="home__tomato-1"
          />
          <img
            src="./src/assets/webp/tomato-2.webp"
            alt="more chips"
            className="home__tomato-2"
          />
          <img
            src="./src/assets/webp/leaf-3.webp"
            alt="more chips"
            className="home__leaf-3"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
