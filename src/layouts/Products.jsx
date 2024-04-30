import Product from '../components/product'
import './Products.css'

import Crab1 from '/src/assets/webp/crab.webp'
import Hamburger from '/src/assets/webp/hamburger.webp'
import Cheese from '/src/assets/webp/cheese.webp'
import ProductChip1 from '/src/assets/webp/product-chips-1.webp'
import ProductChip2 from '/src/assets/webp/product-chips-2.webp'
import ProductChip3 from '/src/assets/webp/product-chips-3.webp'
import ProductChip4 from '/src/assets/webp/product-chips-4.webp'
import ProductChip5 from '/src/assets/webp/product-chips-5.webp'

function Products() {
  return (
    <>
      <section className="products section" id="products">
        <h2 className="section__title">BEST SELLING PRODUCT</h2>
        <div className="products__container container">
          <div className="products__content grid">
            <Product
              img={ProductChip1}
              title={'Crab'}
              subtitle={'Chips'}
              price={'$ 8'}
            />
            <Product
              img={ProductChip2}
              title={'Cheese'}
              subtitle={'Chips'}
              price={'$ 5'}
            />
            <Product
              img={ProductChip3}
              title={'BBQ'}
              subtitle={'Chips'}
              price={'$ 6'}
            />
            <Product
              img={ProductChip4}
              title={'Hot'}
              subtitle={'Chips'}
              price={'$ 5'}
            />
            <Product
              img={ProductChip5}
              title={'Mix'}
              subtitle={'Chips'}
              price={'$ 10'}
            />
          </div>
          <img src={Crab1} alt="crab img" className="products__crab" />
          <img
            src={Hamburger}
            alt="hamburger img"
            className="products__hamburger"
          />
          <img src={Cheese} alt="cheese img" className="products__cheese" />
        </div>
      </section>
    </>
  )
}

export default Products
