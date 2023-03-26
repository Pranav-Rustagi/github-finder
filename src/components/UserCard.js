import { Link } from "react-router-dom"
import { Col } from "reactstrap"

const UserCard = ({ avatar_url, username }) => {
    return (
        <Col xs={6} sm={5} md={4} lg={3} xl={2} className="py-5 px-3 shadow border text-center rounded bg-light m-2">
            <div style={{ height: "75px" }}>
                <img src={avatar_url} alt="" width="75" className="rounded-circle border border-secondary d-block mx-auto border-2" />
            </div>
            <h6 className="mt-5 mb-4 mw-100 text-truncate"><i>{username}</i></h6>
            <Link to={`/user/${username}`} className="btn btn-dark btn-sm mx-auto d-inline-block">
                View more
            </Link>
        </Col>
    );
}


export default UserCard;