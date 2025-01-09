import { Row, Col } from 'react-bootstrap';
import { CartContext } from '@/contexts/CartContext';
import { useContext, useEffect, useState } from 'react';

//Ícones
import { FaShoppingCart } from 'react-icons/fa';

//Components
import { BuyContainer, ProductContainer, ProductSticker } from './styles';
import { QuantityControl } from '../QuantityControl';

export function Product({ products }) {
  const { addToCart, cartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const incrementProduct = () => {
    setQuantity(quantity + 1);
  };

  const decrementProduct = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      const productInfo = {
        id: products.id,
        name: products.name,
        price: products.price,
        quantity,
        image: products.image,
        description: products.description,
        sticker: products.sticker,
      };

      addToCart(productInfo);
    }
  };
  return (
    <>
      <ProductContainer>
        <img src={`/images/products/${products.image}`} />
        <ProductSticker>
          {products.sticker.map((sticker) => (
            <p>{sticker}</p>
          ))}
        </ProductSticker>
        <h3>{products.name}</h3>
        <p>{products.description}</p>
        <Row>
          <BuyContainer>
            <Col className="price">
              <p className="currency">R$</p>
              <p className="value">
                {products.price.toFixed(2).replace('.', ',')}
              </p>
            </Col>
            <Col className="d-flex align-items-center">
              <QuantityControl incrementProduct={incrementProduct} decrementProduct={decrementProduct} quantity={quantity}/>
              <button onClick={handleAddToCart} className="cart">
                <FaShoppingCart size={20} />
              </button>
            </Col>
          </BuyContainer>
        </Row>
      </ProductContainer>
    </>
  );
}
