import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
//All 5 of the above lines extract the exported values from the files by name. Noticeably, the first import extract from a package named React insteado of a code file.

function App() {
  const [count, setCount] = useState(0)
  //I noticed that there is a missing semicolon at the end of the above line of code. I wonder if it is supposed to be that way?
  //From left to right: the const means the variables declared cannot be assigned another value using '=' like any other variables that are declared using 'let'
  //The way that the variables declared are also different from usual since it is using array destructuring. This syntax creates an array that has two elements: count and setCount.
  //useState is modified in a way so that the first variable it is assigned to will be a variable of a primitive type, the second will bear a function instead of a primitive value.
  //useState is a function that helps with tracking the states of variables. It uses a Fiber tree, where there are many Fibers, each Fiber point to one or many hooks.
  //a Hook is a record of variables' values each time it changes. I am not confident to say that each change would result in a new Hook, but I think it is safe to say that each <App /> will create a new Hook for count variable. About the function, though, I'm not so sure.
  //a Hook is connected similar to a Linked List. The name of the variable does not determine the Hook, but rather the order in which useState is used in.
  //this specific useState function assigned the initial value of 0 to the variable count, and every time the App function is called upon, before reassigning the value 0 to the count variable again, it will check the Fiber tree and select the Fiber that matches App(), follow the Hooks to know the previous value that count was last changed to.

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      {/* I noticed how weird the comment syntax here is. I wonder why I cannot use the HMLT comment syntax here, but I can use JavaScripts'. It is placed inside curly brackets, being treated like a JavaScript value.
      The above HTML code creates a section containing two divs and one button.
      The first div contains three images, one container and two small logos placed on the container. The logos are modified in a way so that they are distorted to fit the dimension of the container.
      The second div contains the headers and subheader.
      The button utilizes the useState function above. I do not know the reason why we must declare the type="button" even though it is quite clear that we already used <button>
      upon being clicked, it will call a function that uses the setCount function, and in the setCount function, we declare another arrow function that modifies the count value.
      I thought the setCount could directly modify the value of count, but I assumed from the syntax it is just a function used for callbacks?
      In that case, why don't we omit the first arrow function and just placed setCount outside instead of nesting it in the first arrow function? */}

      <div className="ticks"></div>
      {/* It appears that "ticks" represent a break line, at first I was confused, then I used the Inspect mode and figured out the position of "ticks" */}
      {/* The code below creates another section that contains the contact information, I do not know why there must be ids to some of the components, because there are no DOM manipulation being used.
      I am not familiar with the <svg> tag, but it appears from a Google Search that it is used to render images without being afraid the quality might break down when scaling larger.
      I found the icons svg, but it shows nothing, I figured there must be some manipulation being done because there is "#documentation-icon" placed right after. */}
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
