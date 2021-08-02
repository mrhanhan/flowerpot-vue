<template>
  <a-form ref="form" :rules="rules" :model="formModel" :label-col="{span: 4}" :wrapper-col="{span:20}"   autocomplete="off" >
    <a-form-item label="资源分组" name="groupId">
      <a-select  style="width: 100%;" v-model:value="formModel.groupId" :disabled="!editable">
        <a-select-option
            v-for="(it,index) in authResourceGroupArray"
            :lable="it.name" :value="it.id"
            default-active-first-option
            :key="`AUTH_RESOURCE_GROUP_${index}`">{{it.name}}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="资源类型" name="type">
      <a-radio-group v-model:value="formModel.type" :disabled="!editable">
        <a-radio v-for="(it, index) in AuthTypeArray" :key="`AUTH_TYPE_${index}`" :value="it.value">{{it.label}}</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="资源编码" name="code">
      <a-input  v-model:value="formModel.code" placeholder="资源编码" :readonly="!editable"/>
    </a-form-item>
    <a-form-item label="资源名称" name="name">
      <a-input  v-model:value="formModel.name" placeholder="资源名称" :readonly="!editable"/>
    </a-form-item>
    <a-form-item label="资源数据" name="raw">
      <a-textarea placeholder="授权资源数据：URL或者标识符" v-model:value="formModel.raw" :readonly="!editable"></a-textarea>
    </a-form-item>
    <a-form-item label="拦截规则" name="rule" v-if="false">
      <RootRule/>
    </a-form-item>
    <a-form-item label="资源数据" name="desc">
      <a-textarea placeholder="授权资源描述" v-model:value="formModel.desc" :readonly="!editable"></a-textarea>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">

import {defineComponent, PropType, ref, Ref} from "vue";
import {AuthResourceGroup} from "@/views/authority/auth-group/type";
import {getChooseResourceGroup} from "@/service/authorize/common";
import {AuthResource} from "@/views/authority/auth/type";
import {FormInstance} from "@/models/form";
import {Rules} from "@/models/common";
import {required} from "@/utils/FormRoleUtils";
import {FormComponents} from "@/utils/props/form-props";
import {createNewAuthResource, AuthTypeArray} from "@/views/authority/auth/data";
import {RootRule} from "@/views/authority/auth/AuthRuleComponent";

const rules: Rules<AuthResource> = {
  name: [required('资源名称必填')],
  code: [required('资源CODE必填')],
  raw: [required('资源数据必填')],
  groupId: [required('分组必选')]
};

export default defineComponent({
  name: 'auth-form',
  props: {
    model: Object as PropType<AuthResourceGroup>,
    editable: { type: Boolean, default: true, required: false }
  },
  components: {RootRule,...FormComponents},
  setup(props) {
    const authResourceGroupArray: Ref<Array<AuthResourceGroup>> = ref([]);
    // 加载资源分组
    getChooseResourceGroup().then((result) => {
      authResourceGroupArray.value = result.data;
    });
    const formModel: Ref<AuthResource> = ref({...createNewAuthResource(), ...props.model});
    const form: Ref<null|FormInstance> = ref(null);
    const onSubmit = () => {
      if (!form.value) {
        return Promise.reject('校验失败');
      }
      return form.value?.validate();
    };
    return {authResourceGroupArray, formModel, form, rules, AuthTypeArray, onSubmit};
  },
  watch: {
    'model'(val) {
      this.formModel = {...val};
    }
  }
});
</script>

<style scoped>

</style>
