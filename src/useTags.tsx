import {useState} from "react";
//封装一个自定义Hook
const useTags = () =>{
    const [tags, setTags] = useState<string[]>(['衣服','食物','住处','交通']);
    return {tags, setTags};
};
export {useTags}
