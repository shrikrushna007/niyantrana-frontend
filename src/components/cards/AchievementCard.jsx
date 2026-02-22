export default function AchievementCard({ title, points }) {
  return (
    <div className="card flex justify-between items-center">
      <div>
        <h4 className="font-semibold text-secondary-900">{title}</h4>
        <p className="text-xs text-secondary-500 mt-1">Achievement unlocked</p>
      </div>
      <span className="text-primary-600 font-bold text-lg">+{points}</span>
    </div>
  );
}
