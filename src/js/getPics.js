// IMPORTS:
// import axios http client
import axios from 'axios';

// Your API key: 36272835-814780967e749f1d2663a198b
// q - termin, który chcemy wyszukać. W tej aplikacji to treść którą będzie wpisywał użytkownik.
// image_type - typ obrazka. Chcemy tylko zdjęcia, dlatego określ wartość parametru jako photo.
// orientation - orientacja zdjęcia. Określ wartość horizontal.
// safesearch - wyszukiwanie obrazków SFW (Safe For Work). Określ wartość true.

// fetch data
async function getPics(searchTerm, pageNumber, picsPerPage) {
  const response = await axios.get(
    `https://pixabay.com/api/?key=36272835-814780967e749f1d2663a198b&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true&page=${pageNumber}&per_page=${picsPerPage}`
  );
  return response;
}

// EXPORT:
export { getPics };
