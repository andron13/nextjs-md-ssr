import Input from '../../input/input';

interface IMinMaxInputProps {
  text: string;
}

function MinMaxInput({ text }: IMinMaxInputProps) {
  return (
    <div className="py-6">
      <span className="text-black">{text}</span>
      <div className="mt-5 flex items-center gap-2">
        <Input type="number" placeholder="Min" /> — <Input type="number" placeholder="Max" />
      </div>
    </div>
  );
}

export default MinMaxInput;
