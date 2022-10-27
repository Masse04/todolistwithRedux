import { ADD, CHECKED, FILTER, MODIF, REMOVE } from "./Constantes"

export const add = (payload) => ({
    type : ADD,
    ajouter : payload
})
export const remove = (payload) => ({
    type : REMOVE,
    enlever : payload
})
export const checked = (payload) => ({
    type : CHECKED,
    cocher : payload
})
export const filt = (payload) => ({
    type : FILTER,
    filtrer : payload
})
export const modif = (payload,count) => ({
    type : MODIF,
    modifier : payload ,
    num : count
})