import {useState} from "react";
import {createId} from "lib/creatId";
const defaultTags = [
    {id:createId(),name:'衣服'},
    {id:createId(),name:'食物'},
    {id:createId(),name:'住宿'},
    {id:createId(),name:'出行'},
]
//封装一个自定义Hook
const useTags = () =>{
    const [tags, setTags] = useState<{id:number;name:string}[]>(
    defaultTags);
    const findTag = (id:number) => tags.filter(tag =>tag.id ===id)[0];
    return {tags, setTags,findTag};
};
export {useTags}
