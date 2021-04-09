import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";
import {CategorySection} from "./Money/CategorySection";
import { NumberPadSection } from "./Money/NumberPadSection";
import {useRecords} from "../hooks/useRecords";

const MyLayout = styled(Layout)`
display: flex;
flex-direction: column;
`;
const CategoryWrapper = styled.div`
background: #c4c4c4;
`;
type Category = '-'|'+';
const defaultFormData ={
    tagIds:[] as number[],
    note:'',
    category:'-' as Category,
    amount:0
};
function Money() {
    const [selected,setSelected] = useState(defaultFormData);
    const {addRecord} = useRecords();
    //通过typeof获取一个值的类型
    //通过Partial来传一个新的类型，这个类型是之前类型的部分类型
    const onChange = (obj:Partial<typeof selected>)=>{
        setSelected({
            ...selected,
            ...obj
        })
    };
    const submit = ()=>{
        if(addRecord(selected)){
            alert('保存成功');
            setSelected(defaultFormData);
        }
    };
    return (
        <MyLayout scrollTop={9999}>
            <TagsSection value={selected.tagIds}
            onChange={(tagIds)=>onChange({tagIds})}/>
            <NoteSection value={selected.note}
                onChange={(note)=>onChange({note})}/>
                <CategoryWrapper>
            <CategorySection value={selected.category}
                                  onChange={(category)=>
                                  {onChange({category})}}/>
                </CategoryWrapper>
            <NumberPadSection value={selected.amount}
                              onChange={amount=> onChange({amount})}
                              onOk={submit}/>
        </MyLayout>
    );
}
export default Money;