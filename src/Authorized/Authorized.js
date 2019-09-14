import {checkPermissions} from "./CheckPermissions";

export default ({children, authority, currentAuthority, noMatch = null, spinner = null}) =>
{
    return checkPermissions(authority, currentAuthority, (
        typeof children === "undefined" ? null : children
    ), noMatch, spinner);
};
