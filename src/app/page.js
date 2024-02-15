"use client";
import Image from "next/image";
import { CardProvider } from "./context/CardContext";
import HomeComp from "./components/HomeComp";

export default function Home() {
    return (
        <CardProvider>
            <HomeComp />
        </CardProvider>
    );
}
