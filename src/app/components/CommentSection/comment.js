import { imgPath } from "../../../../api/axios/helper";

const { default: Image } = require("next/image");

const Comment = ({ commentSec }) => {
    return (
        <div className="flex items-start space-x-4 p-4 bg-white shadow-md rounded-lg mb-4">
            <Image
                width={48}
                height={48}
                src={imgPath + commentSec.user_id?.image}
                alt={"su"}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div>
                <h4 className="text-lg font-bold">
                    {commentSec.user_id?.name}
                </h4>
                <p className="text-gray-700">{commentSec.comment}</p>
            </div>
        </div>
    );
};

export default Comment;
