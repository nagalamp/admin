import Cookies from "js-cookie";

const TOKEN_KEY = "token";

export const authStorage = {
    getToken: () => Cookies.get(TOKEN_KEY),

    setToken: (token: string) => {
        Cookies.set(TOKEN_KEY, token, {
            expires: 7,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
    },

    removeToken: () => {
        Cookies.remove(TOKEN_KEY);
    },
};