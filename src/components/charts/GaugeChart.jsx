export default function GaugeChart({ value }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40 rounded-full border-[10px] border-gray-200">
        <div
          className="absolute inset-0 rounded-full border-[10px] border-orange-400"
          style={{
            clipPath: `inset(${100 - value}% 0 0 0)`
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-orange-500">
            {value}
          </span>
        </div>
      </div>

      <p className="mt-3 text-sm text-gray-600">
        Your Metabolic Score
      </p>
    </div>
  );
}
