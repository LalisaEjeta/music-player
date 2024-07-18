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
const deleteAlbum = document.getElementById("deleteAlbum");
const myAlbum = document.getElementById("myAlbum");
const favSongslist = document.getElementById("favSongslist");

dark.addEventListener("click", () => {
  body.classList.toggle("bg-dark");
  topSec.classList.toggle("bg-danger");
});

addAlbum.addEventListener("click", () => {
  albumName.showModal();
});

createAlbum.addEventListener("click", () => {
  if (nameofAlbum.value) {
    const albumCont = document.createElement("div");
    albumCont.className =
      "myCursor d-flex flex-column my-3 border rounded rounded-3";
    albumCont.id = "myAlbum";

    const albumHeader = document.createElement("div");
    albumHeader.className = "d-flex flex-row justify-content-between bg-info";

    const albumName = document.createElement("p");
    albumName.className = "mx-2";
    albumName.textContent = nameofAlbum.value;

    const albumActions = document.createElement("div");
    albumActions.className = "d-flex flex-row p-1";

    const favIcon = document.createElement("span");
    const favIconContent = document.createElement("i");
    favIconContent.className = "bx bxs-heart";
    favIcon.appendChild(favIconContent);
    favIcon.addEventListener("click", () => {
      favIconContent.classList.toggle("text-danger");
      if (favIconContent.classList.contains("text-danger")) {
        // Cloning and appending favorite album icon
        const newClonedTryy = albumCont.cloneNode(true);
        favAlbums.appendChild(newClonedTryy);
        favIconContent.clonedNode = newClonedTryy;
      } else {
        // Removing cloned favorite album icon
        if (favIconContent.clonedNode) {
          favAlbums.removeChild(favIconContent.clonedNode);
          favIconContent.clonedNode = null;
        }
      }
    });

    const deleteIcon = document.createElement("p");
    deleteIcon.className = "mx-2";
    const deleteIconContent = document.createElement("i");
    deleteIconContent.className = "bx bx-window-close";
    deleteIcon.appendChild(deleteIconContent);
    deleteIcon.addEventListener("click", () => {
      // albumCont.remove()
      if (favIconContent.clonedNode === albumCont) {
        favAlbums.removeChild(favIconContent.clonedNode);
        favIconContent.clonedNode = null;
      }
      albumCont.remove();
    });

    const songList = document.createElement("div");
    songList.id = "songList";
    const uploadButton = document.createElement("i");
    uploadButton.className = "rounded rounded-circle bx bxs-message-square-add";
    const uploadInput = document.createElement("input");
    uploadInput.className = "d-none";
    uploadInput.type = "file";
    uploadButton.addEventListener("click", () => {
      uploadInput.click();
    });

    uploadInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const songCont = document.createElement("div");
        songCont.className = "d-flex flex-row align-items-center";
        const zeSong = document.createElement("audio");
        zeSong.type = "audio/mp3";
        zeSong.className = "m-2";
        zeSong.style.height = "30px";
        zeSong.src = URL.createObjectURL(file);
        zeSong.controls = true;
        const favZesong = document.createElement("i");
        favZesong.className = "myCursor p-1 bx bxs-heart";
        songCont.appendChild(zeSong);
        songCont.appendChild(favZesong);
        albumCont.appendChild(songCont);

        favZesong.addEventListener("click", () => {
          favZesong.classList.toggle("text-danger");
          if (favZesong.classList.contains("text-danger")) {
            // Cloning and appending favorite song icon
            const clonedSong = songCont.cloneNode(true);
            favSongslist.appendChild(clonedSong);
            favZesong.clonedNode = clonedSong;
          } else {
            // Removing cloned favorite song icon
            if (favZesong.clonedNode) {
              favSongslist.removeChild(favZesong.clonedNode);
              favZesong.clonedNode = null;
            }
          }
        });
      } else {
        alert("Failed to upload file. Please try again.");
      }
    });

    songList.appendChild(uploadButton);
    songList.appendChild(uploadInput);

    albumActions.appendChild(favIcon);
    albumActions.appendChild(deleteIcon);
    albumActions.appendChild(songList);

    albumHeader.appendChild(albumName);
    albumHeader.appendChild(albumActions);

    albumCont.appendChild(albumHeader);
    albumList.appendChild(albumCont);

    nameofAlbum.value = "";
  } else {
    alert("Please enter a name");
  }
});

closeBtn.addEventListener("click", () => {
  albumName.close(); // Close the modal
});

uploadButton.addEventListener("click", () => {
  uploadHere.click();
});

uploadHere.addEventListener("change", () => {
  const file = uploadHere.files[0];
  const zeSong = document.createElement("audio");
  zeSong.type = "audio/mp3";
  zeSong.className = "m-2";
  zeSong.style.height = "30px";
  zeSong.src = URL.createObjectURL(file);
  zeSong.controls = true;
  myAlbum.appendChild(zeSong);
});

albumFav.addEventListener("click", () => {
  albumFav.classList.toggle("bg-danger");
});
