import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NoMatch";
import styled from "styled-components";
import {Tag} from "./views/Tag";
const AppWrapper = styled.div`
color: #333;
`

class App extends React.Component {
    render() {
        return (
            <AppWrapper>
            <Router>
                <Switch>
                    {/*:tag匹配任意非斜杆的内容，然后将它改为tag*/}
                    <Route exact path="/tags">
                        <Tags/>
                    </Route>
                    <Route exact path="/tags/:tag">
                        <Tag/>
                    </Route>
                    <Route exact path="/money">
                        <Money/>
                    </Route>
                    <Route exact path="/statistics">
                        <Statistics/>
                    </Route>
                    {/*Redirect默认路由*/}
                    <Redirect exact from="/" to="/money" />
                {/*页面不存在*/}
                <Route path="*">
                    <NoMatch />
                </Route>
                </Switch>
        </Router>
            </AppWrapper>);
    }
}

export default App;
