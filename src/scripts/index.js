// Any code you will write for your website (in the future!) should go here
let data = [
  {
    title: "Nick Gves",
    thumb: "images/1.png",
    videoUrl: "1"
  },
  {
    title: "Radiohead",
    thumb: "images/2.png",
    videoUrl: "2"
  },
  {
    title: "Fleet Foxes",
    thumb: "images/3.png",
    videoUrl: "3"
  },
  {
    title: "The National",
    thumb: "images/4.png",
    videoUrl: "4"
  }
];

let player = document.querySelector(".player");
let close = document.querySelector(".close");

updateVideo = url =>{
  let src = `images/${url}.mp4`
  let vid = document.createElement("video");
  vid.src = src;
  vid.autoplay = true;
  vid.controls=true;
  let vidParent = document.querySelector(".video-container");
  vidParent.appendChild(vid)
};

togglePlayer = e => {
  player.classList.toggle("active");

  let vidParent = document.querySelector(".video-container");
  vidParent.innerHTML="";
  player.getAttribute("data-url");
  let url = e.currentTarget.getAttribute("data-url");

  if(url)
  updateVideo(url);
};

close.addEventListener("click", togglePlayer);

generateVideoThumbs = data => {
  data.forEach(element => {
    let parent = document.createElement("div");
    parent.classList.add("video-thumb");
    parent.addEventListener("click", togglePlayer);
    parent.dataset.url = element.videoUrl;

    let title = document.createElement("p");
    title.innerText = element.title;

    let imgCont = document.createElement("div");
    imgCont.classList.add("img-cont");

    let img = document.createElement("img");
    img.src = element.thumb;

    imgCont.appendChild(img);
    parent.appendChild(imgCont);
    parent.appendChild(title);

    let vidCont = document.querySelector(".cont");
    vidCont.appendChild(parent);

    console.log(parent);
  });
};

generateVideoThumbs(data);
