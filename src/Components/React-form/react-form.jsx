import React, { Component } from 'react'
import FormDangKi from './formDangKi'
import FormList from './formList'

export default class Reactform extends Component {
  render() {
    return (
      <div>
        <FormDangKi/>
        <FormList/>
      </div>
    )
  }
}

