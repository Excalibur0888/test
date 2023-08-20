import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFrom, removeSingleItemFromCart } from '../slices/bagSlice';

const Bag = () => {
  const products = useSelector((state) => state.bag);
  const dispatch = useDispatch();
  const removeToBag = (product) => {
    dispatch(removeSingleItemFromCart(product.id));
  };

  const close = () => {
    document.querySelector('.bag').style.display = 'none';
  };

  const [data, setUserData] = useState({
    username: '',
    phoneNum: '',
    address: '',
    comment: '',
  });

  function handleFormSubmit(event) {
    event.preventDefault();

    console.log(data);
  }

  return (
    <div className="bag">
      <button className="bag__btn" onClick={() => close()}>
        &#215;
      </button>
      <h3 className="bag__h3">Корзина</h3>
      <div className="list-products">
        {products.map((product) => (
          <div
            className="list-products__item"
            key={product.id}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <div>
              <img
                style={{ width: '40px', borderRadius: '50%' }}
                src={product.imageWebp}
                alt=""
              />
            </div>
            <div>{product.good}</div>
            <div>
              {product.value} {product.unit}
            </div>
            <div>{product.priceInNumbers * product.value} руб.</div>
            <div
              className="bag__delete-prod-btn"
              style={{ cursor: 'pointer' }}
              onClick={() => removeToBag(product)}
            >
              &#215;
            </div>
          </div>
        ))}
      </div>

      <div className="bag-feedback">
        <h4 className="bag-feedback__title">
          Заполните форму ниже и мы свяжемся с вами для оплаты
        </h4>
        <form onSubmit={handleFormSubmit}>
          <label className="bag-feedback__label" htmlFor="">
            Ваше имя:
            <input
              type="text"
              placeholder="Иванов Иван Иванович"
              value={data.username}
              onChange={(event) =>
                setUserData({ ...data, username: event.target.value })
              }
              required
            />
          </label>
          <label className="bag-feedback__label" htmlFor="">
            Телефон:
            <input
              type="tel"
              placeholder="+7(900) 000-00-00"
              value={data.phoneNum}
              onChange={(event) =>
                setUserData({ ...data, phoneNum: event.target.value })
              }
              required
            />
          </label>
          <label className="bag-feedback__label" htmlFor="">
            Адрес доставки:
            <input
              type="text"
              placeholder="г. Москва, ул. тверская, д. 10"
              value={data.address}
              onChange={(event) =>
                setUserData({ ...data, address: event.target.value })
              }
              required
            />
          </label>
          <label className="bag-feedback__label" htmlFor="">
            Комментарий
            <input
              type="text"
              value={data.comment}
              onChange={(event) =>
                setUserData({ ...data, comment: event.target.value })
              }
              required
            />
          </label>

          <button className="order-btn" type="submit">
            Заказать продукты
          </button>
        </form>
      </div>
    </div>
  );
};

export default Bag;
