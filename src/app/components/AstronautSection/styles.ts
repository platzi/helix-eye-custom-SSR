import styled from 'styled-components';

export const StyledAstronaut = styled.div`
  display: flex;
  justify-content: center;
  grid-area: 'astronaut';
  width: 100%;
  height: 300px;
  position: relative;
  z-index: 0;
  margin-top: 100px;
  box-shadow: 0px 18px 18px rgba(0, 0, 0, 0.25);

  .background {
    background: linear-gradient(270deg, #2646A6,#0C87F2);
    clip-path: polygon(0 61%, 100% 33%, 100% 100%, 0% 100%);
    height: 300px;
    width: 100%;
    position: absolute;
    z-index: 1;
  }

  .picture {
    display: block;
    position: absolute;
    z-index: 2;
  }
`