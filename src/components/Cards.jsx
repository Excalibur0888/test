import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../slices/cartSlice';
import { addTo } from '../slices/bagSlice';

const Cards = () => {
  const product = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add({ id: product.id }));
  };

  const removeToCart = (product) => {
    dispatch(remove({ id: product.id }));
  };

  const addToBag = (product) => {
    dispatch(addTo(product));
  };

  return (
    <section id="catalog" className="cards">
      <h2>Наши товары</h2>
      <div className="cards-grid">
        {product.map((product) => (
          <div key={product.id} className="card">
            <picture className="card-img">
              <source
                type="image/webp"
                srcSet={product.imageWebp}
                alt={product.good}
              />
              <source
                type="image/jpg"
                srcSet={product.image}
                alt={product.good}
              />
              <img srcSet={product.image} alt={product.alt} />
            </picture>
            <div className="card-text">
              <span className="card-text__name">{product.good}</span>
              <span className="card-text__price">
                {product.price} <br />
                <span className="pack">{product.pack}</span>
              </span>
            </div>
            <div className="qty">
              <button
                onClick={() => dispatch(remove(product))}
                className="qty__btn"
              >
                -
              </button>
              <div>
                <input
                  type="number"
                  step={product.step}
                  min="1"
                  max="500"
                  placeholder={product.placeholder}
                  value={product.value}
                />
                <span>{product.unit}</span>
              </div>
              <button onClick={() => addToCart(product)} className="qty__btn">
                +
              </button>
            </div>
            <button
              onClick={() => addToBag(product)}
              type="button"
              className="toCard"
            >
              В корзину
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
