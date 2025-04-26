"use client";
import { Suspense } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Navbar from "@/ui/navbar";
import Footer from "@/ui/footer";
import Skeleton from "@/ui/skeleton";
import { inter } from "@//ui/fonts";
import "./styles.css";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DndProvider backend={HTML5Backend}>
      <Navbar />
      <Suspense fallback={<Skeleton />}>
        <div className={`${inter.className} antialiased`}>{children}</div>
      </Suspense>
      <Footer />
    </DndProvider>
  );
}
