---
title: "Cookie-Based Redirection with Express.js"
date: "2020-10-23"
preview: |
  Overall, where Scrum feels like a structured approach with an eye on speed, Kanban feels like a _flowing river_. There’s no time-boxing. Instead, Kanban focuses on creating a clean and narrow channel for your work to flow though. 
  
  Let’s take a look at the Kanban process.
coverImage: "/blog/jens-johnsson-36a3u4_uuhy-unsplash.jpg"
---

Many sites these days have strictly separated their marketing pages from the main web app.

- `appdomain.com/` is where the marketing landing page lives
- `appdomain.com/app` is where the web app lives

It's common to redirect the users to _/app_ when they have an existing authentication cookie for a faster experience.

If you don't have a dedicated proxy and host both the landing pages and the web app on the same [Express.js](https://expressjs.com/) server, your setup might look as follows.

```

import express from "express";
import path from "path";

const app = express();

// Serves web app
app.use(
    "/app",
    express.static(path.join(
        path.resolve(),
        "..",
        "app/build"
    ))
);

// Serves landing pages
app.use(
    "/",
    express.static(path.join(
        path.resolve(),
        "..",
        "landing/build"
    ))
);

const port = 8080;

app.listen(port, () => {
    console.log(\`started on port ${port}\`);
});

_index.js_

```

To set up the server-side redirect, we need to pull together a few pieces:

1. Read the Cookies
2. Write Redirect Middleware
3. _Use_ Redirect Middleware

### 1\. Read the Cookies

To read the cookies, we can use the `[cookie-parser](https://github.com/expressjs/cookie-parser)` library. After doing `npm install cookie-parser`, we add it to _index.js_ as the first piece of middleware as follows:

```

const app = express();
app.use(cookieParser());

```

This will result in cookies available at `request.cookies` within our middleware.

### 2\. Write Redirect Middleware

Next up, we need to create a piece of middleware that'll look at the present cookies and perform the redirect if an appropriate cookie is found.

If you're unsure about the concept of middleware in Express.js, have a quick peek at [the docs](https://expressjs.com/en/guide/writing-middleware.html) first.

```

const redirectIfAuthenticated = (cookieKey, cookieTrueValue, redirectPath) => (req, res, next) => {
    const hasCookie = cookieKey in req.cookies;
    const isAuthenticated = hasCookie
        && req.cookies\[cookieKey\] === cookieTrueValue;

    if (isAuthenticated) {
        res.redirect(redirectPath);
        return;
    }

    next();
};

```

The middleware checks for a specific cookie and that it has the desired value. If it does, the middleware redirects the user to the specified path, otherwise, it passes the request to the next middleware in the pipeline.

### 3\. _Use_ Redirect Middleware

Lastly, we need to apply the middleware to intercept all calls to our landing page at `https://appdomain.com/`.

We do this by adding the middleware to the `app.use` call that serves our landing pages, like so:

```

app.use(
    "/",
    redirectIfAuthenticated(
        "authcookiekey",
        "true",
        "/app"
    ),
    express.static(path.join(
        path.resolve(),
        "..",
        "landing/public"
    ))
);

```

_app.js_

And we're done. 🎉 Now all requests that contain the cookie `authcookiekey=true` will be redirected to `appdomain.com/app`.

### Entire Solution

For convenience, here's the entirety of _app.js_ after we're done.

```

import express from "express";
import cookieParser from "cookie-parser";
import path from "path";

const redirectIfAuthenticated = (cookieKey, cookieTrueValue, redirectPath) => (req, res, next) => {
    const hasCookie = cookieKey in req.cookies;
    const isAuthenticated = hasCookie
        && req.cookies\[cookieKey\] === cookieTrueValue;

    if (isAuthenticated) {
        res.redirect(redirectPath);
        return;
    }

    next();
};

const app = express();

app.use(cookieParser());

app.use(
    "/app",
    express.static(path.join(path.resolve(), "..", "build"))
);

app.use(
    "/",
    redirectIfAuthenticated("authcookiekey", "true", "/app"),
    express.static(path.join(path.resolve(), "..", "landing/public"))
);

const port = 8080;

app.listen(port, () => {
    console.log(\`started on port ${port}\`);
});

```

_Image Credit: Photo by [Jens Johnsson](https://unsplash.com/@jens_johnsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/sign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_
