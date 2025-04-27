import Nav from "@/components/custom/Nav";
// import Footer from "@/components/custom/Footer";
// import GotoAdmin from "@/components/custom/GotoAdmin";
// import Help from "@/components/custom/Help"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative ">
      <div id="top"></div>
      {/* <GotoAdmin /> */}
      <Nav />
      {children}
      {/* <Footer /> */}
      {/* <Help /> */}
    </div>
  );
}
