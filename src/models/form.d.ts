import {ValidationRule} from "ant-design-vue/lib/form/Form";

/**
 * 表单实例
 */
declare type FormInstance = {
    resetFields: () => void;
    validate: <T = unknown>(names?: namesType) => Promise<T>;
    validateField: <T = unknown>(name?: string, value?:unknown, rules?: ValidationRule | ValidationRule[]) => Promise<T>;
    clearValidate: (names?: namesType) => void;
}
