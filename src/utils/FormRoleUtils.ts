import {ValidationRule} from "ant-design-vue/lib/form/Form";


/**
 * 必填
 * @param message
 */
export const required = (message?: string): ValidationRule => ({required: true, message: message || '内容必填', trigger: 'blur'});

/**
 * 长度范围
 * @param min           最小长度
 * @param max           最大长度
 * @param message       验证文案
 */
export const lengthRange = (min: number, max: number, message?: string): ValidationRule[] => ([{
    min,
    message: (message || `内容长度最小不低于${min}`), trigger: 'blur'
}, {max, message: (message || `内容长度不超过${max}`), trigger: 'blur'}]);

/**
 * 远程验证
 * @param callback
 * @param message
 */
export const remote = (callback: ((value: unknown, rule: ValidationRule) => Promise<any>), message?: string): ValidationRule => ({
    message: message || '验证未通过',
    validator(rule: ValidationRule, value: unknown, validateCallback: (msg?: string) => void) {
        // 验证
        try {
            callback(value, rule).then(() => validateCallback()).catch(() => validateCallback(message));
        } catch (e) {
            validateCallback(e);
        }
    }
});
/**
 * 密码验证规则
 */
export const password = (): ValidationRule => ({pattern: /^[a-zA-Z]\w{5,17}$/, message: '密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)'});
/**
 * 邮箱验证规则
 */
export const email = (): ValidationRule => ({pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: '密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)'});

/**
 * 移动电话验证规则
 * @param message
 */
export const mobileTelephone = (message?: string): ValidationRule => ({pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, message: message || '请输入正确的移动电话'});
