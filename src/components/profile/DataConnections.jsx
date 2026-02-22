export default function DataConnections() {
  return (
    <div className="card">
      <h4 className="font-semibold mb-4 text-secondary-900">
        Data & Devices
      </h4>

      <ul className="space-y-3 text-sm">
        <li className="flex justify-between">
          <span className="text-secondary-700">Wearable Device</span>
          <span className="text-success-600 font-medium">
            Samsung Galaxy Fit 3
          </span>
        </li>

        <li className="flex justify-between">
          <span className="text-secondary-700">Watch Data</span>
          <span className="text-success-600">
            Connected
          </span>
        </li>

        <li className="flex justify-between">
          <span className="text-secondary-700">Lab Reports</span>
          <span className="text-success-600">
            Synced
          </span>
        </li>

        <li className="flex justify-between">
          <span className="text-secondary-700">Last Sync</span>
          <span className="text-secondary-500">
            Today
          </span>
        </li>
      </ul>
    </div>
  );
}
