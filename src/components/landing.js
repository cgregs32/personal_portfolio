import React from "react"
import styled from "styled-components"

const Stripes = styled.div`
  display: grid;
  grid: repeat(5, 25%) / repeat(10, 1fr);
  background: linear-gradient(to right, #499f68, #91e0ad);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
`
const Header = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  background: linear-gradient(to right, #499f68, #489e68);
  transform: skewY(-12deg);
  transform-origin: 0;
  z-index: 3;
`

const Header2 = styled.div`
  grid-area: 1 / 1 / 2 / 13;
  background: linear-gradient(#91e0ad, #4caa6f);
  transform: skewY(-12deg);
  z-index: 2;
  transform-origin: 0;
`

const Header3 = styled.div`
  grid-area: 1 / 1 / 2 / 13;
  background: linear-gradient(#319656, #2c874d);
  transform: skewY(-12deg);
  z-index: 1;
  transform-origin: 0;
`

const Stripe1 = styled.div`
  grid-area: 3 / span 2 / 5 / -1;
  background: linear-gradient(to left, #a4fcc8, #62bb82);
  transform: skewY(-12deg);
  transform-origin: 0;
`

const Stripe3 = styled.div`
  grid-area: 2 / span 2 / auto / -1;
  background: linear-gradient(to right, #8ddca8, #a6ffcb);
  transform: skewY(-12deg);
  transform-origin: 0;
`

const Stripe2 = styled.div`
  grid-column: 4 / span 10;
  grid-row: 5;
  height: 150%;
  background: white;
  transform: skewY(-12deg);
  transform-origin: top left;
  z-index: 1;
`

const Stripe4 = styled.div`
  grid-row: 4;
  grid-column: 1 / span 3;
  overflow: hidden;
  background: linear-gradient(to right, #499f68, #4a9f68);

  z-index: 5;
  height: 150%;
  transform: skewY(-12deg);
  transform-origin: 0;
`

const Intro = styled.div`
  font-size: 68px;
  grid-area: 2 / 2 / 4 /4;
`

const LandingBackground = props => (
  <Stripes>
    <Header />
    <Header2 />
    <Intro>
      <h1>HI, IM CHRIS</h1>
    </Intro>
    <Stripe1 />
    <Stripe2 />
    <Stripe4 />
    <Stripe3 />
  </Stripes>
)

export default LandingBackground
