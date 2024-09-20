"use client";
import { useState, useMemo } from "react";
import { Search, Lightbulb, Zap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import FloatingNavbar from "../navbar";
import Image from "next/image";
import ka from "./p.png";
import io from "./test.jpg";

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("");

  const cards = [
    {
      title: "Help Family",
      description:
        "Explore cutting-edge lamp designs that blend form and function.",
      icon: Lightbulb,
    },
    {
      title: "Get me a PS 5",
      description:
        "Discover lamps that save energy without compromising on brightness.",
      icon: Zap,
    },
    {
      title: "Buy me a baseball",
      description:
        "Create your own unique lamp designs with our easy-to-use tools.",
      icon: Sparkles,
    },
    {
      title: "Charity Grannny",
      description: "Control your lamps with voice commands or smartphone apps.",
      icon: Zap,
    },
    {
      title: "Eco-Friendly Materials",
      description: "Lamps made from sustainable and recyclable materials.",
      icon: Lightbulb,
    },
    {
      title: "Artistic Illumination",
      description:
        "Turn your space into an art gallery with our designer lamps.",
      icon: Sparkles,
    },
    {
      title: "Mood Lighting",
      description: "Set the perfect ambiance with our color-changing lamps.",
      icon: Sparkles,
    },
  ];

  const filteredCards = useMemo(() => {
    return cards.filter(
      (card) =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, cards]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The filtering is already handled by the useMemo hook
    console.log("Searching for:", searchQuery);
  };

  return (
    <>
      <FloatingNavbar />
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 mt-8 p-8">
        <div className="flex flex-col items-center max-w-6xl mx-auto">
          <h1 className="mt-8 bg-gradient-to-br from-slate-700 to-slate-900 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl">
            Fund The Ones <br /> You Like
          </h1>
          <div className="mt-8 w-full max-w-md">
            <form
              onSubmit={handleSearch}
              className="flex items-center space-x-2"
            >
              <div className="flex rounded-full border-2 border-primary focus:ring-2 focus:ring-primary  w-[700px] focus:border-transparent">
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  className="rounded-l-full border-none hover:border-none"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" size="icon" className="  rounded-r-full">
                  <Search className="h-4 w-4 bg-black" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </form>
          </div>
          <div className="mt-12  grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCards.map((card, index) => (
              <Card
                key={index}
                className="w-full  cursor-text max-w-sm h-[200px] bg-blue-50 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {<card.icon className="h-6 w-6 text-primary" />}
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="flex gap-2">
                    <Image alt="" src={ka} width={100} height={100} />
                    <p className=" text-wrap">
                      My name is Arun help me raise my poor kids it has been a
                      really wrong time since my children asked to buy them new
                      clothes for diwali
                    </p>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          {filteredCards.length === 0 && (
            <p className="mt-8 text-center text-gray-500">
              No matching projects found. Try a different search term.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
