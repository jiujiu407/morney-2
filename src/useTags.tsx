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
    const findTagIndex = (id:number)=>{
        let result = -1;
        for(let i = 0; i< tags.length; i++){
            if(tags[i].id === id){
                result = i;
                break;
            }
        }
        return result;
    };
    const updateTag = (id:number,{name}:{name:string})=>{
        setTags(tags.map(tag => tag.id === id ? {id, name:name} : tag));
    };
    const deleteTag = (id:number)=>{
       // filter会创建一个新的数组，把不等于当前id的tag保留下来
       setTags(tags.filter(tag=>tag.id!==id))
    }
    return {tags, setTags,findTag,updateTag,findTagIndex,deleteTag};
};
export {useTags}
