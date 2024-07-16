const topSec = document.getElementById("topSec");
const dark = document.getElementById("dark");
const body = document.body;
const albumList = document.getElementById("albumList");
const addAlbum = document.getElementById("addAlbum");
const uploadButton = document.getElementById("uploadButton");
const uploadHere = document.getElementById("uploadHere");
const songList = document.getElementById("songList");
const albumFav = document.getElementById("albumFav");
const favAlbums = document.getElementById("favAlbums");
const albumName = document.getElementById("albumName");

dark.addEventListener("click", () => {
  body.classList.toggle("bg-dark");
  topSec.classList.toggle("bg-danger");
});

addAlbum.addEventListener("click", () => {
    const nameofAlbum = document.getElementById("nameofAlbum");
    const createAlbum = document.getElementById("createAlbum");
    const closeBtn = document.getElementById("closeBtn");
    
    albumName.showModal(); // Show the modal
  
    createAlbum.addEventListener("click", () => {
      if (nameofAlbum.value) {
        const album = document.createElement("p");
        album.textContent = nameofAlbum.value;
        album.className = "myCursor bg-info rounded p-1";
        albumList.appendChild(album);
        albumName.close(); //
      } else {
        alert("Please enter a name");
      }
    });

    closeBtn.addEventListener("click", () => {
        albumName.close(); //
    });
  });

uploadButton.addEventListener("click", () => {
  uploadHere.click();
});

uploadHere.addEventListener("change", () => {
  const file = uploadHere.files[0];
  const zeSong = document.createElement("audio");
  zeSong.type = "audio/mp3";
  zeSong.src = URL.createObjectURL(file);
  zeSong.controls = true;
  songList.appendChild(zeSong);
  songList.appendChild(tryM);
});

let clonedTryy = tryy.cloneNode(true); // Create the clone once

albumFav.addEventListener("click", () => {
  albumFav.classList.toggle("text-danger");

  if (albumFav.classList.contains("text-danger")) {
    favAlbums.appendChild(clonedTryy); // Append the clone
  } else {
    favAlbums.removeChild(clonedTryy); // Remove the clone
  }
});
