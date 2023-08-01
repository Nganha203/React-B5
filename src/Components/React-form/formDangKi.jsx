import React, { Component } from 'react'
import { themSV, capNhatSV } from '../../redux/React-form/form.action'
import { connect } from 'react-redux'

class FormDangKi extends Component {
    state = {
        values: {
            maSV: '',
            sdt: '',
            hoTen: '',
            email: ''
        },
        error: {
            maSV: '',
            sdt: '',
            hoTen: '',
            email: ''
        }
    }


    handleOnchange = (event) => {
        const { name, value, id } = event.target

        const newValues = { ...this.state.values, [name]: value }
        const newError = { ...this.state.error }

        if (value === '') {
            newError[name] = id + ' không được bỏ trống!'
        }
        else {
            switch (name) {
                case 'maSV': {
                    const true_type = /^[0-9]+$/
                    if (!true_type.test(value)) {
                        newError[name] = id + ' không đúng định dạng!'
                    }
                    else {
                        newError[name] = ''
                    }
                    break;
                }
                case 'sdt': {
                    const true_type = /^[0-9]+$/
                    if (!true_type.test(value)) {
                        newError[name] = id + ' không đúng định dạng!'
                    }
                    else {
                        newError[name] = ''
                    }
                    break;
                }
                case 'hoTen': {
                    const true_type = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/
                    if (!true_type.test(value)) {
                        newError[name] = id + ' không đúng định dạng!'
                    }
                    else {
                        newError[name] = ''
                    }
                    break;
                }
                case 'email': {
                    const true_type = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    if (!true_type.test(value)) {
                        newError[name] = id + ' không đúng định dạng!'
                    }
                    else {
                        newError[name] = ''
                    }
                    break;
                }
                default: {
                    break
                }
            }
        }

        this.setState({
            values: newValues,
            error: newError
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();  // cản reload lại trang

        for (const key in this.state.values) {
            // phải được nhập đầy đủ.
            if (this.state.values[key].length === 0) {
              // thoát khỏi function không cho submit nữa
              return;
            }
      
            // option chaining
            if (this.state.error[key]?.length > 0) {
              alert(this.state.error[key]);
              // thoát khỏi function không cho submit nữa
              return;
            }
        }
        
        if(this.props.spEdit){
            this.props.dispatch(capNhatSV(this.state.values))
        }
        else{
            this.props.dispatch(themSV(this.state.values))
        }
        

        this.setState({
            values: {
                maSV: '',
                sdt: '',
                hoTen: '',
                email: ''
            },
        })
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log({ newProps, currentState })
        if (newProps.spEdit) {
            if (newProps.spEdit?.maSV != currentState.values?.maSV) {
                return {
                    ...currentState,
                    values: newProps.spEdit
                }
            }
        }

        return null
    }


    render() {
        // console.log(this.props.spEdit)
        return (

            <div className='container'>
                <h2 className='text-center text-light p-3' style={{ background: 'black' }}>Thông tin sinh viên</h2>
                <form onSubmit={this.handleSubmit} className='g-3 mt-4'>
                    <div className='row'>
                        <div className="col-6">
                            <div>
                                <label htmlFor="id" className="form-label">Mã SV</label>

                                <input value={this.state.values?.maSV} name="maSV" id='Mã SV' onChange={this.handleOnchange} type="text" className="form-control" placeholder='' />
                                <span className='text-danger'>{this.state.error.maSV}</span>

                            </div>
                            <div className='my-3'>
                                <label htmlFor="id" className="form-label">Số điện thoại</label>

                                <input name="sdt" value={this.state.values?.sdt} onChange={this.handleOnchange} id='Số điện thoại' type="text" className="form-control" placeholder='' />
                                <span className='text-danger'>{this.state.error.sdt}</span>
                            </div>

                        </div>
                        <div className="col-6">
                            <div>
                                <label htmlFor="id" className="form-label">Họ tên</label>

                                <input name="hoTen" value={this.state.values?.hoTen} onChange={this.handleOnchange} id='Họ tên' type="text" className="form-control" placeholder='' />
                                <span className='text-danger'>{this.state.error.hoTen}</span>
                            </div>

                            <div className='my-3'>
                                <label htmlFor="id" className="form-label">Email</label>
                                <input name="email" value={this.state.values?.email} onChange={this.handleOnchange} id='Email' type="text" className="form-control" placeholder='' />
                                <span className='text-danger'>{this.state.error.email}</span>
                            </div>

                        </div>
                    </div>

                    <div style={{ textAlign: 'right' }} className='my-4 mr-5'>
                        {this.props.spEdit ? (<button type='submit' className='btn btn-primary'>Cập nhật</button>):( <button type='submit' className='btn btn-success mr-2'>Thêm sinh viên</button>)}
                        
                        
                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProp = (rootReducer) => {
    return {
        spEdit: rootReducer.formReact.svChinhSua
    }

}
export default connect(mapStateToProp)(FormDangKi)
