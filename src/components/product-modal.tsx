// components/ProductModal.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IAProduct } from "@/type/product";

const ProductModal = ({ product }: { product: IAProduct }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="mt-4 px-4 py-2 border">
        Ask a Question About This Product
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg w-[90%] max-w-md"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
            >
              <button
                className="float-right text-sm"
                onClick={() => setOpen(false)}
              >
                CLOSE
              </button>
              <h3 className="text-lg font-bold mb-4">{product.productName}</h3>
              <form className="flex flex-col gap-2">
                <input
                  className="border p-2"
                  placeholder="Full Name"
                  required
                />
                <input
                  className="border p-2"
                  placeholder="Email Address"
                  required
                />
                <input
                  className="border p-2"
                  value={product.productCode}
                  readOnly
                />
                <textarea
                  className="border p-2"
                  placeholder="Your Message"
                  required
                />
                <button type="submit" className="bg-blue-600 text-white py-2">
                  Submit Question
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductModal;
