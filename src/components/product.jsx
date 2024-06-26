import PropTypes from 'prop-types'

function Product({ img, title, subtitle, price }) {
  return (
    <>
      <article className="products__card">
        <img
          src={img}
          alt="product chip img"
          className="products__img"
        />

        <span className="products__subtitle">{title}</span>
        <h3 className="products__title">{subtitle}</h3>
        <span className="products__price">{price}</span>

        <button className="products__button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M12.5 21H8.574a3 3 0 0 1-2.965-2.544l-1.255-8.152A2 2 0 0 1 6.331 8H17.67a2 2 0 0 1 1.977 2.304l-.263 1.708M16 19h6m-3-3v6" />
              <path d="M9 11V6a3 3 0 0 1 6 0v5" />
            </g>
          </svg>
        </button>
      </article>
    </>
  )
}
Product.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}

export default Product
