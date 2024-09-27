import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { DockDemo } from "@/components/ui/floatnav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <DockDemo />
      {children}
      <Toaster position="bottom-right" />
      <Footer />
    </>
  );
}
