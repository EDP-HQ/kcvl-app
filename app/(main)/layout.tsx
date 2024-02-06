import { Metadata, ResolvingMetadata } from "next";
import Layout from "../../layout/layout";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "MACHINE MONITORING-APP",
  description: "Description",
  robots: { index: false, follow: false },
  viewport: { initialScale: 1, maximumScale: 1, width: "device-width" },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function AppLayout({ children }: AppLayoutProps) {
  return <Layout>{children}</Layout>;
}
