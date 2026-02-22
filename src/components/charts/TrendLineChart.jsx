import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function getYDomain(data, key, paddingPercent = 0.1) {
  if (!data || data.length === 0) return ["auto", "auto"];

  const values = data
    .map((d) => d[key])
    .filter((v) => typeof v === "number");

  if (values.length === 0) return ["auto", "auto"];

  const min = Math.min(...values);
  const max = Math.max(...values);

  const range = max - min || 1;
  const padding = range * paddingPercent;

  return [min - padding, max + padding];
}

export default function TrendLineChart({
  title,
  data,
  dataKey,
  color = "#2563eb",
  unit = "",
}) {
  const yDomain = getYDomain(data, dataKey);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h4 className="font-semibold mb-3">{title}</h4>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              domain={yDomain}
              tickFormatter={(value) =>
                typeof value === "number" ? value.toFixed(2) : value
              }
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {unit && (
        <p className="text-xs text-gray-500 mt-1">
          Unit: {unit}
        </p>
      )}
    </div>
  );
}
