import { useSession } from "next-auth/react";

const AdminDashboard = () => {
    const { data: session, status } = useSession();
    
    if (status === 'loading') {
        return <span>Loading...</span>
    } 
    // if (!session) {
    //     return <span>Unauthorized</span>
    // }
    // if (session.user.isAdmin) {
    //     return <span>Welcome to Admin Page</span>
    // }
    else if (status === 'unauthenticated') {
        return <span>Unauthenticated</span>
    } else {
        if (session?.user.isAdmin) {
            return <span>Welcome to Admin Page</span>
        } else {
            return <span>Unathorized</span>
        }
    }
};

export default AdminDashboard;