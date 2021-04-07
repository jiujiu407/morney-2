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
    const updateTag = (id:number,obj:{name:string})=>{
        const index = findTagIndex(id);
        //深拷贝tags得到tagsClone
        const tagsClone = JSON.parse(JSON.stringify(tags));
        //把tagsClone的第index删掉，换成{id:id,name:obj.name}
        tagsClone.splice(index,1,{id:id,name:obj.name});
        setTags(tagsClone);
    }
    return {tags, setTags,findTag,updateTag,findTagIndex};
};
export {useTags}
