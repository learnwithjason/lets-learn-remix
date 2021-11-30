<p align="center">
  <a href="https://www.learnwithjason.dev">
    <img src="https://res.cloudinary.com/jlengstorf/image/upload/q_auto,f_auto,w_240/v1579281727/lwj/learnwithjason.png" alt="Learn With Jason" width="120" />
  </a>
</p>
<h1 align="center">
  Let's Learn Remix! (with Ryan Florence)
</h1>
<h3 align="center">
  This app was built live on <em>Learn With Jason</em> and it was super fun and I’m sad you weren’t there.
</h3>
<p align="center">
  But don’t worry! You can still: 
  <a href="https://www.learnwithjason.dev/let-s-learn-remix"><strong>watch the video</strong></a> · 
  <a href="https://lets-learn-remix.netlify.app"><strong>see the demo</strong></a> · 
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/learnwithjason/lets-learn-remix&utm_source=learnwithjason&utm_medium=github&utm_campaign=devex"><strong>deploy this project</strong></a> · 
  <a href="https://jason.af/lwj/schedule"><strong>see upcoming episodes</strong></a>
</p>

&nbsp;

Remix is a React-based framework focused on web fundamentals and modern UX. In this episode, Ryan Florence will teach us what makes it different and how to get started with it!

&nbsp;

## More Information

- [Watch this app get built live + see links and additional resources][episode]
- [Follow _Learn With Jason_ on Twitch][twitch] to watch future episodes live
- [Add the _Learn With Jason_ schedule to your Google Calendar][cal]

&nbsp;

<p align="center">
  <a href="https://app.netlify.com/start/deploy?repository=https://github.com/learnwithjason/lets-learn-remix&utm_source=learnwithjason&utm_medium=github&utm_campaign=devex">
    <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy this project to Netlify" />
  </a>
</p>

[episode]: https://www.learnwithjason.dev/let-s-learn-remix
[twitch]: https://jason.af/twitch
[cal]: https://jason.af/lwj/cal

- [Remix Docs](https://remix.run/docs)

## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

2. Sign up and log in to Netlify:

```sh
  netlify login
```

3. Create a new site:

```sh
  netlify init
```

4. You'll need to tell Netlify to use Node 14, as at the time of writing Netlify uses Node 12 by [default](https://docs.netlify.com/functions/build-with-javascript/#runtime-settings)

```sh
  netlify env:set AWS_LAMBDA_JS_RUNTIME nodejs14.x
```

## Development

You will be running two processes during development when using Netlify as your server.

- Your Netlify server in one
- The Remix development server in another

```sh
# in one tab
$ npm run dev:netlify

# in another
$ npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

If you'd rather run everything in a single tab, you can look at [concurrently](https://npm.im/concurrently) or similar tools to run both processes in one tab.

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
$ npm run build
# preview deployment
$ netlify deploy

# production deployment
$ netlify deploy --prod
```
