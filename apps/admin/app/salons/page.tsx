"use client";

import { salons as adminSalons } from "@nextedge/mock-data";
import { Card, Space, Table, Tag, Typography } from "antd";

export default function SalonsAdminPage() {
  return (
    <Card
      title="Salon Directory"
      styles={{
        body: { padding: 0 },
      }}
    >
      <div style={{ padding: 24 }}>
        <Space direction="vertical" size={4} style={{ marginBottom: 20 }}>
          <Typography.Text type="secondary">Refine-based admin prototype</Typography.Text>
          <Typography.Title level={3} style={{ margin: 0 }}>
            Manage salons and stylist coverage
          </Typography.Title>
        </Space>
      </div>
      <Table
        rowKey="id"
        pagination={false}
        dataSource={adminSalons}
        columns={[
          {
            title: "Salon",
            dataIndex: "name",
            key: "name",
            render: (value: string, record) => (
              <Space direction="vertical" size={0}>
                <Typography.Text strong>{value}</Typography.Text>
                <Typography.Text type="secondary">{record.address}</Typography.Text>
              </Space>
            ),
          },
          {
            title: "District",
            dataIndex: "district",
            key: "district",
          },
          {
            title: "Tags",
            dataIndex: "tags",
            key: "tags",
            render: (tags: string[]) => (
              <>
                {tags.map((tag) => (
                  <Tag key={tag} color="gold">
                    {tag}
                  </Tag>
                ))}
              </>
            ),
          },
          {
            title: "Stylists",
            key: "stylists",
            render: (_, record) => record.stylists.length,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            key: "rating",
          },
        ]}
      />
    </Card>
  );
}
