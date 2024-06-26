import { Outlet } from "react-router-dom";
import Footer from "@/components/sections/Footer.section";



const Base = () => {
  return (
    <>
      <Outlet />
      <Footer copyright="2024 MIT License" />
    </>
  )
}

export { Base };
