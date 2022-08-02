import { useState } from "react";
import { MultiSelect } from "react-mui-multi-select";

export interface MultiSelectEntity {
  count: number;
  entries: Entry[];
}

type Entry = {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
};

interface MultiSelectWidgetProps {
  data?: MultiSelectEntity;
  error?: string;
}

export function MultiSelectWidget({ data, error }: MultiSelectWidgetProps) {
  const entries = data?.entries;

  const [value, setValue] = useState<Entry[]>([]);
  const onChange = (e: Entry[]) => {
    console.log("selected:", e);
    setValue(e);
  };

  return (
    <div style={{ width: "50%", padding: "50px" }}>
      {entries && (
        <MultiSelect
          getOptionKey={(u: Entry) => u.Link}
          getOptionLabel={(u: Entry) => u.API}
          value={value}
          options={entries}
          label="Multi Select"
          placeholder="Braveheart"
          onChange={onChange}
          limitTags={2}
        />
      )}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}
