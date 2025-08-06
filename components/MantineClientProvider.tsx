"use client";

import React from "react";
import { MantineProvider } from "@mantine/core";

export default function MantineClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={{
        colors: {
      "teal-blue-40": [
        "#E6F9F7", "#C1F0EB", "#99E6DF", "#73DBD3",
        "#4B8B9F", "#3E9B9A", "#2F8A87", "#257370",
        "#1B5B58", "#134443"
      ]
    },
    primaryColor: "teal-blue-40"
      }}
    >
      {children}
    </MantineProvider>
  );
}
