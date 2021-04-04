import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Layout from "./components/Layout";
//把标签放在页面的下面

class App extends React.Component {
    render() {
        return (<Router>
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
        </Router>);
    }
}
function NoMatch() {
return(
    <div>这个页面并不存在</div>
)
}
function Statistics() {
    return (
        <Layout>
            <h2>统计页</h2>
        </Layout>
    );
}

function Tags() {
    return (
       <Layout>
           <h2>标签页</h2>
       </Layout>
    );
}

function Money() {
    return (
        <Layout>
            <h2>记账页</h2>
        </Layout>
    );
}
export default App;
