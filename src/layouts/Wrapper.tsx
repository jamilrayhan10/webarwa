 

import { ReactNode } from "react"; 
import AnimationProvider from "@/common/AnimationProvider";
import ScrollToTop from "@/common/ScrollToTop";
import { ToastContainer } from "react-toastify";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  
 

  return (
    <>
      {children} 
      <AnimationProvider />
      <ScrollToTop />
      <ToastContainer position="top-center"/>
    </>
  );
};

export default Wrapper;
 