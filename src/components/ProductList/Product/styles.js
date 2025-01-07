import styled from 'styled-components';
import {baloo2} from '../../../../app/fonts'

export const ProductContainer = styled.div`
  width: 100%;
  background: var(--base-card);
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding-top: 0;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  h3 {
    font-size: var(--title-s);
    font-weight: 700;
  }

  p {
    color: var(--base-label);
    font-size: var(--text-s);
    margin-bottom: 33px;
  }
`;

export const ProductSticker = styled.div`
  width: 100%;
  display: flex;

  margin-top: 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 4px;

  p {
    background: var(--yellow-light);
    color: var(--yellow-dark);
    border-radius: 6.25rem;
    font-weight: 700;
    font-size: 0.625rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
  }
`;

export const BuyContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: last baseline;

  .price {
    display: flex;
    padding: 3.5px 23px 3.5px 0;
    align-items: last baseline;

    .currency {
      font-size: var(--text-s);
      color: var(--base-text);
    }

    .value {
      font-family: ${baloo2.style.fontFamily};
      font-size: var(--title-m);
      font-weight: 800;
      color: var(--base-text);
    }
  }

  .cart{
    all: unset;
    background: var(--purple-dark);
    padding: 8px;
    border-radius: 6px;
    color: var(--base-card);
    margin-left:8px;
  }

  .cart:hover{
    cursor: pointer;
  }

`;
