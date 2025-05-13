"use client";
import axios from "axios";
import { Mail, MapPinPlusInside, PhoneOutgoing } from "lucide-react";
import React, { useState } from "react";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const [seccessMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    const feedBack = {
      name,
      email,
      message,
      phone,
    };
    console.log(feedBack);

    setLoading(true);
    try {
      const res = await axios.post(
        "https://backend.skbjobmarket.com/api/feedback",
        feedBack,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(loading);

      if (res.status === 200) {
        setSuccessMessage("Thank you for Contact Us");
        form.reset();
      } else {
        setSuccessMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setSuccessMessage("Error submitting Contact Form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto my-10">
        <h2 className="text-center text-3xl font-bold mb-8">Contact US</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6  rounded-lg">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <div className="space-y-4">
              <div>
                <div className="flex items-center space-x-2">
                  <MapPinPlusInside className="text-blue-500" />
                  <h3 className="text-lg font-bold">Office Address</h3>
                </div>
                <p className="font-bold mt-4">Bangladesh Office</p>
                <p>
                  Murad Apparels Limited South Gouripur Ashulia 1341,
                  Bangladesh.
                </p>
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <Mail className="text-blue-500" />

                  <h3 className="text-lg font-bold">General Enquiries</h3>
                </div>
                <p>info@muradapparelsltd.com</p>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <PhoneOutgoing className="text-blue-500" />
                  <h3 className="text-lg font-bold">Call Us</h3>
                </div>
                <p>Call us: +880 1873-358809</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {seccessMessage && (
              <div className="text-green-600 mb-4">{seccessMessage}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="YOUR NAME"
                required
                name="name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                required
                name="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="YOUR CONTACT NO"
                required
                name="phone"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="YOUR MESSAGE"
                required
                name="message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
