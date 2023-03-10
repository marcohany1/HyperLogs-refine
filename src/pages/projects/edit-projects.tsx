import React from "react";
import { IResourceComponentsProps } from "@pankod/refine-core";
import {
    Edit,
    Form,
    useForm,
    Input,
    useSelect,
    Select,
    DatePicker,
} from "@pankod/refine-antd";
import dayjs from "dayjs";

export const ProjectEdit: React.FC<IResourceComponentsProps> = () => {
    const { formProps, saveButtonProps, queryResult } = useForm();

    const samplesData = queryResult?.data?.data;

    const { selectProps: categorySelectProps } = useSelect({
        resource: "customers",
        defaultValue: samplesData?.customers?.name
    });

   

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Form {...formProps} layout="vertical">
            <Form.Item
                    label="Id"
                    name={["id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input readOnly disabled />
                </Form.Item>
                <Form.Item
                    label="Project Name"
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
                    label="Customer Name"
                    name={["name", "id"]}
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    
                >
                    <Select {...categorySelectProps} />
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
        </Edit>
    );
};
export{};