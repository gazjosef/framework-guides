import { useRouter } from "next/router";
import { Meta } from "@/components/Meta";
// import Navbar from "@/components/Layout/Navbar/Navbar";
import { Footer } from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

export const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <header>
        <Meta />
      </header>

      {/* <Navbar /> */}

      {/* <Header /> */}

      {router.pathname === "/"}

      <main>{children}</main>

      {/* <Footer /> */}
    </>
  );
};
