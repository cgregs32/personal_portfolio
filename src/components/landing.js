import React from "react"
import styled from "styled-components"

const Stripes = styled.div`
  display: grid;
  grid: repeat(5, 25%) / repeat(10, 1fr);
  background: linear-gradient(#4d51ff, #00cded);
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
const Header = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  background: linear-gradient(#96d1f9, #00cded);
  transform: skewY(-12deg);
  transform-origin: 0;
  z-index: 3;
`

const Header2 = styled.div`
  grid-area: 1 / 1 / 2 / 6;
  background: linear-gradient(#a5ffcc, #25ddf5);
  transform: skewY(-12deg);
  z-index: 2;
  transform-origin: 0;
`

const Header3 = styled.div`
  grid-area: 1 / 1 / 2 / 13;
  background: linear-gradient(#96d999, #0ffded);
  transform: skewY(-12deg);
  z-index: 1;
  transform-origin: 0;
`

const Stripe1 = styled.div`
  grid-area: 3 / span 2 / 5 / -1;
  background: linear-gradient(#96d1f9, #00cded);
  transform: skewY(-12deg);
  transform-origin: 0;
`

const Stripe3 = styled.div`
  grid-area: 2 / span 2 / auto / -1;
  background: linear-gradient(#96d1f9, #00cded);
  transform: skewY(-12deg);
  transform-origin: 0;
`

const Stripe2 = styled.div`
  grid-column: 4 / span 10;
  grid-row: 5;
  /* grid-column: -1 / span 3;
  grid-row: 4; */
  /* grid-column: 4 / span 5; */
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
  background: linear-gradient(#96d1f9, #00cded);
  z-index: 5;
  height: 150%;
  transform: skewY(-12deg);
  transform-origin: 0;
`

const Landing = props => (
  <Stripes>
    <Header />
    <Header2 />
    <Header3 />
    <Stripe1 />
    <Stripe2 />
    <Stripe4 />
    <Stripe3 />
  </Stripes>
)

export default Landing
