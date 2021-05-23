import { Link } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Thomas">
                Thomas
              </Link>
            </b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsam
          suscipit, magnam dicta ullam voluptatum a voluptatem animi perferendis
          facilis incidunt quo accusamus, laboriosam porro facere, maxime veniam
          ea optio.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Illum ipsam suscipit, magnam dicta ullam voluptatum a voluptatem animi
          perferendis facilis incidunt quo accusamus, laboriosam porro facere,
          maxime veniam ea optio.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Illum ipsam suscipit, magnam dicta ullam voluptatum
          a voluptatem animi perferendis facilis incidunt quo accusamus,
          laboriosam porro facere, maxime veniam ea optio.
        </p>
      </div>
    </div>
  );
}
