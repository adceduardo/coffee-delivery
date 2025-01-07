import { Row, Col } from 'react-bootstrap';
import { useContext } from 'react';

// Ícones
import { FaRegTrashAlt } from 'react-icons/fa';

// Components
import { QuantityControl } from '@/components/ProductList/QuantityControl';
import { CardProductCartContainer } from './styles';
import { CartContext } from '@/contexts/CartContext';

export function CardProductCart({ product }) {
  const {changeCartProductQuantity, removeCartItem} = useContext(CartContext)

  function handleRemove(){ 
    removeCartItem(product.id)
  }

  function handleIncrement(){
    changeCartProductQuantity(product.id, 'incrementProduct')
  }

  function handleDecrement(){
    changeCartProductQuantity(product.id, 'decrementProduct')
  }

  const productTotal = product.price * product.quantity
  
  return (
    <CardProductCartContainer>
      <Row>
        <Col
          lg="8"
          className="d-flex align-items-center"
          style={{ gap: '20px' }}
        >
          <img src={`images/products/${product.image}`} alt=''></img>
          <div className="d-column">
            <p>{product.name}</p>
            <div className="d-flex">
              <QuantityControl quantity={product.quantity} incrementProduct={handleIncrement} decrementProduct={handleDecrement}/>
              <button className="remove" onClick={handleRemove}>
                <FaRegTrashAlt size={16} color="var(--purple)" />
                <span className="p-1">REMOVER</span>
              </button>
            </div>
          </div>
        </Col>
        <Col>
          <p>
            <strong>R$ {productTotal.toFixed(2).replace('.', ',')}</strong>
          </p>
        </Col>
      </Row>
    </CardProductCartContainer>
  );
}


