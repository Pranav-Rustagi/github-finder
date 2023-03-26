import { useContext, useEffect, useState } from "react";
import { Container } from "reactstrap";
import SearchBox from "../components/SearchBox";
import UserCards from "../components/UserCards";
import AppContext from "../context/AppContext";

const Home = () => {
    const [search, setSearch] = useState("");
    const [showClear, setShowClear] = useState(false);
    const context = useContext(AppContext);

    const handleSearchUpdate = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        context.getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container className="py-5">
            <SearchBox context={context} search={search} handleSearchUpdate={handleSearchUpdate} setShowClear={setShowClear} />
            <br />
            <UserCards context={context} setSearch={setSearch} showClear={showClear} setShowClear={setShowClear} />
        </Container>
    );
}

export default Home;