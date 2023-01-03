import styled from 'styled-components';

export const GalaxyCardContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 8px;
  
  & > .title {
    text-align: center;
  }
  
  & > img {
    width: 100%;
    height: 240px;
    object-fit: cover;
  }

  & > .info-container {
    margin: 1rem;

    & > .icon {
      margin-bottom: 0.5rem;
    }

    & > .keyword-container {
      display: flex;
      flex-direction: row;
      column-gap: 0.25rem;
      flex-wrap: wrap;
      row-gap: 0.25rem;

      & > .keyword {
        background: #2646A6;
        color: white;
        padding: 0.5rem;
        border-radius: 8px;
        font-size: 0.65rem;
      }
    }

    & > .description {
      display: block;
      text-overflow: ellipsis;
      word-wrap: break-word;
      overflow: hidden;
      max-height: 3.6em;
      line-height: 1.8em;
      font-size: 0.75rem;
    }
  }

 



`