import {atom, selector} from 'recoil'

export const counteratom=atom({
    key:"counter",
    default:0
})

export const evenSelector=selector({
    key:"iseven",
    get:function({get}){
        const count=get(counteratom);
        return count%2==0;
    }
})