import { Button, Row, Spinner } from "reactstrap";
import UserCard from "./UserCard";

const UserCards = ({ context, showClear, setShowClear, setSearch }) => {

    const handleClear = () => {
        context.clearSearch();
        setShowClear(false);
        setSearch("");
    }

    return (
        context.loading ?
            (
                <div className="text-center">
                    <Spinner color="danger" />
                </div>
            ) :
            (
                <>
                    {
                        showClear &&
                        <div className="text-center">
                            <Button size="sm" className="btn-secondary" onClick={handleClear}>Clear All</Button>
                        </div>
                    }
                    <Row className="w-100 d-flex justify-content-center my-3">
                        {
                            context.users.map((user) => <UserCard key={user.login} avatar_url={user.avatar_url} username={user.login} />)
                        }
                    </Row>
                </>
            )
    );
}

export default UserCards;