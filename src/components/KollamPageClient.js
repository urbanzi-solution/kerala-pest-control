"use client";

import { useState } from "react";
import KollamHero from "@/components/KollamHero";

import KollamPopupForm from "@/components/KollamPopupForm";

export default function KollamPageClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
        {/* HERO */}
        <KollamHero openPopup={() => setOpen(true)} />
      {/* CTA */}
      

      {/* POPUP */}
      <KollamPopupForm open={open} setOpen={setOpen} />
    </>
  );
}