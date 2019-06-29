Jun 26, 2019
M5tzZtFCOfs
Arguru

  Yesterday, I spent about 4 hours working on a technical test for an interview. I was asked to build a single page app that logs the user to twitter. Then, it fetches tweets relevant to a hashtag query.
  I was advised to use any boilterplate I have, and any tech I'm familiar with. I rejoiced, because I'll be able to put my [boilterplate](https://github.com/piotryordanov/nextjs-boilerplate) to use sooner than I thought!

  I was happy with the linting that was enforced as this was a requirement of the test. But, I was painfully aware of the shortcomings of the boilerplate:
  - There was no testing in place
  - If I needed server functions, I won't be able to deploy the static website anymore.
  - I had no methods in place to setup authentication

  I needed to have these things in place in order to complete the test.
  Damm it.

  "At least", I thought, "this is a good excuse to *finally* tackle the server side code that I've been postponing for a while."

  ## OAuth

  I needed a quick hack to have the auth and twitter in place. The only reactJS samples I found online required a server component that uses `passport`. 
  No. I'm not going to use passport. No, No!
  I thought of firebase. I knew from experience that it did oAuth. Then, I ticked off items of my next actions list:
  - Create a Twitter account -- *easy*.
  - Create a Twitter dev account, and get the app's secrets. *annoying*. Twitter requested me to say more than once *why* I wanted to create the app for. #weHateSpamTheySay
  - Create a Firebase account
  - Enable Twitter oAuth in Firebase, and add my twitter keys to it

  There, the config is done. Now, How do I connect firebase with ReactJS?
  Last time I used Firebase, there was something called `react-fire` that did that. But, guess what? This library was deperecated, and there was no clear alternative.
  The only one was a lib that connects redux with firebase. Ok, not bad given that I needed redux for the app.
  Sadly, this library did not quite solve my problems, but I had to do with whatever I had.

  After much trial and error, I finally managed to have firebase oAuth in place despite random errors showing up. I had no clue how to fix them, and by now, I was tired of this rabbit hole of bug tests.


  ## Fetching Tweets

  Ok, so now we have oAuth. We need to fetch tweets. 
  Sure thing, that won't work client side due to CORS... So, I need a server. Damm.
  Oh but wait, firebase has functions that do just that. Great!

  I wrote a simple function that fetches a predefined tweet query. I deployed it, but it failed.
  After some debugging, I discovered that I cannot call non google methods in firebase, without having to pay 25$/mo for an account. HA!

  So now, three hours laters, I'm back to square zero. I'm forced to use express, and I won't be able to deploy the code as a serverless app :(
  I invested 30 minutes to build the UI -- finally, the fun react work. Then, the other 30 minutes to update the README, lint, commit, create an archive, and send the email.

----

  # Now

  Well that was an adventure. Whether I pass the test or not, what I now know for sure is that there are clear holes in my workflow. I need to be able to deploy a serverless app, but I don't know how.
  I'm not sure why, I found myself reading about `Zeit.Now`. I had only used them to host static assets. But, I was away that in their v2, they support lambda functions, which is exactly what I am looking for!
  
  But, there were important questions I needed to answer:
  - Can I run an express like server with now, and have it respond to my ReactJS queries?
  - If yes, does it look vastly different as a lambda function?
  - Can i setup dynamic routes for my blog without having an express server alltogether?

  ## Exploring
  Digging around, I came across a [demo](https://serverless-express.now.sh/) that does exactly what I was asked in the test!!! It used passport to login to twitter, and it is hostable on `now` without needing any server!!!

  The demo, however, did not have any RactJS or NextJS components. Still, that should be trivial to add. Looking around, I found another hacker new demo that used a combination of React and express, all managed and deployed with `now`.

  See, so far, I have been managing stuff inside the `next.config.js`, and `package.json`. That's all fine, but to go full serverless, I only needed to add a `now.json` file.

  And, cherry on the top, I found [code examples](https://zeit.co/guides/custom-next-js-server-to-routes/) that showed how I can have dynamic routing without even requiring an express server!
  So, with these discoveries, I only need to migrate my website out of express, and into `now`.

  ## What's the catch?

  I feel that the only catch here is that I am heavily relying on `now` to route and build the app. But, is it really a big deal? To what extend can I eject now and replace it with [serverless](https://serverless.com/) running on top of, say, AWS?
  In other words, am I locked into `now`, or not?
  I will have to dig more to answer the question. But, for now, I have found a way to solve key problems I have: Pure serverless app, deployed online, and powered by on demand lambda functions.
  Yay!
