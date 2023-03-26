import { useEffect } from "react";
import { useContext } from "react";
import { Container, Spinner } from "reactstrap";
import UserDetails from "../components/UserDetails";
import AppContext from "../context/AppContext";

const About = () => {
    const context = useContext(AppContext);
    useEffect(() => {
        context.getUserDetails("Pranav-Rustagi");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <Container className="py-5">
            <h3>About Github-Finder</h3>
            <p className="m-1">◼️ Github-Finder is a frontend web application built using React Js.</p>
            <p className="m-1">◼️ This application makes use of Github APIs and help users search users using some query.</p>
            <p className="m-1">◼️ It also enables users to view all the information relevant to the github users.</p>
            <br />
            <h3>About developer</h3>
            {
                context.loading || context.user_details === null ?
                    <div className="my-5 text-center">
                        <Spinner color="danger" />
                    </div> :
                    <UserDetails user={context.user_details} />
            }
        </Container>
    );
}

export default About;