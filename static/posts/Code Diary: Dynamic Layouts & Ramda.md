Jun 19, 2019
Deadmau5 - Arguru - https://www.youtube.com/watch?v=hLALcdmxbh4

  Yesterday, I decided to ditch my attempt to import the `pug` and `css` from the old website, and instead rebuild it from scratch. In hindsight, this was a wonderful decision, despite me having faced annoyances in the beginning.
  I actually believed that it would require more work to rebuild the design, but it soon became obvious that on the contrary, it was easier and way neater to develop the project using `nextJS` and the tools I have in place. I give particular credit to the decisions of ditching pure css, and insisting on keeping a tight component structure. 
  As a result, the codebase this time was much smaller. The legacy project contained 3,000 lines of css, 500 lines of pug, and 500 lines of js. That's a total of 4,000 lines. The current React code base is barely 1,000 lines of js only.


  Anywany, let's dive into the adventures of today.

  ## Dynamic Layouts

  By default, NextJS does not support dynamic routing which is critical in my case since i'm building a CMS. Fortunately, this is easy to do using one of the github example:

  ```jsx
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/book/:book", (req, res) => {
      const actualPage = "/book";
      const queryParams = { book: req.params.book };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
  ```

  I then only need to modify the `dev` entry of `package.json` from: `next` to `node server.js`. Don't get tempted to throw in `nodemon` there, because that will make the server reload whenever React script reload. 😆

  But, components won't know about this information unless if wrap them around the `withRouter` method that is built into `next/router`.
  My initial attempt was the wrap the HOC `withLayout` with this. But, then I'd have to pass down the props throw a cascade of childen. After a couple of failed attemps, I had this 'aha' moment. The `withRouter` methods exposes the `router` to any component it is wrapped around. Then, all I need to do is wrap the component that needs this info, instead of the full navbar! Most importantly, this doesn't break my *container/component* design since the `withRouter` methods acts as the container; its job is to prefill `props` with the `router` data. Then, the `HeaderLogo` component will be aware of it.
  After that, I used Ramda for the first time:

  ```jsx
const renderLogo = props =>
  R.ifElse(
    R.hasPath(["router", "query", "book"]),
    R.always(
      <Image
        mr={2}
        width={"18px"}
        src={`/static/${props.router.query.book}/logo.svg`}
        borderRadius={8}
      />
    ),
    R.always(
      <Image mr={2} width={"26px"} src="/static/logo.svg" borderRadius={8} />
    )
  )(props);
  ```

  While it might not make sense to use Ramda for a standard If/Else, I particularly apreciate the `R.hasPath` method. It basically makes sure that `props.routes.query.book` is not undefined. Yeah, that's a triple deep nest that do not want to manually check for.
  I guess I could replace `R.always` with a simple function, but, just like I didn't want to set bad discipline precedants yesterday, I don't want to do that today. `R.always` is actually aligned with the Ramda philosophy, and so, I will stick to the philosophy.


  ## Gimme some data!

  So far, I hardcoded stub book and posts information into the code. I reached the point where that was no longer sustainable. Time to start playing with redux!
  But first, lemme take a selfie. Ah no wait...
  First, I wrote a server method that would look at my Dropbox writing folder, and created a `meta.json` which is an array of books meta info that looks like this:

  ```json
{
  "id": "book-id",
  "title": "book title",
  "description": "hello world!"
  "chapters": [
    { "title": "Just Sit", "date": "Jun 18, 2019", "soundtrack": "Arguru" },
  ]
}
  ```

  The next step was to prefetch this data into redux when the component loads. I figured the easiest was to have a dispatch method inside the `_app.js` file. I'm sure it's far from correct, but given that I need this data only once, it's not a big deal.
  I did however stick to the `container/component` philosophy. I started by refactoring the `./index.js` page:

```jsx
import React from "react";
import { Flex, Box } from "rebass";
import withLayout from "../components/withLayout";

import HomepageContainer from "../containers/HomepageContainer";

export default withLayout(HomepageContainer);
```

  The HomepageContainer's job is to connect to redux, and expose the books to the Homepage component. It's job is also to figure out if the Books array is empty (meaning we haven't fetched the meta data yet). In this case, it should display a loading sign. And guess how I build it? That's right... with Ramda!

```jsx
import { connect } from "react-redux";
import * as R from "ramda";

import Homepage from "../components/Homepage";

const withLoading = props =>
  R.ifElse(
    R.equals(0),
    R.always(<>Loading</>),
    R.always(<Homepage {...props} />)
  )(R.length(props.Books));

const Index = props => withLoading(props);
function mapStateToProps(state) {
  return { Books: state.Books.data };
}

export default connect(mapStateToProps)(Index);
```

  Again, I don't think Ramda was essential here, but I like to set a good precedant. 

----

  Later that day, I stumbled upon a strong use case of Ramda:

```jsx
const mapStateToProps = (state, props) => ({
  data: R.ifElse(
    R.hasPath(["router", "query", "book"]),
    R.always(R.find(R.propEq("id", props.router.query.book))(state.Books.data)),
    R.always({})
  )(props)
});
  ```
  Basically, I am checking to see if the props containers `props.router.query.book`, and if it does, I am filtering the array `state.Books.data` for only the book that matches the current one in display. 
  I don't know about you, but I personally enjoy the simplicty and beauty of such code.


  ## A note on Ramda

  In this post, the 2 use cases of Ramda aren't compelling. But, when one wants to do complex maps and/or reduces, Ramda shines. However, I know from experience that ramda is tricky. Lots of it's functions return functions, and so you need to know how to properly use it. For example, this won't work:

  ```jsx
  R.ifElse(
    R.equals(0, R.length(props.Books)),
    ...
  )();
  ```

  Why? Because the first parameter has to be a function. But, the way it's written, it is actually running the function. What you need to do instead is to not give the `R.equals` its second parameter. Only then with the ifElse work. The solution is then simple:

  ```jsx
  R.ifElse(
    R.equals(0),
    ...
  )( R.length(props.Books)));
  ```

  While this might appear as a trivial case, it did take me a moment to realize what my error was. And that's only an ifElse statement. 
  In the past, I have many times fallen to the trap of Ramda's quirks. So, it's important to sharpen my skills even if the example can be done using a simple `props.Books.length > 0 ? <>:<>`.


  ----

  ## Closing thoughts

  Now that the loading into redux is done, I pulled a couple of pictures from unsplashed, and I was ready to go. The blog might be empty, but I actually love the warm colors in the homepage.

 ![picture of blog]( https://i.imgur.com/ylCNOl5.jpg)
