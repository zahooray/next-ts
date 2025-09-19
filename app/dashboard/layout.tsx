// app/dashboard/layout.tsx
import React from "react";

export default function DashboardLayout({
  children,
  sidebar,
  tools,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  tools: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[250px_1fr_250px] h-screen">
      <aside className=" border-r p-4">{sidebar}</aside>
      <main className="p-6">{children}</main>
      <section className=" border-l p-4">{tools}</section>
    </div>
  );
}
