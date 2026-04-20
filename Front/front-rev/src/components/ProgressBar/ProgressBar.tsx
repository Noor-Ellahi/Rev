type ProgressBarProps = {
  value: number; // 0 - 100
  label?: string;
};

const ProgressBar = ({ value, label }: ProgressBarProps) => {
  return (
    <div className="w-full space-y-2">

      {label && (
        <div className="flex justify-between text-md text-white/70">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
      )}

      <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#991B1B] transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>

    </div>
  );
};

export default ProgressBar;