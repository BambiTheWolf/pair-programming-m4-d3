import { Button, ListGroup } from "react-bootstrap";

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThkMzg2YTVmMzRhZDAwMTUzOWYxOWEiLCJpYXQiOjE2NDc5NTcxMTksImV4cCI6MTY0OTE2NjcxOX0.P8kZTDgElmFuq7Wa5Wd89-Y8XTpxTnWHvRic3iiZ6-0",
        },
      }
    );
    if (response.ok) {
      alert("comment deleted!");
    } else {
      alert("comment NOT deleted!");
    }
  } catch (error) {
    alert("comment NOT deleted!");
  }
};

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {comment.comment}
    <Button
      variant="danger"
      className="ml-2"
      onClick={() => deleteComment(comment._id)}
    >
      D
    </Button>
  </ListGroup.Item>
);

export default SingleComment;
