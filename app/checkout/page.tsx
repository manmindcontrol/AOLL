// app/resume/page.tsx
"use client";

import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "@/stripe";
import Checkout from "@/components/Checkout";

export default function ResumePage() {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
}
