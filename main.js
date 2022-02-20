// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// GET REQUEST
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

function getTodos() {
	console.log('GET Request');

	// 1️⃣
	// axios({
	//     method: 'get',
	//     url: 'https://jsonplaceholder.typicode.com/todos',
	//     params: {
	//         _limit: 5
	//     }
	// })
	//     .then(res => {
	//         showOutput(res);
	//         console.log(res);
	//     })
	//     .catch(err => console.error(err));


	// 2️⃣  WE CAN LEAVE OUT .get
	axios
		// ❗️❗️❗️.get('https://jsonplaceholder.typicode.com/todos?_limit=5', params: { _limit: 5 } { ❗️❗️❗️
		.get('https://jsonplaceholder.typicode.com/todos?_limit=5', {
			timeout: 5000
		})
		.then(res => {
			showOutput(res);
			console.log(res);
		})
		.catch(err => console.error(err));
}

// ❗️❗️❗️ LIMIT DATA: ❗️❗️❗️
// PASS IN A URL PARAM "params: { _limit: 5 }"



// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// POST REQUEST
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

function addTodo() {
	console.log('POST Request');

	// 1️⃣
	// axios({
	//     method: 'post',
	//     url: 'https://jsonplaceholder.typicode.com/todos',
	//     data: {
	//         title: "New Todo",
	//         completed: false
	//     }
	// })
	//     .then(res => {
	//         showOutput(res);
	//         console.log(res);
	//     })
	//     .catch(err => console.error(err));

	// 2️⃣  SHORTER:
	axios
		.post('https://jsonplaceholder.typicode.com/todos', {
			title: 'New Todo',
			completed: false
		})
		.then(res => showOutput(res))
		.catch(err => console.error(err));

}

//  ❗️❗️❗️ THIS IS OUR RESPONSE WITH THE DATA WE POSTED PLUS THE ID THAT IS GENERATED ON THE SERVER FOR US: ❗️❗️❗️

// {
//     "title": "New Todo",
//         "completed": false,
//             "id": 201
// }


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// PUT/PATCH REQUEST
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// PUT: TO REPLACE ENTIRE RESOURCE
// PATCH: UPDATES IT INCREMENTALLY

// HAVE TO INCLUDE THE ID IN THE URL
// THE USER ID WILL BE GONE IN RESPONSE

// function updateTodo() {
//     console.log('PUT/PATCH Request');

//     axios
//         .put('https://jsonplaceholder.typicode.com/todos/1', {
//             title: 'Updated Todo',
//             completed: true
//         })
//         .then(res => showOutput(res))
//         .catch(err => console.error(err));

// }

// DATA WILL INCLUDE USER ID, WE DIDN'T REPLACE IT, IT ONLY REPLACED WHAT WE SPECIFIED (TITLE, COMPLETED)
function updateTodo() {
	console.log('PUT/PATCH Request');

	axios
		.patch('https://jsonplaceholder.typicode.com/todos/1', {
			title: 'Updated Todo',
			completed: true
		})
		.then(res => showOutput(res))
		.catch(err => console.error(err));

}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// DELETE REQUEST
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// DON'T PASS DATA IN AS WE'RE SIMPLY DELETING IT
function removeTodo() {
	console.log('DELETE Request');

	axios
		.delete('https://jsonplaceholder.typicode.com/todos/1')
		.then(res => showOutput(res))
		.catch(err => console.error(err));

}

// RESPONSE WILL RETURN AN EMPTY OBJECT BUT EVERY API CAN BE DIFFERENT

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// SIMULTANEOUS DATA (GET POSTS AND TODOS AT THE SAME TIME)
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// AXIOS.ALL TAKES IN AN ARRAY OF REQUESTS

function getData() {
	console.log('Simultaneous Request');

	axios
		.all([
			axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5'),
			axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
		])

		// 1️⃣
		// .then(res => {
		// 	console.log(res[0]);	// TODOS
		// 	console.log(res[1]);	// POSTS
		// 	showOutput(res[1]);		// showOutput CAN HANDLE ONLY ONE OF THEM
		// })

		// 2️⃣ ❗️❗️❗️ REFACTOR WITH axios.spread() ❗️❗️❗️
		.then(axios.spread((todos, posts) => showOutput(posts)))
		.catch(err => console.error(err));
	// WE CAN USE MORE DESCRIPTIVE VARIABLE NAMES (todos, posts VS. res[0], res[1])
}


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// CUSTOM HEADERS
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// WHEN WE HAVE AUTHITENTICATION WITH JSON WEB TOKENS,
// MAKE A REQUEST TO LOGIN, VALIDATE LOGIN AND WE GET BACK A TOKEN
// WE HAVE TO SEND THAT TOKEN IN THE HEADER TO ACCESS PROTECTED ROUTES

function customHeaders() {
	console.log('Custom Headers');

	const config = {
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'sometoken'
		}
	};

	axios
		.post(
			'https://jsonplaceholder.typicode.com/todos',
			{
				title: 'New Todo',
				completed: false
			},
			config
		)
		.then(res => showOutput(res))
		.catch(err => console.error(err));

}


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
	console.log('Transform Response');
}


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// ERROR HANDLING
function errorHandling() {
	console.log('Error Handling');
}

// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// 
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 
// CANCEL TOKEN
function cancelToken() {
	console.log('Cancel Token');
}


// 🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
// INTERCEPTING REQUESTS & RESPONSES
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 

// CREATE INTERCEPTOR TO RUN SOME KIND OF FUNCTIONALITY, LIKE A LOGGER FOR EVERY REQ WE MAKE
// TAKES A FUNCION config() AS A PARAM SO WE HAVE ACCESS TO ANYTHING IN CONFIG(METHOD, URL, TIMESTAMP  ETC)
axios.interceptors.request.use(
	config => {
		console.log(
			`From Interceptor: ${config.method.toUpperCase()} request sent to ${config.url
			} at ${new Date().getTime()}`
		);

		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

// LOG:
// From Interceptor: GET request sent to https://jsonplaceholder.typicode.com/todos?_limit=5 a

// AXIOS INSTANCES

// Show output in browser
function showOutput(res) {
	document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
	.getElementById('transform')
	.addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);