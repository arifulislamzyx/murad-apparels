// app/pdf-viewer/page.tsx or pages/pdf-viewer.tsx

import ScrollablePDF from "@/components/scrollable-pdf";

export default function Certificates() {
  return (
    <div className="container p-4">
      <h1 className="text-xl font-bold mb-4">Scrollable PDFs</h1>
      <ScrollablePDF fileUrl="/RCS_Certificate.pdf" />
      <ScrollablePDF fileUrl="/SCOPE_CERTIFICATE_USB_TEX.pdf" />
    </div>
  );
}
