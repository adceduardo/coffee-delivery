import styled from 'styled-components';

export const ConfirmationContainer = styled.div`
    margin-top: 5rem;
    
    h1{
        color: var(--yellow-dark);
        font-size: var(--title-l);
        font-weight: 800;
        margin-bottom: 4px;
    }

    .subtitle{
       font-size: var(--text-l) !important;
       margin-bottom: 2.5rem;
    }
`;

export const Details = styled.div`
    border-radius: 6px 36px 6px 36px;
    background: var(--background);
    padding: 2.5rem;
    position: relative;
    margin-right: 6.375rem;

    &::before{
        content: "";  
        position: absolute;
        inset: -1px;
        border-radius: 7px 37px 7px 37px;
        background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
        z-index: -1;
    }

    .info{
        margin-bottom: 2rem;
        display: flex;
        align-items: center;

        p{
            margin: 0;
        }
        
        .ico{
            display: flex;
            border-radius: 50%;
            padding: 8px;
            color: var(--background);
            margin-right: 12px;
            align-items: center;
            justify-content: center;
        }
    }


`;
