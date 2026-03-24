import type { Metadata } from "next";
import NotFound from "./not-found.client";

export const metadata: Metadata = {
  title: "404 - Page Not Found - LearnLingo",
  description: "The page you are looking for does not exist on LearnLingo",
  openGraph: {
    title: "404 - Page Not Found - LearnLingo",
    description: "The page you are looking for does not exist on LearnLingo",
    url: "https://LearnLingo-virid-theta.vercel.app/not-found",
    images: [
      {
        url: "/images/homePage/Picture-1x.png",
        width: 1200,
        height: 630,
        alt: "LearnLingo",
      },
    ],
  },
};

const NotFoundPage = () => {
  return <NotFound />;
};

export default NotFoundPage;
