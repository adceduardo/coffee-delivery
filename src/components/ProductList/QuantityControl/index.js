import { FaPlus, FaMinus } from 'react-icons/fa6';
import { Amount, QuantityControlContainer } from './styles';

export function QuantityControl({decrementProduct, incrementProduct,  quantity}) {
 
  return (
    <>
      <QuantityControlContainer>
        <button onClick={decrementProduct} className="quantity-button" disabled={quantity <= 1}>
          <FaMinus size={14}/>
        </button>
        <Amount>{quantity}</Amount>
        <button onClick={incrementProduct} className="quantity-button">
          <FaPlus size={14 }/>
        </button>
      </QuantityControlContainer>
    </>
  );
}
