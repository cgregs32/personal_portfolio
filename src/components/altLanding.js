import React from "react"
import LineTo from "react-lineto"

import styled from "styled-components"

const Page = styled.div`
  display: flex;
  background: #467679;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

const ItemA = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 70px;
  padding: 10px
  background-color: white;
  border: 2px;
  border-style: solid;
  z-index: 2;
  align-self: auto;
`

const ItemB = styled.div`
  height: 50px;
  width: 50px;
  background-color: black;
  align-self: flex-end;
  z-index: 2;
`
const SVG = styled.svg`
  transition: 0.75s;
`

const Icon = styled.i`
  transition: 0.75s;
`

const AltLanding = () => (
  <Page>
    <ItemA>
      <Icon>
        <SVG
          className="A"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M635.73 406.91l-194.04-297.6c-11.57-17.75-39.8-17.75-51.37 0l-32.84 50.37 67.68 105.68c2.38 3.72 1.3 8.67-2.42 11.05l-13.46 8.62c-3.72 2.38-8.67 1.3-11.05-2.42l-59.9-93.54-70.81-110.55c-12.4-19.36-42.64-19.36-55.04 0L4.58 403.18C-7.99 422.81 6.81 448 30.92 448h580.22c22.5 0 36.32-23.09 24.59-41.09z" />
        </SVG>
      </Icon>
    </ItemA>
    <ItemB className="B" />
    <LineTo from="A" to="B" zIndex={1} borderWidth={8} borderColor="black" />
    <p>hi</p>
  </Page>
)

export default AltLanding
