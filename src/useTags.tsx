import {useState} from "react";
//封装一个自定义Hook
const useTags = () =>{
    const [tags, setTags] = useState<{id:number;name:string}[]>([
        {id:1,name:'衣服'},
        {id:2,name:'食物'},
        {id:3,name:'住宿'},
        {id:4,name:'出行'},
    ]);
    return {tags, setTags};
};
export {useTags}
