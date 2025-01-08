import { Row, Col } from 'react-bootstrap';
import { Form } from '@unform/web';
import { addressSchema } from '@/validations/addressValidation';
import { useState } from 'react';
import * as yup from 'yup'

// Ícones
import { FaLocationDot } from 'react-icons/fa6';

// Components
import { CheckoutSection } from '../styles';
import Input from '@/components/Input';


export function AdressCard({ formRef }) {
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = async (data) => {
    try{
      setFormErrors({})
      await addressSchema.validate(data, {abortEarly: false})
      console.log('Dados certos: ', data)
    }catch (err) {
      if (err instanceof yup.ValidationError) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
    
        setFormErrors(validationErrors);
        console.log(validationErrors)
      }
    }
   
    
  };

  return (
    <>
      <Row>
        <Col>
          <h3>Complete seu pedido</h3>
          <CheckoutSection>
            <Form ref={formRef} onSubmit={handleSubmit} schema={addressSchema}>
              <Row className="text-s g-3">
                <Col lg="12" className="p-0">
                  <div className="section-header">
                    <FaLocationDot size={20} color="var(--yellow-dark)" />
                    <p>Endereço de Entrega</p>
                  </div>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </Col>
                <Col lg="4" className="p-0">
                  <Input name="cep" placeholder="CEP"/>
                </Col>
                <Col lg="12" className="p-0">
                  <Input name="rua" placeholder="Rua" />
                </Col>
                <Col lg="4" className="ps-0">
                  <Input name="numero" placeholder="Número" />
                </Col>
                <Col lg="8" className="p-0 d-flex justify-content-between">
                  <Input
                    name="complemento"
                    placeholder="Complemento Opcional"
                  />
                </Col>
                <Col lg="4" className="ps-0">
                  <Input name="bairro" placeholder="Bairro" />
                </Col>
                <Col lg="7" className="ps-0">
                  <Input name="cidade" placeholder="Cidade" />
                </Col>
                <Col lg="1" className="p-0">
                  <Input name="uf" placeholder="UF" />
                </Col>
              </Row>
            </Form>
          </CheckoutSection>
        </Col>
      </Row>
    </>
  );
}
