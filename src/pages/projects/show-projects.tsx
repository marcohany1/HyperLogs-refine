import React from "react";
import { IResourceComponentsProps, useShow, useOne } from "@pankod/refine-core";
import {
    Show,
    Typography,
    NumberField,
    TextField,
    MarkdownField,
    DateField,
} from "@pankod/refine-antd";

const { Title } = Typography;

export const ProjectShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: customerData, isLoading: customerIsLoading } = useOne({
        resource: "customers",
        id: record?.customerId?.id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Id</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>Name</Title>
            <TextField value={record?.name} />
            <Title level={5}>Description</Title>
            <MarkdownField value={record?.description} />
            <Title level={5}>Customer</Title>
            {customerIsLoading ? (
                <>Loading...</>
            ) : (
                <>{customerData?.data?.name}</>
            )}
            <Title level={5}>Created At</Title>
            <DateField value={record?.createdAt} />
        </Show>
    );
};
export{};