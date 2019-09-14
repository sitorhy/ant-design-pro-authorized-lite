import React, {useEffect, useState} from 'react';
import {Button, Divider, Radio, Spin} from 'antd';
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom";

import Authorized from "./Authorized/Authorized";
import renderAuthorize from "./Authorized/renderAuthorize";

import SignInPage from "./SignInPage";
import LogoutPage from "./LogoutPage";

const RouteAuthorize2 = withRouter(({history, redirect}) =>
{
    useEffect(() =>
    {
        history.replace(redirect);
    }, [redirect, history]);
    return null;
});

const AuthTest = (props) =>
{
    return renderAuthorize(["SIGN_IN"])(props);
};

function App()
{
    const [token, setToken] = useState("");

    const onChange = (e) =>
    {
        setToken(e.target.value);
    };

    return (
        <div>
            <Radio.Group onChange={onChange} value={token}>
                <Radio value="">注销</Radio>
                <Radio value="token">登录</Radio>
            </Radio.Group>
            <AuthTest authority={token ? ["SIGN_IN"] : []} noMatch={<Button type="danger">未登录</Button>}>
                <Button type="primary">已登录</Button>
            </AuthTest>
            <Divider/>

            <AuthTest authority={token ? ["SIGN_IN"] : []} noMatch={<RouteAuthorize2 redirect="/sign"/>}>
                <RouteAuthorize2 redirect="/logout"/>
            </AuthTest>

            <Switch>
                <Route path="/sign" component={SignInPage}/>
                <Route path="/logout" component={LogoutPage}/>
            </Switch>

            <Divider/>

            <Authorized authority={new Promise((r, j) =>
            {
                setTimeout(() =>
                {
                    r();
                }, 3000);
            })} spinner={<Spin/>}>
                <Button>异步显示</Button>
            </Authorized>
        </div>
    );
}

export default () =>
{
    return (
        <Router>
            <Route path="/" component={App}/>
        </Router>
    );
};
