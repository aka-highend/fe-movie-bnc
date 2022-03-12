import styled from 'styled-components';

export const MovieContentStyled = styled.main`
  padding: 0px 50px;
  margin-top: 64px;
`

export const MovieLayoutBackgroundStyled = styled.div`
  padding: 24px;
  height: 85vh;
  overflow : scroll;
`

export const ImgMdColStyled = styled.div`
  @media (min-width: 768px) and (max-width: 1200px) {
    display: block;
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }
`

export const MovieContentMdColStyled = styled.div`
  @media (min-width: 768px) and (max-width: 1200px) {
    display: block;
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }
`