import React from "react";
import { Label } from "../elements/label";
import { dateConversion } from "../../utils/date-conversion";

interface IDateText {
  date?: Date;
}

const DateText = ({ date }: IDateText) => {
  return <Label className="text-xs text-gray-400 font-light">{dateConversion({ date: date ?? new Date() })}</Label>;
};

export default DateText;
