import { useState } from 'react'
import GroupButton from "@/ui-kit/group-button";
import {layout, labelProps, tailLayout, SelectItemInterface} from "@/props/form"
import { Form, Input, Space } from 'antd';

const { TextArea } = Input;

export default function EventObjectPlanForm({data = null}) {
  const [submitting, setSubmitting] = useState(false)

  const [form] = Form.useForm();

  const uploadImageAction = "test/upload/image";
  const onFinish = (values) => {
    console.log(values);
  };

  const onCancel = () => {
    console.log('cancel')
  };

  const onPreview = () => {
      console.log('preview')
  };

  const resetFields = () => {
      form.resetFields();
  }


  return (
    <Form {...layout} name="control-hooks" form={form} onFinish={(values) => onFinish(values)}>
        <Form.Item>
           <h3>Object Plan</h3>
        </Form.Item>

        <hr className="form-hr"/>
        <Form.Item {...tailLayout}>
            <GroupButton onReset={resetFields} onPreview={onPreview} onCancel={onCancel} submitting={submitting}/>
        </Form.Item>
    </Form>
  )
}
