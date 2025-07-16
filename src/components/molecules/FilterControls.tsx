// src/components/molecules/FilterControls.tsx

import Input from '../atoms/Input';

interface FilterControlsProps {
  threshold: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterControls({ threshold, onChange }: FilterControlsProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Sales Threshold
      </label>
      <Input
        type="number"
        placeholder="Enter sales threshold"
        value={threshold}
        onChange={onChange}
      />
    </div>
  );
}
