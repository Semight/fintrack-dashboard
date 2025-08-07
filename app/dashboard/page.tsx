"use client";
import Avatar from "@/components/dashboard/Avatar";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Summary from "@/components/dashboard/Summary";
import TransactionsTable from "@/components/dashboard/TransactionsTable";
import { Button } from "@/components/ui/button";
import { DropdownIcon, StatusIcon, UnionIcon } from "@/icons";
import { Tabs } from "@mantine/core";
import Image from "next/image";
import CardIcon from "@/assets/credit-card-icon.jpg"
import { useState } from "react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<string | null>("first");

  return (
    <DashboardLayout>
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <h1 className="font-sans font-bold text-[24px] md:text-[34px] leading-10 tracking-[-2%] text-primary">
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
            <div className="flex flex-col items-center justify-center my-10 text-center px-4">
              <Image
                className="w-32 h-32 object-contain mb-4" src={CardIcon} alt={""}              />

              <h2 className="text-[20px] md:text-[24px] font-semibold text-primary mb-2">
                No Payments Yet
              </h2>

              <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-md">
                You haven’t made any payments yet. Once you make a payment, your
                history will show up here.
              </p>

              <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-5 rounded-md text-sm transition-all">
                Make a Payment
              </button>
            </div>
          </Tabs.Panel>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
