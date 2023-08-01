import { QLSV } from "./form.const"

export const themSV = (payload) =>{
    // console.log(payload)
    return{
        type: QLSV.THEM_SV,
        payload
    }
}

export const xoaSV = (payload) =>{
    // console.log('xoaSV')
    return{
        type: QLSV.XOA_SV,
        payload
    }
}

export const editSV = (payload) =>{
    return{
        type: QLSV.EDIT,
        payload
    }
}

export const capNhatSV = (payload) =>{
    return{
        type: QLSV.CAP_NHAT,
        payload
    }
}