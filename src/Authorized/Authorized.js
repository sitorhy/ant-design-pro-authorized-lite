import React, { Fragment } from "react";
import { checkPermissions } from "./CheckPermissions";

export default ({ children, authority, currentAuthority, forceUpdate, noMatch = null, spinner = null }) => {
    return checkPermissions(authority, currentAuthority, (
        typeof children === "undefined" ? null : forceUpdate ? <Fragment key={Date.now().toString()}>{children}</Fragment> : children
    ), noMatch, spinner);
};
