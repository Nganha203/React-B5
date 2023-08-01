import { QLSV } from "./form.const"

const STATE_DEFAULT = {
    danhSachSV:[],
    svChinhSua: null,
}

export const formReact = (state = STATE_DEFAULT, action) =>{
    switch(action.type){
        case QLSV.THEM_SV:{
            const newdanhSachSV = [...state.danhSachSV, action.payload]
            state.danhSachSV = newdanhSachSV
            return {...state}
        }
        case QLSV.XOA_SV:{
            const id_xoa = action.payload.maSV
            const newGioHang = state.danhSachSV.filter((item) => id_xoa !== item.maSV)
            state.danhSachSV = newGioHang
            return{...state}
        }
        case QLSV.EDIT:{
            state.svChinhSua = action.payload
            return {...state}
        }
        case QLSV.CAP_NHAT:{
            const index = state.danhSachSV.findIndex((sv) => sv.maSV === action.payload.maSV)
            if(index === -1){
                return {...state}
            }
            const newSV = [...state.danhSachSV]
            newSV[index] = action.payload
            state.danhSachSV = newSV
            state.svChinhSua = null
            return {...state}
        }
        default: return {...state}
    }
}