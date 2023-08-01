import React, { Component } from 'react'
import { connect } from 'react-redux'
import {xoaSV} from '../../redux/React-form/form.action'
import {editSV} from '../../redux/React-form/form.action'

class FormList extends Component {

  renderListSV = () => {
    return this.props.listSV.map((item) => {
      return (
        <tr key={item.maSV} className='text-center'>
          <td>{item.maSV}</td>
          <td>{item.hoTen}</td>
          <td>{item.sdt}</td>
          <td>{item.email}</td>

          <td>
            <button onClick={() => this.props.dispatch(xoaSV(item))} className='btn btn-danger mr-2'>Xóa</button>
            <button onClick={() => this.props.dispatch(editSV(item))} className='btn btn-primary'>Chỉnh sửa</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div className='container'>
        <table className='table'>
          <thead className='text-light text-center' style={{ background: 'black' }}>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Tuy chon</th>
          </thead>
          <tbody>
           {this.renderListSV()}

          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProp = (rootReducer) => {
  return {
    listSV: rootReducer.formReact.danhSachSV
  }

}
export default connect(mapStateToProp)(FormList)