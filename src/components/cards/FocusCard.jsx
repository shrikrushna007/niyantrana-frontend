import { TrendingUp } from "lucide-react";

export default function FocusCard() {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex gap-4 border-l-4 border-green-400">
      <div className="bg-green-100 p-2 rounded-full">
        <TrendingUp className="text-green-600" />
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">Today’s Focus</h3>
        <p className="text-sm text-gray-600 mt-1">
          Focus on post-meal movement.  
          Take a 10-minute walk after meals to improve glucose control.
        </p>
      </div>
    </div>
  );
}
