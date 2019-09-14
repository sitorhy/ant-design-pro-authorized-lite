export function renderAuthorize(currentAuthority: Array<string> | string, authority: Array<string> | string | Promise<object>);

export function Authorized({children, authority, currentAuthority, noMatch, spinner});