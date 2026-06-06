
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

import api from "@/services/api";
import { theme } from "@/theme";
import { showSuccess, showError } from "@/utils/toast";

export default function LoginPage() {
    const router = useRouter();

    const [mobile, setMobile] = useState("");
    const [otp, setOtp] = useState("");

    const [step, setStep] = useState<"mobile" | "otp">("mobile");

    const [loading, setLoading] = useState(false);
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (countdown > 0) {
            timer = setTimeout(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
        }

        return () => clearTimeout(timer);
    }, [countdown]);

    const sendOtp = async () => {
        try {
            if (!mobile) {
                return showError("Please enter mobile number");
            }

            if (mobile.length !== 10) {
                return showError(
                    "Please enter a valid 10-digit mobile number"
                );
            }

            setLoading(true);

            const response = await api.post("/auth/send-otp", {
                mobile,
                deviceType: "web",
                userType: "driver",
            });

            if (response.data.success) {
                setStep("otp");
                setCountdown(30);

                showSuccess(
                    response.data.message || "OTP sent successfully"
                );
            }
        } catch (error: any) {
            showError(
                error?.response?.data?.message ||
                "Failed to send OTP"
            );
        } finally {
            setLoading(false);
        }
    };

    const verifyOtp = async () => {
        try {
            if (!otp) {
                return showError("Please enter OTP");
            }

            if (otp.length !== 6) {
                return showError("Please enter valid OTP");
            }

            setLoading(true);

            const response = await api.post("/auth/verify-otp", {
                mobile,
                otp,
                userType: "driver",
            });

            if (response.data.success) {
                Cookies.set("token", response.data.token, {
                    expires: 7,
                    sameSite: "strict",
                });

                showSuccess("Login successful");

                setTimeout(() => {
                    router.push("/dashboard");
                }, 500);
            }
        } catch (error: any) {
            showError(
                error?.response?.data?.message ||
                "OTP verification failed"
            );
        } finally {
            setLoading(false);
        }
    };

    const changeNumber = () => {
        setStep("mobile");
        setOtp("");
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Section */}
            <div
                className="hidden md:flex w-1/2 items-center justify-center"
                style={{
                    backgroundColor: theme.COLORS.primary,
                }}
            >
                <div className="text-center px-12">
                    <h1
                        className="font-bold mb-4"
                        style={{
                            fontSize: theme.FONT_SIZES.hero,
                            color: theme.COLORS.black,
                        }}
                    >
                        GaadiGuru
                    </h1>




                </div>
            </div>

            {/* Right Section */}
            <div
                className="w-full md:w-1/2 flex items-center justify-center px-6"
                style={{
                    backgroundColor: theme.COLORS.background,
                }}
            >
                <div
                    className="w-full max-w-md p-8"
                    style={{
                        backgroundColor: theme.COLORS.white,
                        borderRadius: theme.RADIUS.lg,
                        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    }}
                >
                    <h2
                        className="font-bold mb-2"
                        style={{
                            fontSize: theme.FONT_SIZES.heading,
                            color: theme.COLORS.black,
                        }}
                    >
                        Welcome
                    </h2>

                    <p
                        className="mb-8"
                        style={{
                            color: theme.COLORS.subtitle,
                        }}
                    >
                        Login with your mobile number
                    </p>

                    {/* MOBILE STEP */}
                    {step === "mobile" && (
                        <>
                            <label className="block mb-2 font-medium">
                                Mobile Number
                            </label>

                            <input
                                type="tel"
                                maxLength={10}
                                value={mobile}
                                onChange={(e) =>
                                    setMobile(
                                        e.target.value.replace(/\D/g, "")
                                    )
                                }
                                placeholder="Enter mobile number"
                                className="w-full p-4 border rounded-lg outline-none mb-6"
                            />

                            <button
                                onClick={sendOtp}
                                disabled={loading}
                                className="w-full py-4 rounded-lg font-semibold transition"
                                style={{
                                    backgroundColor: theme.COLORS.primary,
                                    color: theme.COLORS.black,
                                }}
                            >
                                {loading
                                    ? "Sending OTP..."
                                    : "Continue"}
                            </button>
                        </>
                    )}

                    {/* OTP STEP */}
                    {step === "otp" && (
                        <>
                            <div
                                className="mb-6 p-4 rounded-lg"
                                style={{
                                    backgroundColor:
                                        theme.COLORS.secondary,
                                }}
                            >
                                <p
                                    style={{
                                        color: theme.COLORS.black,
                                    }}
                                >
                                    OTP sent to
                                </p>

                                <div className="flex justify-between items-center mt-1">
                                    <strong>+91 {mobile}</strong>

                                    <button
                                        onClick={changeNumber}
                                        className="underline text-sm"
                                    >
                                        Change
                                    </button>
                                </div>
                            </div>

                            <label className="block mb-2 font-medium">
                                Enter OTP
                            </label>

                            <input
                                type="text"
                                inputMode="numeric"
                                maxLength={6}
                                value={otp}
                                onChange={(e) =>
                                    setOtp(
                                        e.target.value.replace(/\D/g, "")
                                    )
                                }
                                placeholder="123456"
                                className="
                  w-full
                  border
                  rounded-lg
                  py-4
                  text-center
                  text-2xl
                  tracking-[12px]
                  outline-none
                  mb-6
                "
                            />

                            <button
                                onClick={verifyOtp}
                                disabled={loading}
                                className="w-full py-4 rounded-lg font-semibold"
                                style={{
                                    backgroundColor: theme.COLORS.primary,
                                    color: theme.COLORS.black,
                                }}
                            >
                                {loading
                                    ? "Verifying..."
                                    : "Verify OTP"}
                            </button>

                            <div className="text-center mt-5">
                                {countdown > 0 ? (
                                    <span
                                        style={{
                                            color: theme.COLORS.subtitle,
                                        }}
                                    >
                                        Resend OTP in {countdown}s
                                    </span>
                                ) : (
                                    <button
                                        onClick={sendOtp}
                                        className="font-semibold"
                                        style={{
                                            color: theme.COLORS.info,
                                        }}
                                    >
                                        Resend OTP
                                    </button>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

