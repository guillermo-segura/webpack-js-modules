// import big from "../assets/big.png";
import small from "../assets/small.png";
import "../styles/image_viewer.css";

export default () => {
  const smallImage = document.createElement("img");
  // smallImage.src = "https://picsum.photos/400";
  smallImage.src = small;
  
  document.body.appendChild(smallImage);
}

// const bigImage = document.createElement("img");
// bigImage.src = big;

// document.body.appendChild(bigImage);