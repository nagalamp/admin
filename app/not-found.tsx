import Link from "next/link";
import { theme } from "@/theme";

export default function NotFound() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: theme.COLORS.background,
                padding: "24px",
                textAlign: "center",
            }}
        >
            <h1
                style={{
                    fontSize: "72px",
                    fontWeight: 700,
                    color: theme.COLORS.primary,
                    margin: 0,
                }}
            >
                404
            </h1>

            <h2
                style={{
                    fontSize: "28px",
                    fontWeight: 600,
                    color: theme.COLORS.text,
                    marginTop: "12px",
                }}
            >
                Page Not Found
            </h2>

            <p
                style={{
                    fontSize: "16px",
                    color: theme.COLORS.textSecondary,
                    marginTop: "8px",
                    maxWidth: "500px",
                }}
            >
                Sorry, the page you are looking for does not exist or has been moved.
            </p>

            <Link
                href="/"
                style={{
                    marginTop: "24px",
                    padding: "12px 24px",
                    backgroundColor: theme.COLORS.primary,
                    color: "#fff",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: 600,
                }}
            >
                Go to Home
            </Link>
        </div>
    );
}