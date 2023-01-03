import styled from 'styled-components';

export const StyledHero = styled.section`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
    color: #2646A6;
  }

  & > p {
    margin-top: 3rem;
    max-width: 260px;
    text-align: center;
    font-weight: bold;
    font-size: 1.125rem;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 480px auto;
    grid-template-areas:
    'image title'
    'image subtitle';
    column-gap: 120px;
    margin: 80px auto;
    max-width: 65%;

    & > h1 {
      display: inline;
      grid-area: title;
      text-transform: uppercase;
      text-align: left;
      margin-top: 120px;
      margin-bottom: 0%;
      font-size: 4rem;
    }

    & > picture {
      width: 100%;
      grid-area: image;
      & > img {
        max-width: 500px;
      }
    }

    & > p {
      margin-top: 0%;
      max-width: none;
      font-size: 2rem;
      text-align: left;
      align-self: baseline;
    }
  }
`