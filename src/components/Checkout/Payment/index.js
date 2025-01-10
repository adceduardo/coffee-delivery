import { Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

// Components
import { CheckoutSection } from '../styles';

// ícones
import { LuDollarSign } from 'react-icons/lu';
import { CiCreditCard1 } from 'react-icons/ci';
import { PiBank } from 'react-icons/pi';
import { PiMoneyThin } from 'react-icons/pi';

export function Payment({ setPaymentMethod }) {
  const [paymentSelected, setPaymentSelected] = useState('');

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
    setPaymentSelected(method);
  };

  return (
    <CheckoutSection>
      <Row className="text-s">
        <Col lg="12" className="p-0">
          <div className="section-header">
            <LuDollarSign size={20} color="var(--purple)" />
            <p>Pagamento</p>
          </div>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </Col>
        <Col className="payment">
          <button
            onClick={() => {
              handlePaymentSelection('credit');
            }}
            className={`payment-method ${
              paymentSelected == 'credit' ? 'selected' : ''
            }`}
          >
            <CiCreditCard1 size={16} />
            <span>Cartão de crédito</span>
          </button>
        </Col>
        <Col className="payment mx-2">
          <button
            onClick={() => handlePaymentSelection('debit')}
            className={`payment-method ${
              paymentSelected == 'debit' ? 'selected' : ''
            }`}
          >
            <PiBank size={16} />
            <span>Cartão de débito</span>
          </button>
        </Col>
        <Col className="payment">
          <button
            onClick={() => {
              handlePaymentSelection('money');
            }}
            className={`payment-method ${
              paymentSelected == 'money' ? 'selected' : ''
            }`}
          >
            <PiMoneyThin size={16} />
            <span>Dinheiro</span>
          </button>
        </Col>
      </Row>
    </CheckoutSection>
  );
}
