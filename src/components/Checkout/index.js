import { Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

// Components
import { SelectedProduct } from './SelectedProduct';
import { Payment } from './Payment';
import { AdressCard } from './AddressCard';
import { CheckoutContainer } from './styles';

export function Checkout() {
  const router = useRouter();
  const formRef = useRef(null);

  const [paymentSelected, setPaymentMethod] = useState('');

  const [validatedData, setValidatedData] = useState(null);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.submitForm();
    }

    if (validatedData) {
      console.log(validatedData)
      router.push({
        pathname: '/confirmation',
        query: {
          rua: validatedData.rua,
          numero: validatedData.numero,
          bairro: validatedData.bairro,
          cidade: validatedData.cidade,
          uf: validatedData.uf,
          pagamento: paymentSelected,
        },
      });
    }
  };

  return (
    <>
      <CheckoutContainer className="container p-0">
        <Row>
          <Col lg="7" className="p-0 checkout-section">
            <AdressCard formRef={formRef} setValidatedData={setValidatedData} />
            <Payment setPaymentMethod={setPaymentMethod}/>
          </Col>
          <Col lg="5" className="p-0">
            <SelectedProduct
              onCheckout={handleSubmit}
              validatedData={validatedData}
            />
          </Col>
        </Row>
      </CheckoutContainer>
    </>
  );
}
