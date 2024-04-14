import {
  FlexCol,
  FlexRow,
  DisplayDay,
  DisplayMonth,
  DisplayWeekDay,
  DisplayYear,
} from "./shared/styled";

import { useState, useEffect } from "react";

export default function TopBar() {
  const [date, SetDate] = useState(new Date());

  const Update = () => {
    SetDate(new Date());
    setTimeout(Update, 50000);
  };

  useEffect(() => {
    Update();
  });

  return (
    <FlexRow justify="space-between" style={{ padding: "30px" }}>
      <FlexRow>
        <DisplayDay>{date.getDate()}</DisplayDay>
        <FlexCol>
          <DisplayMonth>
            {new Intl.DateTimeFormat("en-US", { month: "short" }).format(date)}
          </DisplayMonth>
          <DisplayYear>{date.getFullYear()}</DisplayYear>
        </FlexCol>
      </FlexRow>
      <DisplayWeekDay>
        {new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date)}
      </DisplayWeekDay>
    </FlexRow>
  );
}
