import React from "react";
import { IResourceComponentsProps, useShow,useOne } from "@pankod/refine-core";
import {
    Show,
    Typography,
    NumberField,
    TagField,
    TextField,
} from "@pankod/refine-antd";

const { Title } = Typography;

export const CustomersShow: React.FC<IResourceComponentsProps> = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;
    const { data: projectsData, isLoading: projectsIsLoading } = useOne({
        resource: "Projects",
        id: record?.projectId?.id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Title level={5}>Id</Title>
            <NumberField value={record?.id ?? ""} />
            <Title level={5}>Customer Name</Title>
            <TextField value={record?.name} />
            <Title level={5}>Email</Title>
            <TextField value={record?.email} />
            <Title level={5}>Address</Title>
            <TextField value={record?.address} />
            <Title level={5}>Customer Since</Title>
            <TextField value={record?.createdAt} />
            <Title level={5}>Projects</Title>
            {projectsIsLoading ? (
                <>Loading...</>
            ) : (
                <>{projectsData?.data?.name}</>
            )}
        </Show>
    );
};
export{};