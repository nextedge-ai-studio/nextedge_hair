"use client";

import { Refine } from "@refinedev/core";
import { RefineThemes, ThemedLayout, ThemedTitle, useNotificationProvider } from "@refinedev/antd";
import routerProvider from "@refinedev/nextjs-router";
import { ConfigProvider, App as AntdApp } from "antd";

export function RefineProvider({ children }: { children: React.ReactNode }) {
  const notificationProvider = useNotificationProvider();

  return (
    <ConfigProvider
      theme={{
        ...RefineThemes.Blue,
        token: {
          colorPrimary: "#b8860b",
          colorBgLayout: "#f7f1e8",
          colorTextBase: "#1c1c1c",
          borderRadius: 4,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        },
      }}
    >
      <AntdApp>
        <Refine
          routerProvider={routerProvider}
          notificationProvider={notificationProvider}
          resources={[
            {
              name: "salons",
              list: "/salons",
              meta: {
                label: "Salons",
              },
            },
          ]}
          options={{
            syncWithLocation: true,
          }}
        >
          <ThemedLayout
            Title={({ collapsed }) => <ThemedTitle collapsed={collapsed} text="Nextedge Admin" />}
          >
            {children}
          </ThemedLayout>
        </Refine>
      </AntdApp>
    </ConfigProvider>
  );
}
