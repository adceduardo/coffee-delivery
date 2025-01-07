import { Row, Col } from 'react-bootstrap';
import { Form } from '@unform/web';
import { forwardRef, useImperativeHandle, useRef } from 'react';

// Ícones
import { FaLocationDot } from 'react-icons/fa6';

// Components
import { CheckoutSection } from '../styles';

export function AdressCard(ref) {
  
  return (
    <>
      <Row>
        <Col>
          <h3>Complete seu pedido</h3>
          <CheckoutSection>
            <Form>
              <Row className="text-s g-3">
                <Col lg="12" className="p-0">
                  <div className="section-header">
                    <FaLocationDot size={20} color="var(--yellow-dark)" />
                    <p>Endereço de Entrega</p>
                  </div>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </Col> 
                <Col lg="4" className="p-0">
                  <input name="cep" placeholder="CEP" />
                </Col>
                <Col lg="12" className="p-0">
                  <input name="rua" placeholder="Rua" />
                </Col>
                <Col lg="4" className="ps-0">
                  <input name="numero" placeholder="Número" />
                </Col>
                <Col lg="8" className="p-0 d-flex justify-content-between">
                  <input name="complemento" placeholder="Complemento Opcional" />
                </Col>
                <Col lg="4" className="ps-0">
                  <input name="bairro" placeholder="Bairro" />
                </Col>
                <Col lg="7" className="ps-0">
                  <input name="cidade" placeholder="Cidade" />
                </Col>
                <Col lg="1" className="p-0">
                  <input name="uf" placeholder="UF" />
                </Col>
              </Row>
            </Form>
          </CheckoutSection>
        </Col>
      </Row>
    </>
  );
}

