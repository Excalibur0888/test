import OrderBtn from './OrderBtn';

import photoImg from '../img/photo.png';

const Header = () => (
  <header className="header">
    <h1>Натуральные продукты из деревни</h1>
    <OrderBtn />
    <picture>
      <source type="image/png" srcSet={photoImg} alt="Фермеры" />
      <img srcSet={photoImg} alt="Фермеры" />
    </picture>
  </header>
);

export default Header;
