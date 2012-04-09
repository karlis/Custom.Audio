/**
 *  Plays audio files in WebWorks and browsers supporting HTML5 Audio.
 */
var html5SoundChannels = [];

function playSound(file, loops, volume, pan) {
    var browser = navigator.userAgent;

    /// Are we running in a PlayBook browser?
    if (browser.indexOf("PlayBook") > -1) {

        // Are we running in WebWorks?
        if (typeof blackberry != 'undefined') {
          var sound_id = blackberry.custom.audio.playFile(file, loops, volume, pan);
          return sound_id;
        } else if (typeof Audio != 'undefined') {
          return playSoundHTML5(file, loops, volume);
        }
    } else if (typeof Audio != 'undefined') {
     return playSoundHTML5(file, loops, volume);
    }
}

function playSoundHTML5(file, loops, volume) {
    if  (!html5SoundChannels[file]) {
        var audio = new Audio(file);
        if (loops)
            audio.loop = "true";
        audio.volume = volume;
        audio.preload = "auto";
        html5SoundChannels[file] = audio;
        html5SoundChannels[file].play();
    } else {
        html5SoundChannels[file].play();
    }
    return file;
}

//
function stopSoundChannel(id){
  if (typeof blackberry != 'undefined') {
    blackberry.custom.audio.stopChannel(id);
  }
  else
  {
   html5SoundChannels[file].pause();
   html5SoundChannels[file].currentTime = 0;   
  }
}



