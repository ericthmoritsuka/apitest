const API_HEAD_URL = "http://localhost:8080/o/headless-delivery/";
const GET_URL = "v1.0/blog-postings/";
const siteId = "20121";
const email = "test@liferay.com";
const password = "learn";

const BTGetPosts = document.getElementById("getPosts");
const articleTitle = document.getElementById("articleTitle");
const articleBody = document.getElementById("articleBody");
const BTPost = document.getElementById("post");

function teste(event) {
  event.preventDefault();
  console.log("teste");
}

async function GET_POSTS() {
  // console.log("getting posts");
  try {
    const response = await fetch(`${API_HEAD_URL} + ${GET_URL} + ${siteId}`, {
      headers: {
        accept: "application/json",
        Authorization: "Basic " + btoa(`${email}:${password}`),
      },
    });
    const json = await response.json();
  } catch {
    erro;
  }
  {
    console.log(erro);
  }
  // console.log(json);
}

async function POST() {
  try {
    const response = await fetch(`${API_HEAD_URL} + ${GET_URL} + ${siteId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(`${email}:${password}`),
      },
      body: JSON.stringify({
        headline: `${articleTitle.value}`,
        articleBody:
          "This article was posted via REST services provided by Liferay DXP.",
      }),
    });
    const json = await response.json();
  } catch {
    erro;
  }
  {
    console.log(erro);
  }
  console.log(json);
}

BTGetPosts.addEventListener("click", GET_POSTS);
BTPost.addEventListener("click", teste);
