import { useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import AppContext from "../context/AppContext";
import UserDetails from "../components/UserDetails"

const UserPage = () => {
    const { user_name } = useParams();
    const context = useContext(AppContext);

    useEffect(() => {
        context.getUserDetails(user_name);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="my-3 px-3">
                <Link to="/" className="btn btn-dark">&larr; Back</Link>
            </div>

            {
                context.loading || context.user_details === null ?
                    <div className="text-center my-5">
                        <Spinner color="danger" />
                    </div> :
                    <UserDetails user={context.user_details} />
            }
        </>
    );
}

export default UserPage;