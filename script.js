document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    const numberOfImages = 6;
    const numberOfGIFs = 7;
    const numberOfPNGs = 4;
    const numberOfSongs = 19;

    const randomImage = (function () {
        const image = document.getElementById('image');
        const images = [];
        
        for (let i = 1; i < numberOfImages + 1; i++) {
            images.push("image" + i + ".jpg");
        }
        for (let i = 1; i < numberOfGIFs + 1; i++) {
            images.push("image" + i + ".gif");
        }
        for (let i = 1; i < numberOfPNGs + 1; i++) {
            images.push("image" + i + ".png");
        }
        
        const index = Math.floor(Math.random() * images.length);
        image.src = "resources/images/" + images[index];
    })();

    const randomNeil = (function () {
        const player = document.getElementById('image');
        const songs = [];
        
        for (let i = 1; i < numberOfSongs + 1; i++) {
            songs.push(i + ".mp3");
        }
        
        shuffle(songs);
        
        // Current index of the songs array
        var i = 0;
        
        // Get the audio element
        var music_player = document.querySelector("#music_list video");

        // function for moving to next audio file
        function next() {
            // Check for last audio file in the playlist
            if (i === songs.length - 1) {
                i = 0;
            } else {
                i++;
            }

            // Change the audio element source
            music_player.src = "resources/music/" + songs[i];
        }

        // Check if the player is selected
        if (music_player === null) {
            throw "Playlist Player does not exists ...";
        } else {
            // Start the player
            music_player.src = "resources/music/" + songs[i];

            // Listen for the music ended event, to play the next audio file
            music_player.addEventListener('ended', next, false)
            
            document.addEventListener("click", function (event) {
              music_player.play();
            });
        }
    })();

    function shuffle(arr) {
      var i = arr.length, j, temp;
      while(--i > 0){
        j = Math.floor(Math.random()*(i+1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
});