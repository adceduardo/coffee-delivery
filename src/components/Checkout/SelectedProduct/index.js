import { Row, Col } from 'react-bootstrap';
import { useContext } from 'react';

import { CartContext } from '@/contexts/CartContext';

// Components
import { SectionSelected } from './styles';
import { SectionSelectedContainer } from './styles';
import { CardProductCart } from './CardProductCart';

export function SelectedProduct({ onCheckout }) {
  const { cartItems, cartItemsTotal, cartQuantity } = useContext(CartContext);
  const shippingPrice = 3.7;
  const cartTotal = shippingPrice + cartItemsTotal;

  return (
    <SectionSelectedContainer>
      <Col className="p-0">
        <h3>Cafés Selecionados</h3>
        <SectionSelected>
          <Row>
            {cartItems.map((product) => (
              <Col className="p-0">
                {' '}
                <CardProductCart key={product.id} product={product} />
              </Col>
            ))}

            <Col lg="12">
              <div className="total-container">
                <p>Total de itens </p>
                <span>R$ {cartItemsTotal.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="total-container">
                <p>Entrega</p>
                <span>R$ {shippingPrice.toFixed(2).replace('.', ',')}</span>
              </div>
              <strong>
                <p>Total</p>
                <span>R$ {cartTotal.toFixed(2).replace('.', ',')}</span>
              </strong>
              <button
                className="confirm"
                onClick={onCheckout}
                disabled={(cartQuantity <=0)}
              >
                CONFIRMAR PEDIDO
              </button>
            </Col>
          </Row>
        </SectionSelected>
      </Col>
    </SectionSelectedContainer>
  );
}
