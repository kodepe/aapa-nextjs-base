import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import { UiProvider } from "@/contexts/UI/provider";

export const metadata: Metadata = {
  title: "Alex Paredes | Templates | Components",
  description: "This is a base template with some components ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />

      <ReduxProvider>
        <UiProvider>{children}</UiProvider>
      </ReduxProvider>
    </html>
  );
}
