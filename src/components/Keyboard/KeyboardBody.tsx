import { KeyboardKey } from "@/components";
import { IoBackspaceOutline } from "@/components/icons";

const keyboardLayout = {
  rowOne: [
    { label: "~" },
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "0" },
    { label: "-" },
    { label: "=" },
    { icon: IoBackspaceOutline },
  ],
  rowTwo: [
    { label: "q" },
    { label: "w" },
    { label: "e" },
    { label: "r" },
    { label: "t" },
    { label: "y" },
    { label: "u" },
    { label: "i" },
    { label: "o" },
    { label: "p" },
    { label: "{" },
    { label: "}" },
    { label: "|" },
  ],
  rowThree: [
    { label: "caps" },
    { label: "a" },
    { label: "s" },
    { label: "d" },
    { label: "f" },
    { label: "g" },
    { label: "h" },
    { label: "j" },
    { label: "k" },
    { label: "l" },
    { label: ";" },
    { label: "'" },
    { label: "enter" },
  ],
  rowFour: [
    { label: "shift" },
    { label: "z" },
    { label: "x" },
    { label: "c" },
    { label: "v" },
    { label: "b" },
    { label: "n" },
    { label: "m" },
    { label: "," },
    { label: "." },
    { label: "/" },
    { label: "shift" },
  ],
  rowFive: [
    { label: "Ctrl + Alt" },
    { label: "space" },
    { label: "Ctrl + Alt" },
  ],
};

console.log(keyboardLayout);

const KeyboardBody = () => {
  return (
    <div className="mt-2">
      <div className="flex">
        {keyboardLayout.rowOne.map((value) => (
          <KeyboardKey
            key={value.label}
            label={value.label}
            icon={value.icon}
          />
        ))}
      </div>
      <div className="flex mt-1">
        {keyboardLayout.rowTwo.map((value) => (
          <KeyboardKey key={value.label} label={value.label} />
        ))}
      </div>
    </div>
  );
};

export default KeyboardBody;
