Jun 24, 2019
Ben Böhmer - After Earth

  tl;dr
  Pick up the vim setup [here](https://github.com/piotryordanov/nextjs-boilerplate#vim-setup), and the package.json [here](https://github.com/piotryordanov/nextjs-boilerplate/blob/master/package.json)

----

  Linting. 
  Ah... yes... that thing you need to add to a project, that you just don't want to add. But, there is this little voice in your head telling you to do this because... Just because.
  It's like testing. I've always slacked to add either tests or linting because they felt like a lot of useless work.

  My interest in linting came a while ago when I was coding in python. There are plugins like black and iSort that do lots of useful code cleaning routines for you. For example, [isort](https://pypi.org/project/isort/) sorts imports in a smart way. [Black](https://pypi.org/project/black/) formats the code for me so that I no longer worry if this python line has wrong indentation.
  This reminds me of this quote:

  > “Arouse in the other person an eager want. He who can do this has the whole world with him. He who cannot walks a lonely way.” -- Dale Carengie

  In other words, I did not start using linters because it is best practice. Instead, I used a linter because it made my life as a programmer easier. 
  In other words, linters solved a pain.


  ----

  Back to React. I already have [Ale](https://github.com/w0rp/ale) installed in vim, and it worked wonders with both `black` and `isort`. However, it did a horrible job with javascript. It simply thought that all my files were broken.
  That was because [Prettier](https://prettier.io/) wanted to format things in a way that [xo](https://github.com/xojs/xo) did not understand. I had installed both, but did not have time to make them talk to each other! This forced me to reload my `vimrc` everytime I opened a new file, in order to disable the linting. Horrible UX!

  So, today, I decided to invest time to fix this problem once and for all.
