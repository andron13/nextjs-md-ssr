import Input from '../../input/input';

interface IMinMaxInputProps {
  text: string;
  onUpdate: (min: number, max: number) => void;
  values: [number, number];
}

function MinMaxInput({ text, onUpdate, values }: IMinMaxInputProps) {
  const [min, max] = values;

  return (
    <div className="py-6">
      <span className="text-black">{text}</span>
      <div className="mt-5 flex items-center gap-2">
        <Input onChange={(min) => onUpdate(min, max)} type="number" placeholder="Min" val={min} /> —{' '}
        <Input onChange={(max) => onUpdate(min, max)} type="number" placeholder="Max" val={max} />
      </div>
    </div>
  );
}

export default MinMaxInput;
