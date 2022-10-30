import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
STORAGE_KEY = 'videoplayer-current-time';

сurrentTime();

player.on('timeupdate', function (data) {
  localStorage.setItem(STORAGE_KEY, data.seconds);
});

function сurrentTime() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    player.setCurrentTime(savedMessage);
  }
}
