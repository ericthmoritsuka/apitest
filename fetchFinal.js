//fetch functions to post, get all posts, get a specific post by id, delete a specific post by id.
//it may be necessary to change the siteId value and the authorization field in headers.

const siteId = "20121";

function POST() {
  fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/blog-postings`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa("test@liferay.com:learn"),
      },
      body: JSON.stringify({
        headline: "Test Blog Entry from REST Services",
        articleBody:
          "This article was posted via REST services provided by Liferay DXP.",
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success: ", data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function GET() {
  fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/sites/${siteId}/blog-postings/`,
    {
      headers: {
        Authorization: "Basic " + btoa("test@liferay.com:learn"),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success: ", data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function GET_BLOG_BY_ID(blogId) {
  fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${blogId}`,
    {
      headers: {
        Authorization: "Basic " + btoa("test@liferay.com:learn"),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success: ", data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}

function DELETE_BLOG_BY_ID(blogId) {
  fetch(
    `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${blogId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: "Basic " + btoa("test@liferay.com:learn"),
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Success: ", data);
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}
