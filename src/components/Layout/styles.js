import styled from 'styled-components';
import { baloo2, roboto } from '../../../app/fonts';

export const Baselayout = styled.div`
  position: relative;
  font-family: ${roboto.style.fontFamily};
  font-size: var(--text-m);
  font-weight: 400;

  h1,
  h2,
  h3 {
    font-family: ${baloo2.style.fontFamily};
  }

  h2 {
    font-size: var(--title-l);
    font-weight: 800;
  }

  .container{
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
  }

`;
