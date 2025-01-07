import Image from 'next/image';
import { BackgroundContainer, PresentationContainer } from './styles';
import { Row, Col } from 'react-bootstrap';
import presentation from '../../../public/images/presentation.png';

// Ícones
import { FaShoppingCart } from 'react-icons/fa';
import { PiPackageFill, PiCoffeeFill, PiTimerFill } from 'react-icons/pi';

export function PresentationSection() {
  return (
    <BackgroundContainer>
      <PresentationContainer className='container'>
        <div>
          <Row>
            <Col className='m-0 p-0'>
              <div className="title-info">
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <p>
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora
                </p>
              </div>
              <Row  className='m-0 p-0'>
                <Col lg="auto" className='m-0 p-0'>
                  <section className="services">
                    <div style={{ background: 'var(--yellow-dark)' }}>
                      <FaShoppingCart size={20} />
                    </div>
                    <p>Compra simples e segura</p>
                  </section>
                  <section className="services">
                    <div style={{ background: 'var(--yellow)' }}>
                      <PiTimerFill size={20} />
                    </div>
                    <p>Entrega rápida e rastreada</p>
                  </section>
                </Col>
                <Col>
                  <section className="services">
                    <div style={{ background: 'var(--base-text)' }}>
                      <PiPackageFill size={20} />
                    </div>
                    <p>Embalagem mantém o café intacto</p>
                  </section>
                  <section className="services">
                    <div style={{ background: 'var(--purple)' }}>
                      <PiCoffeeFill size={20} />
                    </div>
                    <p>O café chega fresquinho até você</p>
                  </section>
                </Col>
              </Row>
            </Col>
            <Col className="d-flex justify-content-end m-0 p-0">
              <Image src={presentation} />
            </Col>
          </Row>
        </div>
      </PresentationContainer>
    </BackgroundContainer>
  );
}
