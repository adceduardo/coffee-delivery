import { Row, Col } from 'react-bootstrap';

// Ícones
import { LuTimer } from 'react-icons/lu';
import { FaLocationDot } from 'react-icons/fa6';
import { FiDollarSign } from 'react-icons/fi';

// Components
import { ConfirmationContainer, Details } from './styles';

export function Confirmation() {
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
                  <p>Entrega em <strong>rua thururu, 192</strong></p>
                  <p>Farrapos- porto alegre rs</p>
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
                  <FiDollarSign size={20}/>
                </div>
                <div className="d-block">
                  <p>Pagamento na entrega</p>
                  <strong>Cartão de crédito</strong>
                </div>
              </Col>
            </Row>
          </Details>
        </Col>
        <Col className="p-0" lg="6">
          <img src="images/confirmation.png"></img>
        </Col>
      </Row>
    </ConfirmationContainer>
  );
}
