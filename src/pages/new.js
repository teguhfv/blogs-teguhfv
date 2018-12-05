import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const NewPage = () => (
  <Layout>
    <h1>New</h1>
       <Link to="/page-2/">New</Link>
  </Layout>
)

export default NewPage
