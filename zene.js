const title = document.querySelector("#track-title");
const length = document.querySelector("#track-length");
const btn_add = document.querySelector("#add");
const output = document.querySelector("#out");

class Track {
  #title = "";
  #length = 0;

  static playlist = [];

  constructor(title, length) {
    this.title = title;
    this.length = parseInt(length);
  }

  static total_length() {
    let total = 0;

    this.playlist.forEach((track) => {
      total += track.length;
    });

    return total;

  }

}

function init() {
  btn_add.addEventListener("click", () => {
    if (title.value == "" || length.value == "") {
      return;
    }

    Track.playlist.push(new Track(title.value, length.value));
    title.value = "";
    length.value = "";

    output.textContent = `${Math.floor(Track.total_length() / 60)} óra ${Track.total_length() % 60} perc`;
  });

}

init();
