export default function StatCard({ label, value, goal }) {
  return (
    <div className="card text-center">
      <p className="text-sm text-secondary-600 font-medium">{label}</p>
      <p className="text-2xl font-bold mt-2 text-primary-700">
        {value} / {goal}
      </p>
    </div>
  );
}
