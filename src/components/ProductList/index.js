import { Row, Col } from 'react-bootstrap';
import { Product } from './Product';
import { ProductListContainer } from './styles.';

// Array de produtos
import { products } from '@/data/products';

export function ProductList() {
  return (
    <ProductListContainer className="container">
      <Row className='products w-100'>
        <Col lg="12" className="m-0 p-0">
          <h2 style={{ marginBottom: '2.25rem' }}>Nossos Cafés</h2>
        </Col>
        {products.map((product) => {
          return (
            <Col lg="3" md="6" xs="9" className='p-3 d-flex' style={{justifyContent:'space-between'}}>
              <Product products={product} />
            </Col>
          );
        })}
      </Row>
    </ProductListContainer>
  );
}
