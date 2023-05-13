// IMPORTS:
// notiflix
import Notiflix from 'notiflix';

// notiflix notify info about searching
// no pics found wrong term searching
function anyPicsfoundInfo() {
  Notiflix.Notify.warning(
    'Ups! There are no such a pics! Just try type somthing difrent!'
  );
}
// all pics from the library found info
function allPicsShownInfo() {
  Notiflix.Notify.info('This is all what we got! Hope u had fun!');
}

// EXPORT:
export { anyPicsfoundInfo, allPicsShownInfo };
