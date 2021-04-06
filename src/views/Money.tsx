import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";
import {CategorySection} from "./Money/CategorySection";
import { NumberPadSection } from "./Money/NumberPadSection";

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
type Category = '-'|'+'
function Money() {
    const [selected,setSelected] = useState({
        tags:[] as string[],
        note:'',
        category:'-' as Category,
        amount:0
    });
    //通过typeof获取一个值的类型
    //通过Partial来传一个新的类型，这个类型是之前类型的部分类型
    const onChange = (obj:Partial<typeof selected>)=>{
        setSelected({
            ...selected,
            ...obj
        })
    }
    return (
        <MyLayout>
            {selected.tags.join('.')}
            <hr/>
            {selected.note}
            <hr/>
            {selected.category}
            <hr/>
            {selected.amount}
            <TagsSection value={selected.tags}
            onChange={(tags)=>onChange({tags})}/>
            <NoteSection value={selected.note}
                onChange={(note)=>onChange({note})}/>
            <CategorySection value={selected.category}
                                  onChange={(category)=>
                                  {onChange({category})}}/>
            <NumberPadSection value={selected.amount}
                              onChange={(amount)=> onChange({amount})}
                              onOk={()=>{}}/>
        </MyLayout>
    );
}
export default Money;