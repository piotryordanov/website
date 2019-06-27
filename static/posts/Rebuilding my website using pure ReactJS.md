Jun 18, 2019
Deadmau5 - Arguru - https://www.youtube.com/watch?v=hLALcdmxbh4

  Last week, I decided to revive my previous website by finding a hack to import `pug` to react. This way, I thought I'd avoid having to convert pug and CSS into react. But, it quickly because obvious that this approach won't scale. Every time I'll want to make a change, I'd need to edit CSS files/classes. This adds an overhead that in the long term will be a pain to manage. I don't want dust in the engine!.
  This is also the opportunity to start a project from scratch.
  Yesterday, I wanted to try `react-spring` to create some fancy animations. But, after a few trials and errors, I realized that the effort wasn't worth it. My goal is to have a personal site & blog, up and running as fast as possible. Fancy animations are a *nice-to-have*. But, it will be more responsible to tackle that *after* a functional website is alive.

  With this in mind, I decided today to rewrite the legacy website in pure React. But, I put in a couple of rules:

  1. I wasn't going to make any change to the UI as I think it's pretty neat. 
  2. The JS will have to be in **pure React**. So, no `*.css` file is allowed whatsoever.
  3. The code needs to respect pure **functional programming**. So Ramda, Rebass/styled-components are the defacto libraries to use.
  4. I will keep `Redux` and `Redux-Act` in my toolkit, but realistically, I might use `Hooks` instead.
  5. As a more practical implementation of GTD, I am going to enforce the usage of `git flow`. Every time a feature needs to be built, it will have its own branch. Only when this feature is finished, will it be merged to `develop`.

  With the rules set,  I rubbed my hands together and took a deep breath of exciting facing my new adventure!


## The Header

  I was going to start with the homepage, in particular, the navbars: Header and Footer.
  I thought of creating a HOC `Navbar` component that would be used by both footer and header. In hindsight, this did not yield the return I was expecting.
  I recall from experience that one of my bad habits was to creep in custom component designs inside the same layout component. For example, I'd write the `HeaderLogo` code inside the `Header` component. This practice is fine for small files. But, it doesn't scale well when I introduce new functionalities, for two main reasons:
  1. It no longer allowed component composition
  2. Worse, it sets a precedent for bad lazy habits and a lack of discipline. I don't want that.

  So, I took some time to refactor such components out, making sure to follow a clear Naming convention.
  For example, the `Header` component imports `HeaderLogo` and `HeaderSubscriptionButton`.


## The Footer

  The footer contains a list of the standard pages in a website. Privacy, TOC, contact, etc...
  In my initial code, I wrote the Boxes for each of these hyperlinks, but again, this sets a bad coding habit precedent. Instead, I stored these components inside an array and looped over it.

  ```js
const links = [
  { name: "Terms And Conditions", href: "terms-and-conditions" },
  { name: "Privacy Policy", href: "privacy" },
  { name: "Contact", href: "contact" },
  { name: "Newsletter", href: "newsletter" }
];
const items = links.map(curr => (
  <Link key={curr.name} href={curr.href}>
    <Flex>
      <FooterTextClickable>{curr.name}</FooterTextClickable>
      <Seperator>/</Seperator>
    </Flex>
  </Link>
));
  ```

  This way, if I were to make any change in the future, it will be easy. But, given that I don't expect to touch this design, creating this loop remains a good code standard habit.


## Animations

  In the legacy website, I had invested lines upon lines of code to create cross-platform css3 animations. 
  This time, however, I had no intention of using anything that looked like a css3 animation. So, I looked online and came upon [react-reveal](https://www.react-reveal.com/). This library won instantly thanks to its simplicity. It destroyed its competition for integrating with [styled-components](https://www.react-reveal.com/tutorials/styled/).

  I now faced an interesting problem. Many areas of the website will have to be animated. What's the best way to add such functionality to these components?
  The hint came when, in the styled-components section, react-reveal referenced it's own `withReveal` method. My Layout is itself a HOC that wraps all pages with the `withLayout` method. So, I decided to create a `withZoom` HOC. It will wrap around any component that requires zoom animation.

  This proved to be critical.
  Remember when earlier I insisted to extract components out of layouts, for example with `HeaderLogo`? Well, this disciplined practice rewarded me with a sweet gift. All I needed to do was wrap the logo with the animation HOC like so:

  ```jsx
  import withZoom from "./withZoom"

  const Index = () =>
    // Code for the HeaderLogo
  export default withZoom(Index);
  ```

  And so, with a couple of lines of code, without a single line of ugly CSS, and with no additional effort, I was animating the Header, Footer, and everything else. 
Excellent!
