import { cryptoAssets,cryptoData } from "./data";

export function fakeFetchCrypto(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(cryptoData)
        },2000)
    })
}

export function fakeFetchAssets(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(cryptoAssets)
        },2000)
    })
}