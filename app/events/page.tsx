// app/events/page.tsx
import type { Metadata } from "next";
import { v2 as cloudinary } from "cloudinary";
import EventsClient, { type SchoolEvent } from "./EventsClient";

export const metadata: Metadata = {
  title: "Events | GBR Group of Schools",
  description: "Explore GBR Schools events through animated, interactive event carousels.",
};

// Securely configure Cloudinary on the server side
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// The base event data. Notice we are using 'folder' instead of a hardcoded 'images' array!
const baseEvents = [
  {
    id: "parents-activity",
    title: "Parents Activity Day",
    description: "Engaging workshops and collaborative activities bringing our school community and parents together.",
    duration: 34,
    folder: "school-website/events/parentsactivity",
  },
  {
    id: "40-years-celebration",
    title: "40 Years Celebration",
    description: "Honoring four decades of educational excellence and historic milestones.",
    duration: 38,
    reverse: true,
    folder: "school-website/events/40yearcelb",
  },
  {
    id: "christmas",
    title: "Christmas Celebration",
    description: "Spreading holiday cheer with festive carols, decorations, and seasonal performances.",
    duration: 36,
    folder: "school-website/events/chirstmas",
  },
  {
    id: "dussehra",
    title: "Dussehra Festival",
    description: "Celebrating traditional cultural heritages and seasonal festive rituals.",
    duration: 32,
    folder: "school-website/events/dusheera",
  },
  {
    id: "field-trip",
    title: "Educational Field Trip",
    description: "Experiential learning journeys outside the classroom boundaries.",
    duration: 30,
    reverse: true,
    folder: "school-website/events/fieldtrip",
  },
  {
    id: "fruit-day",
    title: "Fruit Day Celebration",
    description: "Promoting healthy habits and learning about nature's vibrant nutrition.",
    duration: 30,
    folder: "school-website/events/fruitday",
  },
  {
    id: "graduation-day",
    title: "Graduation Day",
    description: "Celebrating the hard work, milestones, and bright futures of our graduating students.",
    duration: 32,
    folder: "school-website/events/graduationday",
  },
  {
    id: "pongal",
    title: "Pongal Festival",
    description: "Embracing seasonal harvest traditions with joy, community, and gratitude.",
    duration: 30,
    reverse: true,
    folder: "school-website/events/pongal",
  },
  {
    id: "rainbow-kids",
    title: "Rainbow Kids Activities",
    description: "Fun, colorful, and creative developmental activities for our early learners.",
    duration: 30,
    folder: "school-website/events/rainbowkids",
  },
  {
    id: "science-odyssey",
    title: "Science Odyssey Exhibit",
    description: "Showcasing student curiosity, innovative projects, and scientific discoveries.",
    duration: 34,
    folder: "school-website/events/science odyssey",
  },
  {
    id: "sports-day",
    title: "Annual Sports Meet",
    description: "Celebrating teamwork, athletic dedication, and competitive school spirit.",
    duration: 38,
    reverse: true,
    folder: "school-website/events/sportsday",
  },
];

// This must be an async function to fetch the data before rendering the page
export default async function EventsPage() {

  // Map through each event and fetch its specific folder from Cloudinary
  const populatedEvents: SchoolEvent[] = await Promise.all(
    baseEvents.map(async (event) => {
      try {
        const { resources } = await cloudinary.search
          .expression(`folder:"${event.folder}"`)
          .sort_by("public_id", "asc")
          .max_results(100) // Fetches up to 100 photos per event folder
          .execute();

        // Extract just the public_ids to send to the CldImage component
        const images = resources.map((file: { public_id: string }) => file.public_id);

        return {
          id: event.id,
          title: event.title,
          description: event.description,
          duration: event.duration,
          reverse: event.reverse,
          images,
        };
      } catch (error) {
        console.error(`Error fetching images for ${event.title}:`, error);
        // Fallback so the page doesn't crash if a folder is empty or mistyped
        return {
          ...event,
          images: [],
        };
      }
    })
  );

  // Pass the fully populated data directly into your beautiful client component
  return <EventsClient eventsData={populatedEvents} />;
}
