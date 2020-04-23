import "normalize.css";
import styles from "./index.module.scss";
import $ from "jquery";
import prettyImg from "./images/pretty.png";
import slackImg from "./images/slack.svg";
import "@babel/polyfill";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello Webpack";

  const imgElement = document.createElement("img");
  imgElement.src = slackImg;
  imgElement.classList = styles.slackImg;

  console.log(prettyImg);
  console.log(styles);
  element.appendChild(imgElement);

  element.classList = styles.helloWebpack;

  return element;
}

document.body.appendChild(component());
console.log($(`.${styles.helloWebpack}`).length);
console.log(`IS_PRODUCTION MODE: ${IS_PRODUCTION}`);
