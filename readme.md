# Golf Starter Frontend

## Documentation

### Axios

Axios is how we send HTTP requests. This is how we will communicate with our backend.

* [Axios](https://github.com/axios/axios)
  * [Example](https://github.com/axios/axios#example)
  * [Request Aliases](https://github.com/axios/axios#request-method-aliases)
  * [Handling Errors](https://github.com/axios/axios#handling-errors)

### JSON

JSON is the format that we use to send and receive messages from our backend.

* [JSON](https://www.w3schools.com/js/js_json_intro.asp)
  * [Syntax](https://www.w3schools.com/js/js_json_syntax.asp)

### Pug

Pug is an HTML pre-processor. It uses whitespace indentation (like Python) to delimit tags rather than XML. I find it easer to write HTML this way.

* [Pug](https://github.com/pugjs/pug)
  * [Attributes](https://pugjs.org/language/attributes.html)
  * [Plain Text](https://pugjs.org/language/plain-text.html)
  * [Tags](https://pugjs.org/language/tags.html)

### Vue

Vue is the core framework we are using to create this website. It allows us to create reusable components for our UI and turn our website into a single page application.

* [Vue](https://vuejs.org/v2/guide/)
  * [Vuex](https://vuex.vuejs.org/)
  * [Vue-Router](https://router.vuejs.org/)

## Installation

### Required Software

Install any of the listed software below if you haven't already.

* [Git v2.14.1](https://git-scm.com/downloads)
* [Node v6.11.3 LTS](https://nodejs.org/en/)

### Frontend Setup

After the required software is installed, use the command prompt to clone this repository.

```
> git clone https://github.com/scott-rc/GolfStarter-frontend.git
```

Now, let's go into the newly cloned directory and use npm (Node Package Manager) to install our frontend dependencies.

```
> cd GolfStarter-frontend
> npm install
```

Finally let's build and start our frontend.

```
> npm run build
  ...
> npm run start
```

If you see

> Listening for requests on port 8080

Then code was compiled correctly and our frontend server is up and running!

Assuming you have the backend up and running, head over to [localhost:8080](http://localhost:8080) in your browser to see the website!