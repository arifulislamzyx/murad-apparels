import Image from "next/image";
import React from "react";

type Event = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
};

const events: Event[] = [
  {
    id: 1,
    title: "Texworld Paris 2024",
    date: "February 5–7, 2024",
    location: "Paris, France",
    description:
      "Murad Apparels showcased our sustainable fabric innovations and networked with global textile buyers.",
    image: "/events/texworld.jpg",
  },
  {
    id: 2,
    title: "Bangladesh Apparel Expo",
    date: "March 20–22, 2024",
    location: "Dhaka, Bangladesh",
    description:
      "We highlighted our latest outerwear collection and connected with local and international partners.",
    image: "/events/apparel-expo.jpg",
  },
  {
    id: 3,
    title: "Texworld Paris 2024",
    date: "February 5–7, 2024",
    location: "Paris, France",
    description:
      "Murad Apparels showcased our sustainable fabric innovations and networked with global textile buyers.",
    image: "/events/texworld.jpg",
  },
  {
    id: 4,
    title: "Bangladesh Apparel Expo",
    date: "March 20–22, 2024",
    location: "Dhaka, Bangladesh",
    description:
      "We highlighted our latest outerwear collection and connected with local and international partners.",
    image: "/events/apparel-expo.jpg",
  },
];

const EventsPage = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        Our Recent Events
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
          >
            <div className="relative w-full h-52 mb-4">
              <Image
                src={event.image}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-sm text-gray-500 mb-1">
              {event.date} — {event.location}
            </p>
            <p className="text-gray-700 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
