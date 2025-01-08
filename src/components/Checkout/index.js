import { Row, Col } from 'react-bootstrap';

import { useRef } from 'react';

// Components
import { SelectedProduct } from './SelectedProduct';
import { Payment } from './Payment';
import { AdressCard } from './AddressCard';
import { CheckoutContainer } from './styles';


export function Checkout() {
  const formRef = useRef(null);
  
  const handleSubmit = () =>{
    if(formRef.current){
      formRef.current.submitForm();
    }
  }

  return (
    <>
      <CheckoutContainer className="container p-0">
        <Row>
          <Col lg="7" className="p-0 checkout-section">
            <AdressCard formRef={formRef}/>
            <Payment />
          </Col>
          <Col lg="5" className="p-0">
            <SelectedProduct onCheckout={handleSubmit}/>
          </Col>
        </Row>
      </CheckoutContainer>
    </>
  );
}
