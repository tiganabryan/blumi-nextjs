# <em>blumi</em> website

Built with React, Next.js, Material-UI, and Figma. click [here](blumidesign.ca) to visit

![test](/public/img/blumiGif.gif)
Image designed by [Alyssa Gomez](https://www.linkedin.com/in/alyssagomez29/)

## Features

- Multiple SVG background images at each breakpoint to maintain smooth lines
- Set SVGs’ aspect ratio to “none” to take advantage of their ability to stretch without getting blurry
- Adjusted button container margins and position with media queries
- Accounted for text wrapping to ensure a consistent presentation
- Pure CSS was chosen over MUI+JavaScript for the hero section's styling to improve page load times and simplify the code

<!-- ![](https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg)

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="70" height="auto" display="inline"  />

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" width="70" height="auto" display="inline"  /> -->

<!-- ![Author](https://img.shields.io/badge/LinkedIn-blue?logo=linkedin&abelColorblue) -->

## The problem

While the background SVG image and text looked the same as the Figma design at set widths, other widths caused the text to wrap onto new lines. This disrupted the whitespace ratios on the page and led to a cluttered appearance. An image isn't truly responsive if the UI only looks harmonious at certain breakpoints. 


## How I approached this problem

<strong>Describe desired behaviour:</strong> What exactly am I trying to change? The background image height must dynamically adjust according to the height of the text's container so that even if text wraps onto new lines, there's still whitespace underneath it.


<strong>Research and apply best practices:</strong> Initially, I attempted to solve this problem using JavaScript and the UI library I was using, Material-UI. To achieve the balance required to scale an organic shape and maintain Alyssa's design, I looked up [Material Design's whitespace ratios](https://m2.material.io/design/layout/spacing-methods.html) and used them as a reference for an object containing height multiplicands for each breakpoint width. However, Next.js threw a new error when it tried to run my event listener:

```javascript
ReferenceError: window is not defined
```

Wait a minute. 

## What I learned

Of course – a page rendered server-side can't adjust to a device it doesn't know exists yet. So how do I continue using server-side rendering (preferable as it has SEO benefits. more on that later), and adjust the height of the hero image depending on the width of the user's device? A quick Google search led me to discover that useEffect only runs once the page has been painted, so I could still write some code to access the window object and get the component to adjust.

Just what I was looking for!

<strong>Then I paused.</strong> A new problem had surfaced: while the layout was now adjusting according to the device width, it was happening a split-second after the component had loaded. This made the site look unfinished.

After ensuring it wasn't a speed concern, I went down a rabbit hole of React's render cycle, server-side rendering, and a lesser-known React hook.


### Understanding the benefits of Server Side Rendering (SSR) over Client Side Rendering

- The point of SSR is to load the page and metadata on the server beforehand, allowing sites to load faster. All SEO keywords are preloaded and able to be picked up by search engine scraping, boosting Google page rankings. Without SSR, some SEO keywords aren't loaded in time and the page ranks lower on Google. If customers can't find the website, the business loses revenue.

### The limitations of SSR, React's render cycle, and useLayoutEffect

- I discovered that since the useEffect hook only runs after the page has been painted, I could still access the window object. However, I needed to measure the device’s width before the website was painted, to prevent the layout from flickering when it adjusts. I needed a layout-altering side effect, which led me to [this article](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect) on React's useLayoutEffect hook by Kent C. Dodds.

- I learned that the split-second flicker is caused by the side effects only taking place after the browser has rendered the page – this is where useLayoutEffect comes in handy, as it runs after the DOM has been created, but before the page is rendered.


### While useLayoutEffect could've been an adequate solution, I noticed the code becoming verbose and knew there had to be a simpler solution. The project couldn't just <em>work</em>, it needed to be maintainable as well. This led me to pure CSS.

## 💡 Final solution

I ultimately decided to use ```background-position: bottom;``` to dynamically adjust the height of the background image and text container margins with media queries.

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

While I ended up using CSS, this rabbit hole greatly deepened my understanding of server-side rendering and the React rendering cycle. It highlighted the importance of continuous evaluation and the willingness to adapt when faced with roadblocks. It was also just fun.

<br></br>
<div align="center">Thanks for reading, have a lovely day.</div>
<br></br>
<br></br>
<br></br>




# A peak into my development process

Get an idea of how I use version control by [viewing a pull request](https://github.com/tiganabryan/blumi-nextjs/pull/14) :)

See how I interact with APIs to display information on websites by [clicking here](https://github.com/tiganabryan/goalTrackerBE/blob/master/routes/controllers/goalTrackerController.js)

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
