const vids = [
    {
        title:"inTheOffice",
        vid:"-N_2OnSUn3c",
    },
    {
        title:"cat",
        vid:"VG_BbAkygIc",
    },
    {
        title:"dayDream",
        vid:"8XKyf7Ea5-w",
    },
    {
        title:"merryGoAround",
        vid:"vFtYLFXvOVM",
    },
    {
        title:"risingUp",
        vid:"qqWbc5YjXvI",
    },
    {
        title:"stories",
        vid:"Xps1nYyQa74",
    },
    {
        title:"adventure",
        vid:"xoOYp-qDrn0",
    },
];
const musics = document.createElement("div");
musics.className = "musics";
for (let i = 0; i < vids.length; i++) {
    console.log(vids[i].title+" successfully loaded!");

    const vidAud = document.createElement("div");

    const video = document.createElement("div");
    const videoSrc = document.createElement("iframe");
    videoSrc.className = vids[i].title;
    videoSrc.src = `https://www.youtube.com/embed/${vids[i].vid}`;
    videoSrc.width = "560";
    videoSrc.height = "315";
    videoSrc.title="YouTube video player";
    videoSrc.frameBorder="0";
    videoSrc.allowFullscreen="true";
    videoSrc.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    video.appendChild(videoSrc);
    
    const audio = document.createElement("div");
    const audioSrc = document.createElement("audio");
    audioSrc.className = "vids[i].title";
    audioSrc.controls = "true";
    audioSrc.src = "musics/sorry.mp3";
    audio.appendChild(audioSrc);
    
    vidAud.appendChild(video);
    vidAud.appendChild(audio);
    musics.appendChild(vidAud);
  }

  document.body.appendChild(musics);