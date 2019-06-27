Jun 23, 2019
Deadmau5 - Arguru - https://www.youtube.com/watch?v=hLALcdmxbh4

  Back when I was a teenager, I used to play warcraft maps with family and friends. Once, my sister's champion suddenly stopped fighting. 
  "Where are you!!!" we shouted at her.
  "I'm doing some reading," she replied.
  "Reading what?!"
  "Of the items. How else will I know what to buy?!"

  Fast forward to today, I see things differently. Sure, her reading might have proven to be an annoying bottleneck during that one game. Yet, it could have helped her make better decisions next game which could lead us to the win we wanted so much.

  I recalled this story was I was refreshing my knowledge of React over the weekend. Last week, I incorporated React Hooks inside my apps. I wondered if I still needed to use Redux given that the Context API could replace it. But, that was a bold call. Sure, redux is annoying to write. But, is it justified to ditch it given that [redux-act](https://github.com/pauldijou/redux-act) simplifies the writing of actions, while the redux toolbox is a fantastic debugging tool?
  So, before I jump on conclusions, I asked myself: "What's the state of redux given the presence of hooks?"
  Somewhere on the interwebs, I came across an article that spoke about hooks in redux. The article immediately drew my attention. I went over to redux's website, and lo and behold, hooks were indeed introduced in redux... 12 days ago! 
  With `useDispatch` and `useSelector`, I can bypass `connect` and `mapStateToProps`. These were the key elements I wanted to remove by moving to Contexts!
  Upon further reading, I came across another golden nugget in the redux [documentation](https://react-redux.js.org/using-react-redux/accessing-store#understanding-context-usage):

  > Internally, React Redux uses React's "context" feature to make the Redux store accessible to deeply nested connected components.

  Oh, you just look at that!

  In other words, by deploying custom `Context` methods, I'd reproduce core redux functionalities. Then, I'll lose the benefits of its ecosystem. Yayks!


  I spent another couple of hours getting myself up to speed with the changes in Redux and React. Some concepts like `useCallback` or `useMemo` are not quite important. But, others like React's [Suspense](https://reactjs.org/docs/react-api.html#suspense) would replace the `withLoading` HOC I was building yesterday. Had I known about it earlier, I would have saved myself writing a few lines of code. I'd also have leveraged built-in functionalities of my framework!
  
  - - - -

  So, next time you find me reading docs and release notes, don't shout at me, "WHY ARE YOU NOT CODING".
  I will look at you with a happy smile and say, "I'm doing some reading!"
#MySisterWillBeProud
