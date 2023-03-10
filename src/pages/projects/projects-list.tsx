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
    DateField
} from "@pankod/refine-antd";

export const ProjectList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });

    const { data: customerData, isLoading: customerIsLoading } = useMany({
        resource: "customers",
        ids: tableProps?.dataSource?.map((item) => item?.customerId?.id) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });

    return (
        <List>
            <Table {...tableProps} rowKey="id">
            <Table.Column dataIndex="id" title="Id" />
            <Table.Column dataIndex="name" title="Name" />
            <Table.Column
                    dataIndex={["customerId", "id"]}
                    title="Customer"
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
export{};