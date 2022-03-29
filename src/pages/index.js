import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

import { page, text } from "../examples/home.module.css"
import { ExampleButton } from "../examples/button"

export default function Home() {
  return (
    <Layout>
      <div className={page}>
        <ExampleButton>Click me</ExampleButton>
        <h1>Home page</h1>
        <p className={text}>
          dsfhalskjd fldskh flksadh flksadh fadskjh flksadh flkjdsahfl kjsdafl
        </p>
      </div>
    </Layout>
  )
}
