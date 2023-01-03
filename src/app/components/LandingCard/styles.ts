import styled from 'styled-components';

export const StyledLandingCard = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  width: 240px;
  height: 265px;
  padding: 1.5rem;
  background: linear-gradient(270deg, #2646A6,#0C87F2);
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.40);
  border-radius: 24px;
  color: white;
  justify-content: space-around;

  & > .message {
    font-size: 1.5rem;
    margin: 0;
  }

  & > .data {
    font-size: 4.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
  }
`
