import { KeyboardKey } from "@/components";
import { IoBackspaceOutline } from "@/components/icons";

const keyboardLayout = {
  rowOne: [
    { id: "rowOne-0", label: "~" },
    { id: "rowOne-1", label: "1" },
    { id: "rowOne-2", label: "2" },
    { id: "rowOne-3", label: "3" },
    { id: "rowOne-4", label: "4" },
    { id: "rowOne-5", label: "5" },
    { id: "rowOne-6", label: "6" },
    { id: "rowOne-7", label: "7" },
    { id: "rowOne-8", label: "8" },
    { id: "rowOne-9", label: "9" },
    { id: "rowOne-10", label: "0" },
    { id: "rowOne-11", label: "-" },
    { id: "rowOne-12", label: "=" },
    { id: "rowOne-13", icon: IoBackspaceOutline },
  ],
  rowTwo: [
    { id: "rowTwo-0", label: "q" },
    { id: "rowTwo-1", label: "w" },
    { id: "rowTwo-2", label: "e" },
    { id: "rowTwo-3", label: "r" },
    { id: "rowTwo-4", label: "t" },
    { id: "rowTwo-5", label: "y" },
    { id: "rowTwo-6", label: "u" },
    { id: "rowTwo-7", label: "i" },
    { id: "rowTwo-8", label: "o" },
    { id: "rowTwo-9", label: "p" },
    { id: "rowTwo-10", label: "{" },
    { id: "rowTwo-11", label: "}" },
    { id: "rowTwo-12", label: "|" },
  ],
  rowThree: [
    { id: "rowThree-0", label: "caps" },
    { id: "rowThree-1", label: "a" },
    { id: "rowThree-2", label: "s" },
    { id: "rowThree-3", label: "d" },
    { id: "rowThree-4", label: "f" },
    { id: "rowThree-5", label: "g" },
    { id: "rowThree-6", label: "h" },
    { id: "rowThree-7", label: "j" },
    { id: "rowThree-8", label: "k" },
    { id: "rowThree-9", label: "l" },
    { id: "rowThree-10", label: ";" },
    { id: "rowThree-11", label: "'" },
    { id: "rowThree-12", label: "enter" },
  ],
  rowFour: [
    { id: "rowFour-0", label: "shift" },
    { id: "rowFour-1", label: "z" },
    { id: "rowFour-2", label: "x" },
    { id: "rowFour-3", label: "c" },
    { id: "rowFour-4", label: "v" },
    { id: "rowFour-5", label: "b" },
    { id: "rowFour-6", label: "n" },
    { id: "rowFour-7", label: "m" },
    { id: "rowFour-8", label: "," },
    { id: "rowFour-9", label: "." },
    { id: "rowFour-10", label: "/" },
    { id: "rowFour-11", label: "shift" },
  ],
  rowFive: [
    { id: "rowFive-0", label: "Ctrl + Alt" },
    { id: "rowFive-1", label: "space" },
    { id: "rowFive-2", label: "Ctrl + Alt" },
  ],
};

const KeyboardBody = () => {
  return (
    <div className="mt-2">
      <div className="flex">
        {keyboardLayout.rowOne.map((value) => (
          <KeyboardKey key={value.id} label={value.label} icon={value.icon} />
        ))}
      </div>
      <div className="flex mt-1">
        {keyboardLayout.rowTwo.map((value) => (
          <KeyboardKey key={value.id} label={value.label} />
        ))}
      </div>
    </div>
  );
};

export default KeyboardBody;
