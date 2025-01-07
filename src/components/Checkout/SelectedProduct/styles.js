import styled from 'styled-components';

export const SectionSelectedContainer = styled.div`
  img {
    width: 4rem;
    height: 4rem;
  }
  
  .total-container{
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
  }

  strong{
    font-weight: 700;
    font-size: 1.25rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }

  .confirm{
    width: 100%;
    justify-content: center;
    background: var(--yellow);
    color: var(--white);
    padding: 12px 0;
    transition: 0.4s;

  }

  .confirm:hover{
    background: var(--yellow-dark);
  }

`;

export const SectionSelected = styled.div`
  position: relative;
  width: 28rem;
  background: var(--base-card);
  border-radius: 6px 44px 6px 44px;
  padding: 40px;

  p {
    margin-bottom: 0.5rem;
  }

  button {
    all: unset;
    display: flex;
    align-items: center;
    background: var(--base-button);
    padding: 6.5px 8px;
    border-radius: 6px;
    cursor: pointer;
  }

  .remove {
      font-size: 0.75rem;
      cursor: pointer;
      margin-left: 8px;
    }
`;
