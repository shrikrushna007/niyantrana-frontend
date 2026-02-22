export default function RiskTabs({ active, onChange }) {
  const tabs = ["metabolic", "cardio", "liver", "mental"];

  return (
    <div className="flex gap-2 mb-6">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition
            ${
              active === t
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  );
}
