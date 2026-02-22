import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { drawLineChart } from "./pdfCharts";

export default function generateHealthReport({
  user,
  risks,
  confidence,
  watchData,
  labData,
}) {
  const doc = new jsPDF();

  /* =======================
     PAGE 1: SUMMARY
  ======================= */
  doc.setFontSize(18);
  doc.text("Niyantrana – Health Risk Report", 14, 20);

  doc.setFontSize(11);
  doc.text(`Name: ${user.name}`, 14, 32);
  doc.text(`Generated on: ${new Date().toDateString()}`, 14, 38);

  const riskTable = Object.entries(risks).map(
    ([key, r]) => [
      key.toUpperCase(),
      (r.score * 100).toFixed(0),
      r.band.toUpperCase(),
      r.confidence,
      r.trend,
    ]
  );

  autoTable(doc, {
    startY: 48,
    head: [["Risk", "Score", "Band", "Confidence", "Trend"]],
    body: riskTable,
  });

  const yAfterTable = doc.lastAutoTable.finalY + 10;
  doc.text(`Overall Data Confidence: ${confidence}%`, 14, yAfterTable);

  doc.setFontSize(9);
  doc.text(
    "This report is for preventive insight only and is not a medical diagnosis.",
    14,
    yAfterTable + 8
  );

  /* =======================
     PAGE 2: TREND CHARTS
  ======================= */
  doc.addPage();
  doc.setFontSize(16);
  doc.text("Health Trends", 14, 20);

  drawLineChart(doc, {
    x: 14,
    y: 30,
    width: 80,
    height: 40,
    label: "Daily Steps",
    data: watchData.steps,
  });

  drawLineChart(doc, {
    x: 110,
    y: 30,
    width: 80,
    height: 40,
    label: "Sleep Duration (hrs)",
    data: watchData.sleep,
  });

  drawLineChart(doc, {
    x: 14,
    y: 85,
    width: 80,
    height: 40,
    label: "Glucose (mg/dL)",
    data: labData.metabolic.map((d) => ({
      value: d.glucose,
    })),
  });

  drawLineChart(doc, {
    x: 110,
    y: 85,
    width: 80,
    height: 40,
    label: "GGT (U/L)",
    data: labData.liver.map((d) => ({
      value: d.ggt,
    })),
  });

  /* =======================
     PAGE 3: LAB VALUES
  ======================= */
  doc.addPage();
  doc.setFontSize(16);
  doc.text("Lab Results", 14, 20);

  autoTable(doc, {
    startY: 30,
    head: [["Date", "Glucose", "Triglycerides", "HDL"]],
    body: labData.metabolic.map((d) => [
      d.date,
      d.glucose,
      d.triglycerides,
      d.hdl,
    ]),
    theme: "striped",
    headStyles: { fillColor: [50, 100, 200] },
  });

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 10,
    head: [["Date", "GGT", "AST", "ALT"]],
    body: labData.liver.map((d) => [
      d.date,
      d.ggt,
      d.ast,
      d.alt,
    ]),
    theme: "striped",
  });

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 10,
    head: [["Date", "Weight (kg)", "Waist (cm)"]],
    body: labData.anthropometry.map((d) => [
      d.date,
      d.weight,
      d.waist_cm,
    ]),
    theme: "striped",
  });

  doc.save("Niyantrana_Health_Report.pdf");
}
