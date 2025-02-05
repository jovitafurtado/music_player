// script.js
const songs = [
    {
      title: "Shape of You",
      artist: "Ed Sheeran",
      file: "shape_of_you.mp3",
      image: "shape_of_you.jpg",
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      file: "blinding_lights.mp3",
      image: "blinding_lights.jpg",
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      file: "levitating.mp3",
      image: "levitating.jpg",
    },
  ];
  
  let currentSongIndex = 0;
  
  const audio = document.getElementById("audio");
  const playButton = document.getElementById("play");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const progress = document.getElementById("progress");
  const songTitle = document.getElementById("song-title");
  const songArtist = document.getElementById("song-artist");
  const albumImage = document.getElementById("album-image");
  const currentTime = document.getElementById("current-time");
  const duration = document.getElementById("duration");
  
  function loadSong(song) {
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    albumImage.src = song.image;
    audio.src = song.file;
  }
  
  function playSong() {
    audio.play();
    playButton.textContent = "⏸️";
  }
  
  function pauseSong() {
    audio.pause();
    playButton.textContent = "▶️";
  }
  
  function togglePlay() {
    if (audio.paused) {
      playSong();
    } else {
      pauseSong();
    }
  }
  
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
  }
  
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
  }
  
  function updateProgress() {
    progress.value = (audio.currentTime / audio.duration) * 100;
    currentTime.textContent = formatTime(audio.currentTime);
    duration.textContent = formatTime(audio.duration);
  }
  
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }
  
  function setProgress(e) {
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
  }
  
  playButton.addEventListener("click", togglePlay);
  prevButton.addEventListener("click", prevSong);
  nextButton.addEventListener("click", nextSong);
  audio.addEventListener("timeupdate", updateProgress);
  progress.addEventListener("input", setProgress);
  
  loadSong(songs[currentSongIndex]);
  