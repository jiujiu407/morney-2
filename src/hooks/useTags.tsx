import {useEffect, useState} from "react";
import {createId} from "lib/creatId";
import {useUpdate} from "./useUpdate";
//封装一个自定义Hook
const useTags = () =>{
    const [tags, setTags] = useState<{id:number;name:string}[]>([]);
    //什么都不写，给一个空，然后进行第一次渲染
    useEffect(()=>{
        let localTags=JSON.parse(window.localStorage.getItem('tags')||'[]');
        if(localTags.length === 0){
            localTags =[
                {id:createId(),name:'衣服'},
                {id:createId(),name:'食物'},
                {id:createId(),name:'住宿'},
                {id:createId(),name:'出行'}
            ];
        }
        setTags(localTags);
    },[]);//组件挂载时执行
    useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },[tags])
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
    };
    const addTag = ()=>{
        const tagName = window.prompt('请输入要添加的标签名');
        if(tagName!== null && tagName !==''){
            setTags([...tags,{id:createId(),name:tagName}])
        }
    };
    const getName = (id:number) =>{
        const tag = tags.filter(t => t.id === id)[0];
        return tag ? tag.name : '';
    };
    return {tags, getName,addTag,setTags,findTag,updateTag,findTagIndex,deleteTag};
};
export {useTags}
