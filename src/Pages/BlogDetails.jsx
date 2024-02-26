import { useParams, useSearchParams } from "react-router-dom";

export default function BlogDetails() {
  const { blogId = "", categoryId = "" } = useParams();
  const params = useSearchParams();
  console.log(params[0].get("color"));
  return (
    <div>
      Viewing blog id: {blogId} and of category {categoryId}
    </div>
  );
}
