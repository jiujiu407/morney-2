import {useEffect, useRef} from "react";
export const useUpdate = (fn: ()=> void,deps:any[])=>{
    const count = useRef(0);
    useEffect(()=>{
        count.current +=1;
        // setTags(JSON.parse(window.localStorage.getItem('tags')||'[]'))
    },[])
    useEffect(()=>{
        if(count.current>1){
           fn()
        }
    },deps);
}
