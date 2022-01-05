import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
    const [admin, setAdmin] = useState(false);
    const [user, setUser] = useState({
        email: "",
        name: "",
    });
    let location = useLocation();

    useEffect(() => {
        let sessionUser = sessionStorage.getItem("user");
        if (sessionUser) {
            let parsedUser = JSON.parse(sessionUser);
            setUser(parsedUser);
        }

        const email = user?.email;
        fetch(`https://framex-server.herokuapp.com/api/checkAdmin/${email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data?.role === "admin") {
                    setAdmin(true);
                }

            })
    }, [user?.email]);

    if (user?.email && admin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
