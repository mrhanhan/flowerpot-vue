<template>
  <Form ref="form" :rules="rules" :label-col="{span: 4}" :wrapper-col="{span:20}" :model="formModel">
    <FormItem label="分组名称" name="name">
      <Input placeholder="请输入分组名称" :readonly="!editable" autocomplete="off" v-model:value="formModel.name"/>
    </FormItem>
    <FormItem label="分组描述" name="desc">
      <TextArea placeholder="请输入分组名称" :readonly="!editable" v-model:value="formModel.desc" show-count></TextArea>
    </FormItem>
  </Form>
</template>
<script lang="ts">
import {defineComponent, PropType, ref, Ref} from 'vue';
import {Form, Input} from 'ant-design-vue';
import {FormInstance} from "@/models/form";
import {Rules} from "@/models/common";
import {AuthResourceGroup} from "@/views/authority/auth-group/type";
import {lengthRange, required} from "@/utils/FormRoleUtils";

const rules: Rules<AuthResourceGroup> = {
  name: [required('分组名称必填'), ...lengthRange(1, 16, '分组名称最长16个字符')],
  desc: [...lengthRange(0, 255, '分组描述最长255个字符')],
};

export default defineComponent({
  components: {Form, FormItem: Form.Item, Input, TextArea: Input.TextArea},
  props: {
    model: Object as PropType<AuthResourceGroup>,
    editable: { type: Boolean, default: true, required: false }
  },
  setup(props) {
    const form: Ref<null|FormInstance> = ref(null);
    const formModel: Ref<AuthResourceGroup> = ref({name: '', desc: '', ...props.model});
    const onSubmit = () => {
      if (!form.value) {
        return new Promise(((resolve, reject) => {
          reject('验证失败');
        }));
      }
      return form.value.validate();
    };
    return {onSubmit, form, rules, formModel};
  },
  watch: {
    'model'(val: AuthResourceGroup){
      this.formModel = {...val};
    }
  }
});
</script>
