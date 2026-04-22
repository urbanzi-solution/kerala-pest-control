"use client";

import { useState } from "react";
import TrivandrumHero from "@/components/TrivandrumHero";
import TVMPopupForm from "@/components/TVMPopupForm";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <TrivandrumHero openPopup={() => setOpen(true)} />

      {/* POPUP */}
      <TVMPopupForm open={open} setOpen={setOpen} />
    </>
  );
}