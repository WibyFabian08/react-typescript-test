import { ArticleType } from "../services/data-types";
import {
  Card,
  Button,
} from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

const CardNews = (props: { item: ArticleType }) => {
  return (
    <Card
      cover={
        <img
          alt={props.item.author}
          src={
            props.item.urlToImage ||
            "https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg"
          }
        />
      }
      actions={[
        <Link style={{ padding: "5px" }} to={props.item.url} target="_blank">
          <Button size="large" style={{ float: "right" }}>
            Detail News
          </Button>
        </Link>,
      ]}
    >
      <Meta title={props.item.author} description={props.item.title} />
    </Card>
  );
};

export default CardNews;
