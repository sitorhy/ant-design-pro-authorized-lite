import React from "react";

export default class extends React.Component
{
    state = {
        fetchSuccess: null
    };

    setFetchSuccess = (fetchSuccess) =>
    {
        this.setState({
            fetchSuccess
        });
    };

    UNSAFE_componentWillReceiveProps(nextProps, nextContext)
    {
        const {promise}=nextProps;
        if(promise!==this.props.promise)
        {
            this.setRenderComponent(nextProps);
        }
    }

    // Determine whether the incoming component has been instantiated
    // AuthorizedRoute is already instantiated
    // Authorized  render is already instantiated, children is no instantiated
    // Secured is not instantiated
    checkIsInstantiation = target =>
    {
        if (!React.isValidElement(target))
        {
            return target;
        }
        return () => target;
    };

    setRenderComponent = (props) =>
    {
        props.promise
            .then(() =>
            {
                this.setFetchSuccess(true);
            })
            .catch(() =>
            {
                this.setFetchSuccess(false);
            });
    };

    renderComponent = () =>
    {
        const {ok, ...rest} = this.props;
        const Component = this.checkIsInstantiation(ok);
        return Component ? <Component {...rest}/> : null;
    };

    renderException = () =>
    {
        const {error, ...rest} = this.props;
        const Component = this.checkIsInstantiation(error);
        return Component ? <Component {...rest}/> : null;
    };

    componentDidMount()
    {
        this.setRenderComponent(this.props);
    }

    render()
    {
        const {fetchSuccess}=this.state;
        const {spinner: Spinner = null} = this.props;

        return fetchSuccess === null ? (Spinner) : (fetchSuccess ? this.renderComponent() : this.renderException());
    }
}
