import './Favorites.css'
export default function Favorites() {
  return (
    <>
      <section className="favorite section" id="favorite">
        <div className="favorite__container container grid">
          <div className="favorite__data">
            <h2 className="section__title">DISCOVER YOUR FAVORITE FLAVORS</h2>
            <p className="favorite__description">
              Try some exotic flavors or delicious toppings. We have collected
              some delicious snack recipes from around the world for you.
            </p>
            <img
              src="./src/assets/webp/cheese.webp"
              alt="cheese img"
              className="favorite__cheese-1"
            />
            <img
              src="./src/assets/webp/cheese.webp"
              alt="cheese img"
              className="favorite__cheese-2"
            />
          </div>
          <div className="favorite__swiper">
            <div>
              <article className="favorite__article">
                <img
                  src="./src/assets/webp/favorite-chips-1.webp"
                  alt="chips img"
                  className="favorite__img"
                />

                <img
                  src="./src/assets/webp/leaf-1.webp"
                  alt="leaf img"
                  className="favorite__leaf-1"
                />
                <img
                  src="./src/assets/webp/leaf-2.webp"
                  alt="leaf img"
                  className="favorite__leaf-2"
                />
              </article>
              <article className="favorite__article">
                <img
                  src="./src/assets/webp/favorite-chips-2.webp"
                  alt="chips img"
                  className="favorite__img"
                />

                <img
                  src="./src/assets/webp/leaf-1.webp"
                  alt="leaf img"
                  className="favorite__leaf-1"
                />
                <img
                  src="./src/assets/webp/leaf-2.webp"
                  alt="leaf img"
                  className="favorite__leaf-2"
                />
              </article>
              <article className="favorite__article">
                <img
                  src="./src/assets/webp/favorite-chips-3.webp"
                  alt="chips img"
                  className="favorite__img"
                />

                <img
                  src="./src/assets/webp/leaf-1.webp"
                  alt="leaf img"
                  className="favorite__leaf-1"
                />
                <img
                  src="./src/assets/webp/leaf-2.webp"
                  alt="leaf img"
                  className="favorite__leaf-2"
                />
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
