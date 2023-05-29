import { Index } from "solid-js";
import ProjectItem from "./ProjectItem";

export default () => {
  const projectLists = [
    {
      name: "Dashboard Icons",
      desc: "The best place to find icons for your dashboards.",
      link: "https://github.com/walkxcode/dashboard-icons",
      icon: "i-fluent-emoji-bento-box",
    },
    {
      name: "Archiveteam ARM",
      desc: "A modified version of the Archiveteam Warrior Docker image for ARM devices.",
      link: "https://github.com/walkxcode/archiveteam-arm",
      icon: "i-fluent-emoji-spouting-whale",
    },
    {
      name: "Digigem",
      desc: "A curated list of resources for devs and designers.",
      link: "https://github.com/walkxcode/digigem",
      icon: "i-fluent-emoji-gem-stone",
    },
    {
      name: "Parsec Anywhere",
      desc: "Run parsec anywhere, temporarily, by using a one line command.",
      link: "https://github.com/walkxcode/parsec-anywhere",
      icon: "i-fluent-emoji-link",
    },
    {
      name: "Restricted Wallpaper Replace",
      desc: "A simple script to replace the wallpaper on a restricted Windows computer.",
      link: "https://github.com/walkxcode/restricted-wallpaper-replace",
      icon: "i-fluent-emoji-unlocked",
    },
  ];
  const openLink = () => {
    window.open("https://github.com/walkxcode", "_blank");
  };
  return (
    <>
      <h2 class="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <p flex-1 class="title">
          Projects
        </p>
        <div onClick={openLink} class="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer">
          <div class="m-2 i-ri-arrow-right-up-line"></div>
        </div>
      </h2>
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <Index each={projectLists}>{(item) => <ProjectItem data={item()} />}</Index>
      </div>
    </>
  );
};
