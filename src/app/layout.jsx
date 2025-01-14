import "./globals.css";
import { Toaster as Sonner } from "@/components/ui/sonner";
import AuthWrapper from "@/components/AuthWrapper";

export const metadata = {
  title: "Find My Crib",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
      <html lang="en">
        <body>
          <main>{children}</main>
          <Sonner expand={true} position="top-right" />
        </body>
      </html>
    </AuthWrapper>
  );
}
