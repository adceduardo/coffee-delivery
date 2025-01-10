import { Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { useState } from 'react';

import { CartContext } from '@/contexts/CartContext';

// Ícones
import { LuTimer } from 'react-icons/lu';
import { FaLocationDot } from 'react-icons/fa6';
import { FiDollarSign } from 'react-icons/fi';

// Components
import { ConfirmationContainer, Details } from './styles';


export function Confirmation() {
  const paymentMethods = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    money: 'Dinheiro',
  };

  const router = useRouter();
  const [validatedData, setValidatedData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const {cleanCart} = useContext(CartContext)
  useEffect(() => {
    const { validatedData, pagamento } = router.query;

    if (validatedData && pagamento) {
      setValidatedData(JSON.parse(router.query.validatedData));
      setPaymentMethod(pagamento)
      cleanCart()
    } else {
      router.push('/');
    }
  }, [router]);

  if (!validatedData || !paymentMethod) {
    return null;
  }

  return (
    <ConfirmationContainer className="container p-0">
      <Row>
        <Col className="p-0" lg="12">
          <h1>Uhu! Pedido confimado</h1>
          <p className="subtitle">
            Agora é so aguardar que logo o café chegará até você
          </p>
        </Col>
        <Col lg="6" className="p-0">
          <Details>
            <Row>
              <Col className="info">
                <div className="ico" style={{ background: 'var(--purple)' }}>
                  <FaLocationDot size={20} />
                </div>
                <div className="d-block">
                  <p>
                    Entrega em{' '}
                    <strong>
                      {validatedData.rua}, {validatedData.numero}
                    </strong>
                  </p>
                  <p>
                    {validatedData.bairro} - {validatedData.cidade} {validatedData.uf}
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="info">
                <div className="ico" style={{ background: 'var(--yellow)' }}>
                  <LuTimer size={20} />
                </div>
                <div className="d-block">
                  <p>Previsão de entrega</p>
                  <strong>20 min - 30 min</strong>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="info m-0">
                <div
                  className="ico"
                  style={{ background: 'var(--yellow-dark)' }}
                >
                  <FiDollarSign size={20} />
                </div>
                <div className="d-block">
                  <p>Pagamento na entrega</p>
                  <strong>{paymentMethods[paymentMethod]}</strong>
                </div>
              </Col>
            </Row>
          </Details>
        </Col>
        <Col className="p-0" lg="6">
          <img src="images/confirmation.png" alt='Confirmação de pedido'></img>
        </Col>
      </Row>
    </ConfirmationContainer>
  );
}
