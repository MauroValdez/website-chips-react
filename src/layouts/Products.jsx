import Product from '../components/product'
import './Products.css'

function Products() {
  return (
    <>
      <section className="products section" id="products">
        <h2 className="section__title">BEST SELLING PRODUCT</h2>
        <div className="products__container container">
          <div className="products__content grid">
            <Product
              img={'product-chips-1.webp'}
              title={'Crab'}
              subtitle={'Chips'}
              price={'$ 8'}
            />
            <Product
              img={'product-chips-2.webp'}
              title={'Cheese'}
              subtitle={'Chips'}
              price={'$ 5'}
            />
            <Product
              img={'product-chips-3.webp'}
              title={'BBQ'}
              subtitle={'Chips'}
              price={'$ 6'}
            />
            <Product
              img={'product-chips-4.webp'}
              title={'Hot'}
              subtitle={'Chips'}
              price={'$ 5'}
            />
            <Product
              img={'product-chips-5.webp'}
              title={'Mix'}
              subtitle={'Chips'}
              price={'$ 10'}
            />
          </div>
          <img
            src="./src/assets/webp/crab.webp"
            alt="crab img"
            className="products__crab"
          />
          <img
            src="./src/assets/webp/hamburger.webp"
            alt="hamburger img"
            className="products__hamburger"
          />
          <img
            src="./src/assets/webp/cheese.webp"
            alt=""
            className="products__cheese"
          />
        </div>
      </section>
    </>
  )
}

export default Products
