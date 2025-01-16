"use client";

import React, { useEffect, useState } from "react";
import { Label } from "../elements/label";
import { dateConversion } from "../../utils/date-conversion";

interface IDateText {
  date?: Date;
}

const DateText = ({ date }: IDateText) => {
  const [relativeDate, setRelativeDate] = useState<string>("");

  useEffect(() => {
    setRelativeDate(dateConversion({ date: date ?? new Date() }));
  }, [date]);
  return (
    <Label className="text-xs text-gray-400 font-light">
      {relativeDate || "..."}
    </Label>
  );
};

export default DateText;
