import leadTime from "../../assets/what_we_do/lead-time.webp";
import moq from "../../assets/what_we_do/moq.webp";
import sample from "../../assets/what_we_do/sample.webp";
import paymentTerms from "../../assets/what_we_do/payment-terms.png";
import design from "../../assets/what_we_do/design.webp";
import processQuality from "../../assets/what_we_do/process-quality.png";
import manufaturing from "../../assets/what_we_do/manufacturing.webp";
import erp from "../../assets/what_we_do/erp.webp";

export const whatWeDoItems = [
  {
    title: "Lead Time",
    description:
      "90 days from fabric approval (imported fabric by sea shipment) – 120 days from fabric / print design or color selection (imported fabric by sea shipment).",
    image: leadTime,
  },
  {
    title: "MOQ",
    description:
      "Minimum order quantity is 2,000 pieces per color, per style. A large order quantity allows higher efficiency at a reduced manufacturing cost.",
    image: moq,
  },
  {
    title: "Sample",
    description:
      "Proto/First sample: 4–7 days\nSales sample: 6–10 weeks\nPP sample: 10 days\nSize set sample: 10 days (after bulk fabric received).",
    image: sample,
  },
  {
    title: "Payment Terms",
    description:
      "Telegraphic Transfer (T/T): All sample charges, small orders, and advance purchases must be paid through bank-to-bank T/T. Bulk orders also follow T/T as per agreement.",
    image: paymentTerms,
  },
  {
    title: "Design & Development",
    description:
      "We help customers create fits and designs for garments. We offer various fabrications, accessories, and packaging methods (flat pack, boxed pack, hanging garments, etc).",
    image: design,
  },
  {
    title: "Process & Quality",
    description:
      "We conduct internal audits, process checks, third-party testing, and pre-final inspections at AQL 2.5 before shipment.",
    image: processQuality,
  },
  {
    title: "Manufacturing",
    description:
      "Our team ensures high quality and consistent craftsmanship, regardless of whether order quantity is 1,000 or 100,000 pieces.",
    image: manufaturing,
  },
  {
    title: "ERP (Enterprise Resource Planning)",
    description:
      "We use ERP systems to minimize material waste and increase production efficiency.",
    image: erp,
  },
];
