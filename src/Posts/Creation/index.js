

import React from "react";
import { Editor } from "../DraftEditor";
import { Form, Icon, Input, Button } from "antd";
import "./index.less";
import Post from "../Post";

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

function PostCreation({ form }) {
    const { getFieldDecorator, getFieldsError } = form;
    return (
        <Form className="post-creation">
            <Post
                className="post"
                title={
                getFieldDecorator("title", {
                    rules: [{ required: true, message: "Es wird ein Titel benötigt" }]
                })(
                    <Input
                        style={{ border: 'none', font: 'inherit', boxShadow: 'none' }}

                        placeholder="Titel"
                    />)}

                subTitle={
                    <Form.Item>
                        {getFieldDecorator("subTitle", {
                            rules: [{ required: true, message: "Es wird ein Titel benötigt" }]
                        })(
                            <Input
                                style={{ border: 'none' }}
                                placeholder="Titel"
                            />
                        )}
                    </Form.Item>
                }

                content={
                    <Form.Item>
                        <Editor>

                        </Editor>
                    </Form.Item>
                }
            >


            </Post>



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
        </Form >
    );
}

export default Form.create({ name: "post-creation" })(PostCreation);
