"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Page() {
  const navigate = useRouter();

  useEffect(() => {
    navigate.push("/bitcoin");
  }, []);
  return <></>;
}

export default Page;
