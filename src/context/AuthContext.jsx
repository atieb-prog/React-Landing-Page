import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check if user is logged in on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem("currentUser", JSON.stringify(userData));
        localStorage.setItem("authToken", "token_abc123xyz456_1678932123456");
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("currentUser");
        localStorage.removeItem("authToken");
    };

    const isAuthenticated = () => {
        return !!localStorage.getItem("authToken");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use Auth Context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
