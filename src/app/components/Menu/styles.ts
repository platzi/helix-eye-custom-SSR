import styled from 'styled-components';

export const MenuButton = styled.button`
  display: ${({ hidden }) => hidden ? 'none' : 'block'};
  border: none;
  background: linear-gradient(270deg, #2646A6,#0C87F2);
  font-size: 1.5rem;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: fixed;
  top: 32px;
  right: 32px;
  z-index: 10;
  cursor: pointer;
`

export const MenuContainer = styled.menu`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 2rem;
  width: calc(300px - 4rem);
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${({hidden}) => hidden ? 'calc(-300px - 4rem)' : '0px'};
  z-index: 1;
  transition: 200ms;
  background: #2646A6;
  box-shadow: -16px 10px 41px 0px rgba(133,133,133,0.66);

  button {
    border: none;
    background: transparent;
    color: white;
    font-size: 1.5rem;
    display: inline-block;
    width: 40px;
    cursor: pointer;
  }

  ul {
    color: white;
    font-size: 2rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    row-gap: 1rem;

    a {
      text-decoration: none;
      color: white;
    }
  }
`