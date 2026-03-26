"use client";

import { useEffect, useState } from "react";
import FloatingPetals from "./FloatingPetals";
import FallLeaves from "./FallLeaves";
import WinterCozy from "./WinterCozy";
import SummerSun from "./SummerSun";

export default function SeasonalAnimation() {
  const [season, setSeason] = useState("spring");

  useEffect(() => {
    const month = 9;

    if ([2,3,4].includes(month)) setSeason("spring");
    else if ([5,6,7].includes(month)) setSeason("summer");
    else if ([8,9,10].includes(month)) setSeason("fall");
    else setSeason("winter");

  }, []);

  switch (season) {
    case "spring":
      return <FloatingPetals />;

    case "summer":
      return <SummerSun />;

    case "fall":
      return <FallLeaves />;

    case "winter":
      return <WinterCozy />;

    default:
      return null;
  }
}