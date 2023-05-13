// connect html&js:
const galleryOfPics = document.querySelector('.gallery');

// building gallery after found pics
// array of infos about pic
function showPicsGallery(pics) {
  const picCard = pics
    .map(pic => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = pic;
      return `<div class="pic-card">
  
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  
  <div class="info">
    <p class="info-item">Likes: ${likes}</p>
    <p class="info-item">Views: ${views}</p>
    <p class="info-item">Comments: ${comments}</p>
    <p class="info-item">Downloads: ${downloads}</p>
  </div>
</div>`;
    })
    .join('');

  // add to html
  galleryOfPics.insertAdjacentHTML('beforeend', picCard);
}

// EXPORT:
export { showPicsGallery };
