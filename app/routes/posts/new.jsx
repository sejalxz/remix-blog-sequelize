import { json, redirect } from "@remix-run/node";
import { Link, useActionData } from "@remix-run/react";
import React from "react";
import { Blog } from "../../../models/index.server";

function validateTitle(title) {
  if (typeof title != "string" || title.length < 3) {
    return "Title should be atleast 3 characters long.";
  }
}
function validateBody(body) {
  if (typeof body != "string" || body.length < 5) {
    return "Body should be atleast 5 characters long.";
  }
}

export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");

  const fields = {
    post_title: title,
    post_body: body,
  };

  const fieldErrors = {
    post_title: validateTitle(title),
    post_body: validateBody(body),
  };

  // Creates array of the values and return true if there are any errors
  if (Object.values(fieldErrors).some(Boolean)) {
    console.log(fieldErrors);
    return json({ fieldErrors, fields }, { status: 400 });
  }

  const post = await Blog.create({
    post_title: title,
    post_body: body,
  });
  return redirect(`/posts/${post.id}`);
};

function NewPost() {
  const actionData = useActionData();
  return (
    <>
      <div className="page-header">
        <h1>NewPost</h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>
      <div className="page-content">
        <form method="POST">
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              defaultValue={actionData?.fields?.post_title}
            />
            <div className="error">
              <p>
                {actionData?.fieldErrors?.post_title &&
                  actionData?.fieldErrors?.post_title}
              </p>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="body">Post Body</label>
            <textarea
              name="body"
              id="body"
              defaultValue={actionData?.fields?.post_body}
            />
            <div className="error">
              <p>
                {actionData?.fieldErrors?.post_body &&
                  actionData?.fieldErrors?.post_body}
              </p>
            </div>
          </div>
          <button type="submit" className="btn btn-block">
            Add Post
          </button>
        </form>
      </div>
    </>
  );
}

export function ErrorBoundary({ error }) {
  console.log(error);
  return (
    <>
      <h1>Ooops! Couldn't add new post!</h1>
      <p>Try posting sometime laterrr!</p>
    </>
  );
}

export default NewPost;
