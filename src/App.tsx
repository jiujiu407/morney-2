import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Layout from "./components/Layout";
import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NoMatch";
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

export default App;
