import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import {
    Create,
    Form,
    useForm,
    Input,
    useSelect,
    Select,
    DatePicker,
} from "@pankod/refine-antd";
import dayjs from "dayjs";


export const CustomerCreate: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm();

    const { selectProps: projectSelectProps } = useSelect({
        resource: "projects",
        optionLabel: "name",
    }); 

    return (
        <Create saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
                <Form.Item
                    label="Name"
                    name={["name"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name={["email"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Address"
                    name={["address"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Projects"
                    name={[ "projectId", "id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                        <Select  {...projectSelectProps} />
                        <Select  {...projectSelectProps} />
                </Form.Item>
                <Form.Item
                    label="Created At"
                    name={["createdAt"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    getValueProps={(value) => ({
                        value: value ? dayjs(value) : undefined,
                    })}
                >
                    <DatePicker />
                </Form.Item>
            </Form>
        </Create>
    );
};
export{}