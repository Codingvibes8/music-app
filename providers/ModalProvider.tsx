"use client";

import React, { useEffect, useState } from "react";

//import AuthModal from "@/components/AuthModal";
// import SubscribeModal from "@/components/SubscribeModal";
// import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";

interface ModalProviderProps {
  products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <h1 className={"text-whit text-3xl"}>model</h1>
      {/*<AuthModal />*/}
      {/*<SubscribeModal products={products} />*/}
      {/*<UploadModal />*/}
    </>
  );
};

export default ModalProvider;
