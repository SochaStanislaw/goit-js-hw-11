// key - Twój unikalny klucz dostępu do API. 36272835-814780967e749f1d2663a198b
// q - termin, który chcemy wyszukać. W tej aplikacji to treść którą będzie wpisywał użytkownik.
// image_type - typ obrazka. Chcemy tylko zdjęcia, dlatego określ wartość parametru jako photo.
// orientation - orientacja zdjęcia. Określ wartość horizontal.
// safesearch - wyszukiwanie obrazków SFW (Safe For Work). Określ wartość true.

// 1. connect HTML&JS
// 2. adding event lisners
// 3. submit search form
// 4. zupdatuj url o zapytanie użytkownika
// 5. wyświetl wynik

// IMPORTS:
// modules js:
import { eyeTracking } from './js/eyeTracking';
import { getPics } from './js/getPics';
import { showPicsGallery } from './js/showPicsGallery';
import { anyPicsfoundInfo, allPicsShownInfo } from './js/NotiflixNotify';

// connect html&js:
// search form
const searchInput = document.getElementById('search-input');
// div for new gallery
const galleryOfPics = document.querySelector('.gallery');
// btn to load more pics
const loadMorePicsBtn = document.querySelector('.load-more');

// add event listners:
// what to do after submit typed search
searchInput.addEventListener('submit', searchingPics);
// what load more btn should do
loadMorePicsBtn.addEventListener('click', loadMorePics);

let searchTerm = '';
// Początkowo wartość parametru page powinna wynosić 1.
let pageNumber = 1;
// how many pic per page gonna show? 40
// TEST
const picsPerPage = 5;

function searchingPics(searching) {
  searching.preventDefault();
  // Początkowo wartość parametru page powinna wynosić 1.
  pageNumber = 1;
  // input term to find
  searchTerm = searching.target.searchQuery.value;
  galleryOfPics.innerHTML = '';
  // hide btn load-more in css
  loadMorePicsBtn.classList.add('hide-btn');
  // when nothing is typed in form input return info
  if (searchTerm === '') {
    alert("oh! c'mon! u have to type anything to find some cool pics!🤦🏻‍♂️");
    return;
  }
  // fetch data
  getPics(searchTerm, pageNumber, picsPerPage).then(({ data }) => {
    // if array is empty shows info from notiflix
    if (data.totalHits === 0) {
      anyPicsfoundInfo();
    } else {
      // show found pics in gallery
      showPicsGallery(data.hits);
    }
    // if is more pics shows btn load more
    if (data.totalHits > picsPerPage) {
      loadMorePicsBtn.classList.remove('hide-btn');
    }
  });
  // .catch(error => alert(error));
}

// button to load more pics
function loadMorePics() {
  // Przy każdym kolejnym żądaniu, koniecznym jest zwiększenie wartości tego parametru o 1.
  pageNumber += 1;
  // fetch data
  getPics(searchTerm, pageNumber, picsPerPage)
    .then(({ data }) => {
      // show more found pics in gallery
      showPicsGallery(data.hits);

      const allPages = Math.ceil(data.totalHits / picsPerPage);

      // hide btn load-more if actual page number is bigger than all pages
      if (pageNumber > allPages) {
        loadMorePicsBtn.classList.add('hide-btn');
        // if all found pics were shown - notiflix info about it
        allPicsShownInfo();
      }
    })
    .catch(error => alert(error));
}
