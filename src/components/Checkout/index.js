import { Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

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

    if (validatedData && paymentSelected) {
      router.push({
        pathname: '/confirmation',
        query: {
          validatedData: JSON.stringify(validatedData),
          pagamento: paymentSelected,
        },
      });
      toast.success('Compra finalizada com sucesso')
    } else if (!paymentSelected) {
      toast.error('Por favor, selecione uma forma de pagamento');
    }
  };

  return (
    <>
      <CheckoutContainer className="container p-0">
        <Row>
          <Col lg="7" className="p-0 checkout-section">
            <AdressCard formRef={formRef} setValidatedData={setValidatedData} />
            <Payment setPaymentMethod={setPaymentMethod} />
          </Col>
          <Col lg="5" className="p-0">
            <SelectedProduct onCheckout={handleSubmit} />
          </Col>
        </Row>
      </CheckoutContainer>
    </>
  );
}
