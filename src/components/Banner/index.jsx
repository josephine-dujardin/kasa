import styled from 'styled-components'
import shoreline from '../../assets/shoreline.png'

const BannerContainer = styled.span`
  display: flex;
  justify-content: center;
  padding: 30px 70px;
`

const BannerTitle = styled.span`
  font-size: 42px;
  position: absolute;
  font-weight: normal;
  align-self: center;
  color: white;
`

const BannerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 20px;
  height: 200px;
  width: 100%;
  filter: brightness(55%);
  background-position: center;
  background-size: cover;
  background-image: url("${ shoreline }");
`

function Banner() {

  return (
    <BannerContainer>
        <BannerWrapper></BannerWrapper>
        <BannerTitle><p>Chez vous, partout et ailleurs</p></BannerTitle>
    </BannerContainer>
  )
}

export default Banner