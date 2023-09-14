import {setAxiosInter} from "@/config/axios-interceptor";

// eslint-disable-next-line
/* eslint-disable */

export function initVueApp(vue){
    setAxiosInter(()=>console.log("Unauthorized"))
}


