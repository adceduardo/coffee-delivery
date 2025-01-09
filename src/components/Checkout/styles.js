import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  margin-top: 2.25rem;
  width: 100%;

  h3 {
    color: var(--base-subtitle);
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: 15px;
  }

  input {
    all: unset;
    background: var(--base-input);
    border-radius: 4px;
    border: 1px solid var(--base-button);
    width: 100%;
    font-size: 0.75rem;
    padding: 12px;
    box-sizing: border-box;


    &:focus {
      border: 1px solid var(--yellow-dark);

    }

    &::placeholder {
      color: var(--base-label);
    }
  }
`;

export const CheckoutSection = styled.div`
  position: relative;
  width: 40rem;
  background: var(--base-card);
  border-radius: 6px;
  padding: 40px;
  margin-bottom: 12px;

  .section-header {
    display: flex;
    font-size: var(--text-m);
    gap: 8px;
  }

  .text-s {
    font-size: var(--text-s);
  }

  .payment {
    display: flex;
    text-transform: uppercase;
    background: var(--base-button);
    border-radius: 6px;
    font-size: 0.75rem;
    padding: 0;

    button {
      all: unset;
      padding: 1rem;
      width: 100%;
      transition: 0.3s;
    }

    button:hover {
      cursor: pointer;
      background: var(--base-hover);
      border-radius: 6px;
    }
  }

  .payment-method {
    color: var(--purple) !important;

    span {
      all: unset;
      padding: 0 12px;
      color: var(--base-text);
    }
  }

  .payment-method.selected {
    background: var(--purple-light);
    border: 1px solid var(--purple);
    border-radius: 6px;
  }
`;
