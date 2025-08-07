"use client";
import Avatar from "@/components/dashboard/Avatar";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Summary from "@/components/dashboard/Summary";
import TransactionsTable from "@/components/dashboard/TransactionsTable";
import { Button } from "@/components/ui/button";
import { DropdownIcon, StatusIcon, UnionIcon } from "@/icons";
import { Tabs } from "@mantine/core";
import { useState } from "react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<string | null>("first");

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <h1 className="font-sans font-bold text-[34px] leading-10 tracking-[-2%] text-primary">
              Wallet Ledger
            </h1>
            <DropdownIcon />
          </div>
          <div className="flex items-center justify-center bg-muted-blue w-[75px] h-[28px] gap-[7px] rounded-2xl">
            <StatusIcon />
            <p className="text-primary font-medium text-[15px] font-sans leading-5">
              Active
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button className="bg-teal-blue-40 text-black-10 text-[15px] font-medium font-sans leading-5 rounded-2xl w-[78px] h-[36px]">
            Share
          </Button>
          <span className="w-9 h-9 bg-background cursor-pointer border border-light-gray-10 flex items-center justify-center rounded-2xl">
            <UnionIcon />
          </span>
        </div>
      </div>

      <div className="my-7">
        <Avatar />
      </div>

      <div className="w-full">
        <Tabs
          value={activeTab}
          onChange={setActiveTab}
          color="teal-blue-40"
          styles={{
            tab: () => ({
              "&[data-active]": {
                color: "#437D8E",
                borderBottom: "2px solid #4B8B9F",
              },
              color: "#64748b",
            }),
          }}
        >
          <Tabs.List>
            <Tabs.Tab
              value="first"
              style={{
                width: "121px",
                height: "44px",
                fontSize: "15px",
                color: activeTab === "first" ? "#437D8E" : "#6d797c",
                fontFamily: "sans-serif",
                fontWeight: 500,
                lineHeight: "20px",
              }}
            >
              Overview
            </Tabs.Tab>
            <Tabs.Tab
              value="second"
              style={{
                width: "121px",
                height: "44px",
                fontSize: "15px",
                color: activeTab === "second" ? "#437D8E" : "#6d797c",
                fontFamily: "sans-serif",
                fontWeight: 500,
                lineHeight: "20px",
              }}
            >
              Transactions
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="first">
            <Summary />
            <div className="mt-7">
              <TransactionsTable />
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="second">
            <h1 className="text-primary mt-5 font-bold">No Payment Yet</h1>
          </Tabs.Panel>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
