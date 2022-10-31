import { save, load } from './storage';
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

сurrentTime();

const onPlay = function (data) {
  save(TIME_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

function сurrentTime() {
  let time = load(TIME_KEY);
  if (time) {
    player.setCurrentTime(time);
  }
}
