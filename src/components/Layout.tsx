import Nav from "./Nav";
import React, {useEffect, useRef} from "react";
import styled from "styled-components";
const Wrapper = styled.div`
min-height: 100vh;
display:flex;
flex-direction: column;
`;
const Main = styled.div`
border:1px solid green;
flex-grow: 1;
overflow: auto;
`;
type Props = {
    className?:string;
    scrollTop?:number;
}
const Layout: React.FC<Props> = (props)=>{
    const mainRef = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        setTimeout(()=>{
            if(!mainRef.current){return;}
            //  props.scrollTop加！叫ts不要管那么多，反正我不会让他为空
            mainRef.current.scrollTop = props.scrollTop!;
        },0);
    },[props.scrollTop]);
    return(
        <Wrapper>
            <Main ref={mainRef} className={props.className} data-x={'frank'}>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    )
};
//给它一个默认值
Layout.defaultProps={
    scrollTop:0
}
export default Layout;