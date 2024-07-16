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
    albumCont.className = "myCursor d-flex flex-column my-3 border rounded rounded-3";
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
    favIconContent.id = "albumFav";
    favIcon.appendChild(favIconContent);

    const deleteIcon = document.createElement("p");
    deleteIcon.className = "mx-2";
    deleteIcon.id = "deleteAlbum";
    const deleteIconContent = document.createElement("i");
    deleteIconContent.className = "bx bx-window-close";
    deleteIcon.appendChild(deleteIconContent);

    const songList = document.createElement("div");
    songList.id = "songList";
    const uploadButton = document.createElement("i");
    uploadButton.className = "rounded rounded-circle bx bxs-message-square-add";
    uploadButton.id = "uploadButton";
    const uploadInput = document.createElement("input");
    uploadInput.className = "d-none";
    uploadInput.type = "file";
    uploadInput.id = "uploadHere";
    uploadButton.addEventListener("click", () => {
      uploadInput.click();
    });
    uploadInput.addEventListener("change", (event) => {
      const files = event.target.files;
      if (files.length > 0) {
        alert(`File ${files[0].name} selected`);
        // Handle file upload here
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
  albumName.close();
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

// if (albumFav.classList.contains("text-danger")) {
//   let newClonedTryy = tryy.cloneNode(true);
//   favAlbums.appendChild(newClonedTryy);
//   albumFav.clonedNode = newClonedTryy;
// } else {
//   favAlbums.removeChild(albumFav.clonedNode);
// }
