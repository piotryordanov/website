Jun 24, 2019
Ben Böhmer - After Earth

  tl;dr
  Pick up the vim setup [here](https://github.com/piotryordanov/nextjs-boilerplate#vim-setup), and the package.json [here](https://github.com/piotryordanov/nextjs-boilerplate/blob/master/package.json)

----

  Linting.
  Ah... yes... that thing you need to add to a project, that you just don't want to add. But, there is this little voice in your head telling you to do this because... Just because.
  It's like testing. I've always slacked to add either tests or linting because they felt like a lot of useless work.

  Things changed when, a while ago I was coding in python. There are plugins like black and iSort that do lots of useful code cleaning routines. For example, [isort](https://pypi.org/project/isort/) sorts imports in a smart way. [Black](https://pypi.org/project/black/) formats the code for me so that I no longer worry if this python line has wrong indentation.
  This reminds me of this quote:

  > “Arouse in the other person an eager want.” -- Dale Carnegie

  In other words, I did not start using linters because it is best practice. Instead, I used a linter because it made my life as a programmer easier.
  In other words, linters solved a major pain point.


  ----

  Back to React. I already have [Ale](https://github.com/w0rp/ale) installed in vim, and it worked wonders with both `black` and `isort`. However, it did a horrible job with javascript. It always thought that all my files were broken.
  That was because [Prettier](https://prettier.io/) wanted to format things in a way that [xo](https://github.com/xojs/xo) did not understand. I had installed both, but did not have time to make them talk to each other! This forced me to reload my `vimrc` everytime I opened a new file, in order to disable the linting. Horrible UX!
  So, today, I decided to invest time to fix this problem once and for all.


  ## package.json rules

  `package.json` rules, rule!
  It used to be that we needed to add `.eslintrc` and `.babelrc` and `webpack.config.js` `.nodemonignore` at the root of each project. Like... for real. This was one of the reasons why I ignored linting: It felt like a lot of work to maintain. Or, was I just finding lazy excuses?
  But, I know that some of you out there use that excuse. C'monnn don't hide ;)

  Let's move on.

  Apparently, `package.json` can contain rules that would otherwise go in these files. Just look at this beauty:

```json
// package.json
{
  "name": "package-name"
  "devDependencies":{
     ...
  }
  "nodemonConfig": {
     ...
  },
  "babel": {
     ...
  },
  "xo": {
    "prettier": true,
     ...
  },
  "husky": {
     ...
  }
}
```

  Fantastic!

  ## vim config

  We have the configuration in `package.json`, but how do we make `vim` understand it? In other words, how will *Ale* read this config?

  First things first. Ale provides an interface for both `linters` and a `fixers`.

```viml
let b:ale_fixers = {'python': ['black', 'isort'], 'javascript': ['xo']}
let b:ale_linters = {'python': ['pyflakes'], 'javascript': ['xo']}
```

  Here, I am telling Ale to fix js with `xo` and python with `black` and `isort`. Then, I'm telling it to lint python with `pyflakes`, and javascript with `xo`. 
  But, if I switched the js fixer to `Prettier`, things no longer worked properly because `xo` does not quite like what Prettier does. I could add `xo` settings inside `.vimrc`:
  
  ```viml
let g:ale_javascript_xo_options = "--plug=react --prettier"
  ```
  But this is a bad idea because not everybody uses vim!
  Now, it turns out, `xo` can be told to use Prettier as a fixer, AND, this can be doen inside the `package.json`:

```json
// package.json
{
  "xo": {
    "prettier": true,
  }
}
```

  But, that's not enough. `xo` uses eslint under the hood, and eslint does not understand react by default. It will throw errors at otherwise correct jsx statements:

  ```jsx
  import Header from './Header' // no-unused-vars
  ```

  For this reason, we need to update the `xo` configuration, and add a few dev dependencies.

  ```diff
  "devDependencies": {
+    "eslint-config-xo": "^0.26.0",
+    "eslint-config-xo-react": "^0.19.0",
  },
  "xo": {
    "prettier": true,
+   "extends": "xo-react",
  }
  ```

  By doing this, vim will finally fix js with `Prettier`, and lint it with `xo`.
  But, the rules aren't quite enough.

  But, the default rules did not always match my taste. For example, I did not agree with how it wanted to me to use kebab-case for my file names. Fortunately, this was easy to turn off:
  ```diff
  "xo": {
    "prettier": true,
    "extends": "xo-react",
+   "rules": {
+     "unicorn/filename-case": 0,
+   }
  }
  ```

  And yup, that's the exact syntax used for eslint, and that's without needing a special eslint section, or `.eslintrc`. Sweet!


  ## Enforcing linting

  Ok, so I have linting in place, but I had the hunch that, if I did not enforce it to happen, i might slack. So, I recalled that some folks would enforce linting as a git pre-hook.
  I looked around and came across [husky](https://github.com/typicode/husky) which does just that, and guess what? It can be configured inside `package.json`!🙈

  Here's how things look like:

```diff
// package.json
{
  "scripts":{
+    "test": "xo --fix"
  },
+ "husky": {
+   "hooks": {
+     "pre-commit": "npm test"
+   }
+ }
}
```
  This way, before every commit, `npm test` is run, and for now, this script will run xo. 
  I do not mind enforcing linting before every commit (Meaning that a commit won't be allowed to happen if linting fails). However, this can be enforced only before a commit. In which case, replace the script to:

```diff
// package.json
{
  "husky": {
    "hooks": {
-   "pre-commit": "npm test"
+   "pre-push": "npm test"
    }
  }
}
```

  Et voila! Now, regardless of what IDE you have, as long as `Prettier` and `xo` are installed globally, every developper on the team will be forced to lint.
