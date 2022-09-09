# JavaScript

## JavaScript

1. Follow the tutorial in https://www.w3schools.com/js/default.asp.

## React

1. Follow the tutorial in https://www.w3schools.com/react/default.asp.

## REST

1. Follow the tutorial [Consuming REST Services](https://learn.liferay.com/dxp/latest/en/headless-delivery/consuming-apis/consuming-rest-services.html).

   1. For now, only attempt to make REST calls using Basic Auth. You can ignore making calls using OAuth2.

1. Repeat the curl commands, but this time, using HTML/JavaScript. There is no need to use Node for this. Create a HTML page and use the JavaScript [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) api to replicate the curl commmands.

   1. In order to call Liferay REST services from your HTML page, you will need to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). You can enable CORS in Liferay by navigating to the Control Panel > System Settings > Security Tools > Portal Cross-Origin Resource Sharing (CORS).

   1. Add new configuration entry. Make sure it includes a URL pattern **\*/o/headless-delivery/\*\*** since the REST services we are calling are included in this path. Save your configuration.

   1. Accessing Liferay REST services will require authentication. You can provide this to your REST call by adding a header with the key **_Authorization_** and the value **_'Basic ' + btoa('test@liferay.com:test')_**. Read about [btoa](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa) for more information.

1. Send a pull request to **_brianchandotcom_**, replacing the PLACEHOLDER text below with the JavaScript commands.

<details>
	<summary>

	    //fetch functions to post, get all posts, get a specific post by id, delete a specific post by id.
	    //it may be necessary to change the siteId value and the authorization field in headers.
	    //Intern: Eric Moritsuka

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

  </summary>
</details>

1.  Post documents to Documents and Media first using curl and then with JavaScript.

1.  Send a pull request to **_brianchandotcom_**, replacing the PLACEHOLDER text below with the JavaScript commands.

    <details>
    	<summary>Show JavaScript commands.</summary>

        PLACEHOLDER

    </details>

## React and REST

<!--1. Type ***sudo dnf install nodejs npm*** to install Node and NPM.-->

1. Download https://github.com/brianchandotcom/liferay-learn/blob/master/docs/_template/js/setup_tutorial.sh.

1. Execute **_setup_tutorial.sh_** to ensure Node and NPM is setup correctly.

1. Follow the tutorial in https://github.com/ethib137/liferay-react-example.

   1. Do not follow the tutorial blindly. You have already executed some of the steps.

   1. Deploy the app to a Liferay docker image using the **_docker cp_** command. Read [Installing Apps and Other Artifacts to Containers](https://learn.liferay.com/dxp/latest/en/installation-and-upgrades/installing-liferay/using-liferay-docker-images/installing-apps-and-other-artifacts-to-containers.html) to learn how to use **_docker cp_**.

## Clay

1. Familiarize yourself with all the components in [Clay](https://clayui.com/docs/components/index.html).

## Clay, React, and REST

1. Write a new Liferay app to demonstrate [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations of Blogs, Documents and Media, and Knowledge Base using Clay, React, and REST.

1. Send a pull request to your neighbor that contains your new app. Your neighbor should be able to deploy your app to Liferay with a **_single_** command (e.g. **_df && ls_**). The app should also work when your neighbor adds it to any site in Liferay. That means the app must not contain hard coded IDs or URLs.

1. Review your neighbor's app that was sent to you. Compare and contrast your implementation with your neighbor's implementation.

1. Send a pull request to **_brianchandotcom_** that contains your new app.
