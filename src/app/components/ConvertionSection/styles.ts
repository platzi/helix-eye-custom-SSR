import styled from 'styled-components';

export const StyledConversionSection = styled.section`
  display: grid;
  padding: 0px 1.5rem;
  grid-template-columns: 1fr;
  grid-template-areas: 'picture' 'title' 'button';
  margin-top: 100px;
  justify-items: center;

  & > .title {
    margin-top: 4.5rem;
    grid-area: title;
    text-align: center;
  }

  & > .picture {
    grid-area: picture;
    width: 100%;
    max-width: 350px;
  }

  & > .link {
    width: 60%;
    max-width: 320px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    border-radius: 21px;
    padding: 10px 8px;
    margin-top: 32px;
    border: 2px solid #0C87F2;
  }
`