import { useMissingLocationContext } from "@/contexts/MissingLocationContext";

import { IMissingLocationDatesResponse } from "@/handlers/api/asset.handler";
import { cn } from "@/lib/utils";
import React from "react";

interface IProps {
  record: IMissingLocationDatesResponse;
  onSelect: (date: string) => void;
}
export default function MissingLocationDateItem({ record, onSelect }: IProps) {
  const { startDate } = useMissingLocationContext()
  return (
    <div
      role="button"
      onClick={() => onSelect(record.date)}
      key={record.date}
      className={
        cn("flex gap-1 flex-col p-2 py-1 rounded-lg hover:dark:bg-zinc-800 border border-transparent hover:bg-zinc-100 px-4",
        startDate === record.date ? "bg-zinc-100 dark:bg-zinc-800 border-gray-300 dark:border-zinc-700" : "")
      }
    >
      <p className="font-mono text-sm">{record.date}</p>
      <p className="text-xs">{record.asset_count} W/O Location</p>
    </div>
  );
}
