import React from "react"
import Layout from "../components/Layout"
import * as aboutStyles from "../examples/about.module.css"
import styled from "styled-components"
const about = () => {
  return (
    <Layout>
      <Wrapper>
        <h1>About Page</h1>
        <h1>hello world</h1>
        <p className="text">asdlkfj a;sdlkjf ;lkasd jf;lkasdj f;lads kjf;jkl</p>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
  color: blue;

  color: yellowgreen;

  text-transform: uppercase;
`

export default about
