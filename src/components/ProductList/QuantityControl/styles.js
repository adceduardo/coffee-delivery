import styled from 'styled-components';

export const QuantityControlContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--base-button);
  gap: 8px;
  padding: 8px;
  border-radius: 6px;
  width: 72px;
  height: 38px;

  .quantity-button {
    all: unset;
    color: var(--purple);
  }

  .quantity-button:hover {
    cursor: pointer;
  }

  .quantity-button:disabled {
    opacity: 0.2;
    cursor: default;
  }
`;

export const Amount = styled.p`
  margin: 0 !important;
  color: var(--base-title) !important;
  font-size: var(--text-m) !important;
`;
