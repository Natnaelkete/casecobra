import React, { Suspense } from "react";
import ThankYou from "./ThankYou";

const Page = () => {
  return (
    <Suspense fallback={true}>
      <ThankYou />
    </Suspense>
  );
};

export default Page;
