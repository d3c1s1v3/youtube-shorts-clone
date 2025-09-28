type Props = {
  handleSubmit: (selectedValue: string) => void;
};

const data = [
  { label: "Value 1" },
  { label: "Value 2" },
  { label: "Value 3" },
  { label: "Value 4" },
  { label: "Value 5" },
  { label: "Value 6" },
  { label: "Value 7" },
  { label: "Value 8" },
  { label: "Value 9" },
  { label: "Value 10" },
  { label: "Value 11" },
  { label: "Value 12" },
  { label: "Value 13" },
  { label: "Value 14" },
  { label: "Value 15" },
  { label: "Value 16" },
  { label: "Value 17" },
  { label: "Value 18" },
  { label: "Value 19" },
  { label: "Value 20" },
  { label: "Value 21" },
  { label: "Value 22" },
  { label: "Value 23" },
  { label: "Value 24" },
  { label: "Value 25" },
];

const SuggestionDropdown = ({ handleSubmit }: Props) => {
  return (
    <div className="top-[120%] absolute bg-[#222222] p-2 rounded-lg w-full">
      <ul>
        {data.slice(0, 15).map((d) => (
          <li
            key={d.label}
            className="hover:bg-[rgba(255,255,255,0.2)] p-2 rounded-md cursor-pointer"
            onClick={() => handleSubmit(d.label)}
          >
            {d.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionDropdown;
