import { Row, Col } from 'react-bootstrap';
import { CheckoutContainer } from './styles';
import { useRef } from 'react';

// Components
import { SelectedProduct } from './SelectedProduct';
import { Payment } from './Payment';
import { AdressCard } from './AddressCard';

export function Checkout() {
  const adressCardRef = useRef(null);

  const handleConfirmOrder = () =>{
    adressCardRef.current.submitForm()
  }
  
  return (
    <>
      <CheckoutContainer className="container p-0">
        <Row>
          <Col lg="7" className="p-0 checkout-section">
            <AdressCard ref={adressCardRef}/>
            <Payment />
          </Col>
          <Col lg="5" className="p-0">
            <SelectedProduct onConfirmOrder={handleConfirmOrder}/>
          </Col>
        </Row>
      </CheckoutContainer>
    </>
  );
}
