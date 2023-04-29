import axios from "axios";
import React, { useEffect, useState } from "react";
import j from "../../Assests/star.jpg"
import UpdateView from "./UpdateView";
import { Button, Card, Space } from "antd";

function ExisitngCustomerReview() {
    const [review, setReview] = useState([]);
    const [isReview, setIsReview] = useState(false);
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await axios.get('http://localhost:4000/create/review/' + localStorage.getItem('shop_id'));
                setReview(response.data.users);
                console.log(response.data.users)
                setIsReview(response.data.users.length > 0);
            } catch (error) {
                console.error(error);
            }
        }
        fetchReviews();
    }, []);

    function handleDelete(r) {
        axios.delete('http://localhost:4000/create/' + r._id).then(s => {
            console.log(s)
            window.location.reload()
        })
    }
    function handleUpdate(r) {
        setUpdate(true)
    }
    function handleReviewUpdate() {
        // Do something with the updated review data

        setUpdate(false);
        window.location.reload()
    }

    const cardViews = review?.map((review, index) => (
        <Space className="card-review" key={index} direction="horizontal">
            <Card className="card-container-review" style={{width:"600px"}}>
                <Space direction="vertical" >
                    <div className="name-review">
                        <h4 className="item-desc-review-name">{review.Customer_Name}</h4>
                        <h5 className="item-desc-review">{review.Review}</h5>
                    </div>
                    <div style={{marginLeft:"170px"}}>
                        {(review.star == 1) && <div>
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            /></div>}
                        {(review.star == 2) && <div>
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            />
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            /></div>}
                        {(review.star == 3) && <div>
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            />
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            /></div>}
                        {(review.star == 4) && <div>
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            />
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            />
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            />
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            /></div>}

                        {(review.star == 5) && <div>
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            />
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            />
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            />
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            />
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            /></div>}
                        {(review.star == 6) && <div>
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            />
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            />
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            />
                            <img
                                src={j}
                                width="30px"
                                height="30px"
                            /><img
                                src={j}
                                width="30px"
                                height="30px"
                            /><img
                                src={j}
                                width="30px"
                                height="30px"
                            /></div>}

                    </div>
                    <div>
                        {(review.Customer_Name == localStorage.getItem('customer_name') && <div>
                            {!update && <Button onClick={() => handleUpdate(review)} style={{ marginRight: "10px" }}>Update</Button>}
                            <Button onClick={() => handleDelete(review)} className="btnUpdate">Delete</Button>
                        </div>)}
                    </div>

                </Space>
            </Card>
            {update && review.Customer_Name == localStorage.getItem('customer_name') && <UpdateView data={review} onUpdate={handleReviewUpdate} />}
        </Space>
    ));



    const noReviews = <div className="card-review">
        <div className="card-container-review">
            <h4 className="item-desc-review-No">No Reviews Having</h4>
        </div>
    </div>

    return (
        <div>
            {isReview ? (
                <div className="item-review">
                    {cardViews}
                </div>
            ) : (
                noReviews
            )}
        </div>
    );
}

export default ExisitngCustomerReview;
