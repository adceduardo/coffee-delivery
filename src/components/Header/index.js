import { Row, Col } from 'react-bootstrap';
import logo from '../../../public/images/logo.png';
import { useContext } from 'react';
import { CartContext } from '@/contexts/CartContext';

// Ícones
import { FaLocationDot } from 'react-icons/fa6';
import { FaShoppingCart } from 'react-icons/fa';

// Components
import Image from 'next/image';
import { HeaderBackground, HeaderContainer } from './styles';
import Link from 'next/link';

export function Header() {
  const { cartQuantity } = useContext(CartContext);

  return (
    <HeaderBackground>
      <HeaderContainer className="container">
        <Row className="header">
          <Col lg="6" xs="6" className="m-0 p-0">
            <Link href="/">
              <Image src={logo} />
            </Link>
          </Col>
          <Col lg="6" xs="6" className="d-flex justify-content-end ">
            <div className="d-flex" style={{ gap: '12px' }}>
              <div className="localizacao">
                <FaLocationDot size={20} />
                <p>Porto Alegre, RS</p>
              </div>
              <Link href="/checkout">
                <button className="cart">
                  {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                  <FaShoppingCart size={20} />
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </HeaderContainer>
    </HeaderBackground>
  );
}
