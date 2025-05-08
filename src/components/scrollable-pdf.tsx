"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface ScrollablePDFProps {
  fileUrl: string;
}

const ScrollablePDF = ({ fileUrl }: ScrollablePDFProps) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "auto",
        border: "1px solid #ccc",
        marginBottom: "20px",
      }}
    >
      <Worker
        workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
      >
        <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default ScrollablePDF;
