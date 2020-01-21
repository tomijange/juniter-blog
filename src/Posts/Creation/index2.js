import React from "react";
import { Editor } from "../DraftEditor";
import { Form, Icon, Input, Button } from "antd";
import "./index.less";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function PostCreation({ form }) {
  const { getFieldDecorator, getFieldsError } = form;
  return (
    <Form className="post-creation">
      <Form.Item>
        {getFieldDecorator("title", {
          rules: [{ required: true, message: "Es wird ein Titel benötigt" }]
        })(
          <Input
            prefix={
              <Icon type="font-size" style={{ color: "rgba(0,0,0,.25)" }} />
            }
            placeholder="Titel"
          />
        )}
      </Form.Item>

      <Form.Item className="editor">
        <Editor></Editor>
      </Form.Item>
      <Form.Item>
        <div className="buttons">
          <Button type="default" htmlType="reset">
            Abbrechen
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Speichern
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
}

export default Form.create({ name: "post-creation" })(PostCreation);
