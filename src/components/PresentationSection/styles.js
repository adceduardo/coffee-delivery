import styled from 'styled-components';
import {rgba} from 'polished';

export const BackgroundContainer = styled.div`
   width: 100%;
   height: 34rem;
   
   background: linear-gradient(
      0deg,
      var(--background) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      var(--background) 100%
    ),
    url('/images/background.png');
`;

export const PresentationContainer = styled.div`
  padding: 5.875rem 0;
  position: relative;
  gap: 3.5rem;
  
  .title-info {
    margin-bottom: 4.125rem;
    width: 588px;

    h1 {
      line-height: var(--line-height-130);
      font-weight: 800;
      font-size: var(--title-xl);
    }

    p {
      width: auto;
      font-weight: 400;
      font-size: var(--title-s);
      margin-top: 2rem;
    }
  }

  .services {
    display: flex;
    line-height: 1.5px;
    align-items: baseline;
    padding: 20px 0px 0px 0px;
  }

  .services p {
    color: black;
    padding: 5px;
  }

  .services div {
    padding: 8px;
    border-radius: 50%;
    color: var(--background);
  }
`;
