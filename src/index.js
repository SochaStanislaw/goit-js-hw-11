// key - Twój unikalny klucz dostępu do API. 36272835-814780967e749f1d2663a198b
// q - termin, który chcemy wyszukać. W tej aplikacji to treść którą będzie wpisywał użytkownik.
// image_type - typ obrazka. Chcemy tylko zdjęcia, dlatego określ wartość parametru jako photo.
// orientation - orientacja zdjęcia. Określ wartość horizontal.
// safesearch - wyszukiwanie obrazków SFW (Safe For Work). Określ wartość true.

// IMPORTS:

// simple light box
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// notify
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// partials JS
import { eyeTracking } from './js/eye-tracking';
