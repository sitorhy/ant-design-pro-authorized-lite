import check from "./Authorized";

/**
 * @param {string|()=>String} currentAuthority
 */
export default (currentAuthority, authority = []) => ({...rest}) =>
{
    let CURRENT = "NULL";
    if (currentAuthority)
    {
        if (currentAuthority.constructor.name === "Function")
        {
            CURRENT = currentAuthority();
        }
        if (
            currentAuthority.constructor.name === "String" ||
            currentAuthority.constructor.name === "Array"
        )
        {
            CURRENT = currentAuthority;
        }
    }
    else
    {
        CURRENT = "NULL";
    }
    return check({currentAuthority: CURRENT, authority, ...rest});
};
