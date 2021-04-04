import React from 'react';
import Nav from "./components/Nav";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import styled from "styled-components";
//把标签放在页面的下面
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

class App extends React.Component {
    render() {
        return <Router>
            <Wrapper>
                {/*Switch切换*/}
                <Main>
                <Switch>
                    <Route path="/tags">
                        <Tags/>
                    </Route>
                    <Route path="/money">
                        <Money/>
                    </Route>
                    <Route path="/statistics">
                        <Statistics/>
                    </Route>
                    {/*Redirect默认路由*/}
                    <Redirect exact from="/" to="/money" />
                {/*页面不存在*/}
                <Route path="*">
                    <NoMatch />
                </Route>
                </Switch>
                </Main>
                <Nav/>
            </Wrapper>
        </Router>;
    }
}
function NoMatch() {
return(
    <div>这个页面并不存在</div>
)
}
function Statistics() {
    return <h2>统计页</h2>;
}

function Tags() {
    return <h2>标签页</h2>;
}

function Money() {
    return <h2>记账页</h2>;
}
export default App;
