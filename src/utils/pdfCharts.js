export function drawLineChart(doc, {
  x,
  y,
  width,
  height,
  data,
  label,
}) {
  if (!data || data.length < 2) return;

  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;

  const stepX = width / (data.length - 1);

  doc.setFontSize(10);
  doc.text(label, x, y - 6);

  doc.setDrawColor(180);
  doc.rect(x, y, width, height);

  doc.setDrawColor(40, 130, 200);

  data.forEach((d, i) => {
    const px = x + i * stepX;
    const py =
      y +
      height -
      ((d.value - min) / range) * height;

    if (i > 0) {
      doc.line(
        x + (i - 1) * stepX,
        y +
          height -
          ((values[i - 1] - min) / range) * height,
        px,
        py
      );
    }
  });

  doc.setFontSize(8);
  doc.text(`Min: ${min}`, x, y + height + 6);
  doc.text(`Max: ${max}`, x + width - 25, y + height + 6);
}
