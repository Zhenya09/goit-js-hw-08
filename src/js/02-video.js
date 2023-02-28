import Vimeo from '@vimeo/player';
import { throttle } from 'lodash'

const iframe = document.querySelector('iframe')
const vimeoPlayer = new Vimeo(iframe);


vimeoPlayer.on('timeupdate', throttle(e => {
        localStorage.setItem('videoplayer-current-time', e.seconds);
    }, 1000));

    vimeoPlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);
