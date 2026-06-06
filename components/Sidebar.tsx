"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import {
    LayoutDashboard,
    Car,
    LogOut,
} from "lucide-react";

import { theme } from "@/theme";

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const getUser = () => {
        try {
            const userCookie = Cookies.get("user");

            if (!userCookie) return null;

            return JSON.parse(userCookie);
        } catch {
            return null;
        }
    };

    const user = getUser();

    const displayName =
        user?.name ||
        user?.fullName ||
        user?.username ||
        "Guest User";

    const displayMobile =
        user?.mobile ||
        user?.phone ||
        "";

    const initials = displayName
        .split(" ")
        .map((word: string) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

    const menus = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Vehicle Types",
            path: "/vehicle-types",
            icon: LayoutDashboard,
        }, {
            name: "Live Traffic",
            path: "/live-traffic",
            icon: LayoutDashboard,
        }, {
            name: "Drivers",
            path: "/drivers-page",
            icon: LayoutDashboard,
        }
    ];

    const logout = () => {
        Cookies.remove("token");
        Cookies.remove("user");
        router.push("/login");
    };

    return (
        <aside
            className="w-72 flex flex-col min-h-screen"
            style={{
                backgroundColor: theme.COLORS.black,
                borderRight: "1px solid #1F2937",
            }}
        >
            {/* Logo */}
            <div
                className="p-6"
                style={{
                    borderBottom: "1px solid #1F2937",
                }}
            >
                <h2
                    className="font-bold"
                    style={{
                        color: theme.COLORS.white,
                        fontSize: theme.FONT_SIZES.xxl,
                    }}
                >
                    GaadiGuru
                </h2>

                <p
                    style={{
                        color: "#9CA3AF",
                        fontSize: theme.FONT_SIZES.sm,
                    }}
                >
                    Admin Panel
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6">
                {menus.map((menu) => {
                    const Icon = menu.icon;

                    const active =
                        pathname === menu.path;

                    return (
                        <Link
                            key={menu.path}
                            href={menu.path}
                            className="flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all"
                            style={{
                                backgroundColor: active
                                    ? theme.COLORS.primary
                                    : "transparent",

                                color: active
                                    ? theme.COLORS.black
                                    : theme.COLORS.white,
                            }}
                        >
                            <Icon size={20} />

                            <span
                                className="font-medium"
                                style={{
                                    fontSize: theme.FONT_SIZES.md,
                                }}
                            >
                                {menu.name}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* User Info */}
            <div
                className="px-4 py-4"
                style={{
                    borderTop: "1px solid #1F2937",
                }}
            >


                <button onClick={logout} className="flex items-center gap-2 px-3 py-2 rounded-lg font-medium mx-auto" style={{ backgroundColor: "#991B1B", color: theme.COLORS.white, fontSize: theme.FONT_SIZES.sm, }} > <LogOut size={14} /> Logout </button>
            </div>
        </aside>
    );
}
