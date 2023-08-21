import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import Logo from "@/components/Logo";
import LightLogo from "@/components/lightLogo";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <main className="preloader bg-black">
      <div className="px-6 lg:px-8">

        <div className="mx-auto max-w-2xl flex items-center justify-center h-screen">
          <div className="texts-container text-center ">
            <div className="creatively">
              <LightLogo />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PreLoader;
