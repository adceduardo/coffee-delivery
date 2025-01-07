import styled from 'styled-components';

export const HeaderBackground = styled.div`
  background: var(--background);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0;
  margin: 0;
  align-items: center;
  margin: 0px;
 

  .header {
    display: flex;
    justify-content: space-between;
    height: 6.5rem;
    align-items: center;
  }

  .localizacao {
    display: flex;
    gap: 5px;
    background: var(--purple-light);
    color: var(--purple);
    padding: 0.5rem;
    align-items: center;
    border-radius: 6px;
  }

  .localizacao p {
    margin: 0;
    line-height: 1.5;
    color: var(--purple-dark);
  }

  .cart {
    all: unset;
    background: var(--yellow-light);
    color: var(--yellow-dark);
    padding: 0.5rem;
    align-items: center;
    border-radius: 6px;
    position: relative;
  }

  .cart:hover {
    cursor: pointer;
  }

  span{
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem /2);
    right: calc(-1.25rem /2);
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--white);
    background: var(--yellow-dark);
    display: flex;
    align-items: center;
    justify-content: center;

  }
`;
