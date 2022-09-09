//Bloco do Basic info

const BTBasicInfo = document.querySelector("#BTBasic");

let basicBlogID;
let basicEmail;
let basicPassword;

const basicInfoClickHandler = (event) => {
  basicBlogID = document.querySelector("#blogID").value;
  basicEmail = document.querySelector("#email").value;
  basicPassword = document.querySelector("#password").value;
  const basicErrorMessage = document.querySelector(".basicErrorMessage");

  event.preventDefault();

  if (!basicEmail) {
    basicEmail = "teste@liferay.com";
  }

  if (!basicPassword) {
    basicPassword = "learn";
  }
  if (!basicBlogID) {
    basicBlogID = "20121";
    // basicErrorMessage.innerHTML = "Por favor, digite o ID do blog";
  } else {
    basicErrorMessage.innerHTML = "";
    console.log(basicEmail, basicPassword, basicBlogID);
  }
  document.querySelector("#blogID").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#password").value = "";
  return {
    basicBlogID,
    basicEmail,
    basicPassword,
  };
};

BTBasicInfo.addEventListener("click", basicInfoClickHandler);

//fetch functions
//basic information
const GET_URL = `http://localhost:8080/o/headless-delivery/v1.0/blog-postings/${basicBlogID}`;
const POST_URL = `http://localhost:8080/o/headless-delivery/v1.0/sites/${basicBlogID}/blog-postings`;

//post method

// async function POST(title, body) {
//   try {
//     const response = await fetch(`${API_HEAD_URL} + ${POST_URL}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Basic " + btoa(`${basicEmail}:${basicPassword}`),
//       },
//       body: JSON.stringify({
//         headline: title,
//         articleBody: body,
//       }),
//     });
//     const json = await response.json();
//   } catch {
//     erro;
//   }
// }

// function POST(title, body) {
//   const data = {
//     headline: title,
//     articleBody: body,
//   };
//   fetch(`${API_HEAD_URL}${POST_URL}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("success: ", data);
//     })
//     .catch((error) => {
//       console.error("Error: ", error);
//     });
// }

function POST(title, body) {
  fetch(POST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa("test@liferay.com:learn"),
    },
    body: JSON.stringify({
      headline: title,
      articleBody: body,
    }),
  });
}

//working with the html
const BTArticlePost = document.querySelector(".post #BTArticlePost");

let articleTitle;
let articleBody;

const postHandler = (event) => {
  event.preventDefault();
  const postErrorMessage = document.querySelector(".postErrorMessage");
  articleTitle = document.querySelector("#articleTitle").value;
  articleBody = document.querySelector("#articleBody").value;
  console.log(articleTitle, articleBody);

  if (!articleBody || !articleTitle) {
    postErrorMessage.innerHTML = "Insira algo nos campos";
  } else {
    postErrorMessage.innerHTML = "";
    POST(articleTitle, articleBody);
  }
};

BTArticlePost.addEventListener("click", postHandler);
