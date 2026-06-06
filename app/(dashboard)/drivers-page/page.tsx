"use client";

import { Truck } from "lucide-react";

export default function DriversPage() {
    return (
        <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-400 rounded-xl">
                    <Truck size={24} />
                </div>

                <div>
                    <h1 className="text-3xl font-bold">
                        Driver
                    </h1>

                    <p className="text-gray-500">
                        Manage vehicle categories
                    </p>
                </div>
            </div>

            <div className="bg-white rounded-2xl border p-8">
                <div className="text-center py-20">
                    <Truck
                        size={64}
                        className="mx-auto text-gray-300 mb-4"
                    />

                    <h2 className="text-2xl font-semibold mb-2">
                        Vehicle Types
                    </h2>

                    <p className="text-gray-500">
                        Create and manage Bike, Auto,
                        Car and Truck categories.
                    </p>
                </div>
            </div>
        </div>
    );
}