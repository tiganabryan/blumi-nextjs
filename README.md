# blumi design website

built with React, Next.js, Material-UI, and Figma. click [here](blumidesign.ca) to visit

<!-- ![](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg)

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="70" height="auto" display="inline"  />

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width="70" height="auto" display="inline"  /> -->

<!-- ![Author](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&abelColorblue) -->

## rendering a responsive organic image

the responsive background image on the homepage was carefully crafted to ensure the best user experience across a wide range of devices. building a responsive organic shape involved a combination of CSS techniques, JavaScript, and mindful design decisions.

![test](/public/img/blumiGif.gif)
image designed by [Alyssa Gomez](https://www.linkedin.com/in/alyssagomez29/)

# features

- multiple background images at each breakpoint to maintain smooth lines
- set SVGs’ aspect ratio to “none” to take advantage of their ability to stretch without getting blurry
- adjusted button container margins and position with media queries
- accounted for text wrapping to ensure a consistent presentation
- pure CSS was chosen over MUI+JavaScript for the hero section's styling to improve page load times and simplify the code

# achieving visual harmony with whitespace

A crucial aspect of this project involved determining the hero text's height to ensure that the SVG seamlessly grew and shrunk even if text wrapped onto new lines, maintaining design best practices for whitespace.

This delicate balance between functionality and visual harmony presented a juicy problem to solve.

# the value of iterative problem-solving

To achieve the balance required to scale an organic shape and maintain Alyssa's design, I wrote height calculations based on [Material Design's whitespace ratios](https://m2.material.io/design/layout/spacing-methods.html) that accounted for both the container's dimensions and the desired whitespace.

Initially, I attempted to solve this problem using JavaScript, but I always aim to keep my code as simple and maintainable as possible, which led me to explore solutions written in pure CSS.

This experience highlighted the importance of continuous evaluation and the willingness to adapt to alternative solutions when faced with roadblocks.

# what I learned

## deepened understanding of Server Side Rendering and its benefits over Client Side Rendering (speed, SEO)

- So the point of SSR is to load the page on the server beforehand, allowing sites to load faster and be updated in a split second. All SEO keywords are preloaded and able to be picked up by search engine scraping, boosting Google page rankings. Without SSR, some SEO keywords aren't loaded in time and get missed by scraping.

## limitations of SSR

- Since SSR loads the page beforehand, you can no longer access the window object – this required me to swiftly adjust my approach to fit the effects of Server Side Rendering.

- I discovered that since the useEffect hook only runs after the page has been painted, I could still access the window object (phew). However, I needed to measure the device’s width before the website was painted, to prevent the layout from flickering when it adjusts. I needed a layout-altering side effect, which led me to [this article](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect) on React's useLayoutEffect hook by Kent C. Dodds.

- I learned that the split-second flicker is caused by the side effects only taking place after the browser has rendered the page – this is where useLayoutEffect comes in handy, as it runs after the DOM has been created, but before the page is rendered.

# final solution

While I ultimately decided to use `background-position: bottom;` to dynamically adjust the height of the background image and adjusted margins with media queries to increase whitespace, this rabbithole greatly deepened my understanding of Server Side Rendering and the React rendering cycle. It was incredibly stimulating and fun.

```css
@media (min-width: 600px) {
  .hero-background-image {
    background-image: url(../../../public/img/smHeroImg.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: bottom;
  }

  .cta-button-container {
    margin-bottom: 2.5rem;
  }
}
```

<div align="center">thanks for reading, have a lovely day.</div>
<br></br>

# a peak into my development process

get an idea of how I use version control by [viewing a pull request](https://github.com/tiganabryan/blumi-nextjs/pull/14) :)

see how I interact with APIs to display information on websites by [clicking here](https://github.com/tiganabryan/goalTrackerBE/blob/master/routes/controllers/goalTrackerController.js)

<!-- ---

## run on localhost

- Install dependencies: `yarn install`
- Start the server: `yarn run dev`
- Build on production: `yarn run build`

## built with

- React
- MUI
- NextJS
- Figma -->
