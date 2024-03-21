
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    // const isAuth = isAuthenticated();
    let isAuth = true
    const localData = JSON.parse(localStorage.getItem('teamInfo') as string)
    if(localData !== null) {
        isAuth= false
    }

    if (!isAuth) {
        return <Navigate to="/djbvhjdfv" replace />;
    }
    return children;
}
