// pupil trakcing pointer
const eyeTracking = document.querySelectorAll('.eye__white-area .eye__pupil');

window.addEventListener('mousemove', e => {
  eyeTracking.forEach(pupil => {
    // get x and y postion of cursor
    var rect = pupil.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 75 + 'px';
    var y = (e.pageY - rect.top) / 75 + 'px';
    pupil.style.transform = 'translate3d(' + x + ',' + y + ', 0px)';
  });
});

export { eyeTracking };
