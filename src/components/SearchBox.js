import { Button, Col, Input, Row } from "reactstrap";

const SearchBox = ({ context, search, handleSearchUpdate, setShowClear }) => {

    const handleSearchClick = () => {
        context.getUsers(search);
        setShowClear(true);
        if(search?.trim() === "") {
            setShowClear(false);
        }
    }

    return (
        <Row>
            <Col md={6} className="mx-auto">
                <div className="d-flex">
                    <Input
                        value={search}
                        className="rounded-0"
                        onChange={handleSearchUpdate}
                        placeholder="Search users..."
                    />
                    <span className="mx-1"></span>
                    <Button
                        color="dark"
                        className="rounded-0"
                        onClick={handleSearchClick}
                    >
                        Search
                    </Button>
                </div>
            </Col>
        </Row>
    );
}

export default SearchBox;