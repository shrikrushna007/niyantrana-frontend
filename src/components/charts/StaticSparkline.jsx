export default function StaticSparkline() {
  return (
    <svg
      width="96"
      height="32"
      viewBox="0 0 96 32"
      className="opacity-80"
    >
      <polyline
        points="
          0,22
          8,18
          16,20
          24,14
          32,16
          40,10
          48,12
          56,8
          64,11
          72,6
          80,8
          88,4
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
