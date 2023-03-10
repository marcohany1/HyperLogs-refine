import React from "react";
import {
    IResourceComponentsProps,
    BaseRecord,
    useMany,
} from "@pankod/refine-core";
import {
    useTable,
    List,
    Table,
    Space,
    EditButton,
    ShowButton,
    DeleteButton,
    MarkdownField,
    DateField,
} from "@pankod/refine-antd";

export const CompanyDetails: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: projectData, isLoading: ProjectIsLoading } = useMany({
        resource: "porjects",
        ids: tableProps?.dataSource?.map((item) => item?.category?.id) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });
    const { data: customerData, isLoading: customerIsLoading } = useMany({
        resource: "customers",
        ids: tableProps?.dataSource?.map((item) => item?.category?.id) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });
   
    return (
        <List title="MaxiomLogs">
            <Table {...tableProps} rowKey="id">
               
                
                <Table.Column
                    dataIndex={["name", "id"]}
                    title="Project Name"
                    render={(value) =>
                        ProjectIsLoading ? (
                            <>Loading...</>
                        ) : (
                            projectData?.data?.find(
                                (item) => item.id === value,
                            )?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["name", "id"]}
                    title="Customer Name"
                    render={(value) =>
                        customerIsLoading ? (
                            <>Loading...</>
                        ) : (
                            customerData?.data?.find(
                                (item) => item.id === value,
                            )?.name
                        )
                    }
                />
                <Table.Column
                    dataIndex={["createdAt"]}
                    title="Created At"
                    render={(value: any) => <DateField value={value} />}
                />
                <Table.Column
                    title="Actions"
                    dataIndex="actions"
                    render={(_, record: BaseRecord) => (
                        <Space>
                            <EditButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <ShowButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                            <DeleteButton
                                hideText
                                size="small"
                                recordItemId={record.id}
                            />
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
export {};
