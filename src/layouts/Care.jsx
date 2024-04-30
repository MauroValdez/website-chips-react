import CareImg from '/./src/assets/webp/care-chips.webp'
import './Care.css'
export default function Care() {
  return (
    <>
      <section className="care section" id="care">
        <h2 className="section__title">ENJOY AND TAKE CARE OF YOUR HEALTH</h2>
        <div className="care__container container grid">
          <ul className="care__list">
            <li className="care__item">
              <p>
                The potatoes that are made into snacks are grown and harvested
                and are 100% organic.
              </p>
            </li>
            <li className="care__item">
              <p>
                We fry the fries with vegetable and natural oil for good care.
              </p>
            </li>
            <li className="care__item">
              <p>
                The potatoes are not processed, once cleaned they are cooked
                without preservatives.
              </p>
            </li>
            <li className="care__item">
              <p>They contain fewer calories and less fat for good health.</p>
            </li>
          </ul>
          <img
            src={CareImg}
            alt="care chips img"
            className="care__img"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}
