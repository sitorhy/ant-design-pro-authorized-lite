# Ant-Design-Pro Authorized Lite

extracted and streamline from [ant-design-pro](https://github.com/ant-design/ant-design-pro)

抽离自`ant-design-pro`的权限模块

<br>

## Props

+ `Array<String>` currentAuthority - static permissions allowed
+ `Array<String>|String|Promise` authority - dynamic permissions
+ `ReactNode` noMatch - the component will show when not allowed
+ `ReactNode` spinner - show it during promise doing
+ `ReactNode` Exception - invalid parameter or promise rejected
+ `ReactNode` target - passed component

<br>

## Usage
```
import renderAuthorize from "ant-design-pro-authorized-lite/renderAuthorize";
```
```
const CustomAuthorized = (props) =>
{
    return renderAuthorize( <permissions allowed>:Array<String> )(props);
};
```

```
<CustomAuthorized authority={ <permissions>:Array<String> } />
```

<br>

## Async Verification

```
import {Authorized} from "ant-design-pro-authorized-lite";
```
```
<Authorized authority={new Promise((resolve) =>
{
    setTimeout(() =>
    {
        resolve();
    }, 3000);
})}>
    <Button>ASYNC</Button>
</Authorized>
```

<br>

## AuthorizedRoute Imitation

with react-router 4.x


```
import {withRouter} from "react-router-dom";

const RouteAuthorize = withRouter(({history, redirect}) =>
{
    useEffect(() =>
    {
        history.replace(redirect);
    }, [redirect, history]);
    return null;
});
```


```
<CustomAuthorized authority={...} noMatch={<RouteAuthorize redirect="/a"/>}>
    <RouteAuthorize redirect="/b"/>
</CustomAuthorized>

<Switch>
    <Route path="/a" component={SignInPage}/>
    <Route path="/b" component={LogoutPage}/>
</Switch>
```

<br>