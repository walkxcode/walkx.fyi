import { createSignal, onCleanup } from "solid-js";
import Socials from "./Socials";
import helloWordArr from "../hello";

export default () => {
  function getRandomHelloWord() {
    const randomIndex = Math.floor(Math.random() * (helloWordArr.length - 1)) + 1;
    return helloWordArr[randomIndex];
  }

  const [helloWord, setHelloWord] = createSignal(helloWordArr[0]);
  const [isChanging, setIsChanging] = createSignal(false);

  const interval = setInterval(() => {
    setIsChanging(true);

    setTimeout(() => {
      setHelloWord(getRandomHelloWord());
      setIsChanging(false);
    }, 1000);
  }, 5000);

  onCleanup(() => clearInterval(interval));

  return (
    <header class="mt-12 md:mt-18">
      <h1 class="title text-5xl font-bold">
        <p
          class={`block transition-opacity ease-in-out duration-500 ${
            isChanging() ? "opacity-0" : ""
          }`}
        >
          {helloWord()},
        </p>
        <p class="block mt-2">I'm Walkx.</p>
      </h1>
      <div class="mt-6">
        <div>
          <p>A tech enthusiast from the Netherlands.</p>
        </div>
        <div mt-2>
          <p>
            Studying at <span class="text-orange font-bold">Digibende</span> and working at{" "}
            <span class="text-blue font-bold">Uw Computerstudent</span>.
          </p>
        </div>
      </div>
      <Socials />
    </header>
  );
};
