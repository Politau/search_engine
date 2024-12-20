"use client";
import Activities from './Activities';
import {useState} from "react";


export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-md fixed top-0 w-full">
                <div className="container mx-auto px-4 py-2 flex items-center">
                    <p className="mr-4 text-gray-600 font-semibold">Rechercher :</p>
                    <input
                        type="text"
                        placeholder="velo"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-grow p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </header>
            <main className="pt-16 container mx-auto">
                <Activities searchQuery={searchQuery}/>
            </main>
        </div>
    );
}
