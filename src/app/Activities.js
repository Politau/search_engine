"use client";

import React, { useEffect, useState } from "react";

const Activities = ({ searchQuery }) => {
    const [activities, setActivities] = useState([]);
    const [filteredActivities, setFilteredActivities] = useState([]);

    useEffect(() => {
        fetch("/data/donnees.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erreur lors du chargement des données");
                }
                return response.json();
            })
            .then((data) => {
                setActivities(data);
                setFilteredActivities(data);
            })
            .catch((error) => {
                console.error("Erreur:", error);
            });
    }, []);

    useEffect(() => {
        const results = activities.filter((activity) =>
            activity.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredActivities(results);
    }, [searchQuery, activities]);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-red-500">Liste des Activités</h1>
            <ul>
                {filteredActivities.map((activity, index) => (
                    <li key={index} className="activity-item mb-4">
                        <h2 className="text-xl font-semibold text-black">{activity.title}</h2>
                        <p className="text-black">Catégorie: {activity.type}</p>
                        {activity.link && (
                            <a
                                href={activity.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                Réserver
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Activities;
