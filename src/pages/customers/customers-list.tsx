import React from "react";
import {
    IResourceComponentsProps,
    BaseRecord,
    useMany
} from "@pankod/refine-core";
import {
    useTable,
    List,
    Table,
    Space,
    EditButton,
    ShowButton,
} from "@pankod/refine-antd";


export const CustomersList: React.FC<IResourceComponentsProps> = () => {
    const { tableProps } = useTable({
        syncWithLocation: true,
    });
    const { data: projectData, isLoading: projectIsLoading } = useMany({
        resource: "projects",
        ids: tableProps?.dataSource?.map((item) => item?.projectId?.id) ?? [],
        queryOptions: {
            enabled: !!tableProps?.dataSource,
        },
    });
    

    return (
        <List>
            <Table {...tableProps} rowKey="[id]">
                <Table.Column dataIndex="id" title="Id" />
                <Table.Column dataIndex="name" title=" Name" />
                <Table.Column dataIndex="email" title="Email" />
                <Table.Column dataIndex="address" title="Address" />
                <Table.Column dataIndex="createdAt" title="Customer Since" />
                <Table.Column  dataIndex={["peojectId", "id"]}
                    title="Projects"
                    render={(value) =>
                        projectIsLoading ? (
                            <>Loading...</>
                        ) : (
                            projectData?.data?.find(
                                (item) => item.id === value,
                            )?.name
                        )
                    }
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
                            
                        </Space>
                    )}
                />
            </Table>
        </List>
    );
};
export{};