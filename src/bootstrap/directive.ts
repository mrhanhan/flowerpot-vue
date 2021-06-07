import {DirectiveInstall} from "@/bootstrap/index";

/**
 * 权限指令
 * @param app
 * @constructor
 */
const PermissionDirective: DirectiveInstall = (app) =>{
    app.directive('permission', {
        created(el, a, v, c) {
            console.log(el, a, v, c);
        }
    });
}


export default [PermissionDirective] as DirectiveInstall[];