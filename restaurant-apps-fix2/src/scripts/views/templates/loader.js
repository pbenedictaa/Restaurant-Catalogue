const loader = {
  loaderTemplate() {
    return `<div class="loader">
        <span></span>
        <span></span>
        <span></span>
    </div>`;
  },

  OfflineTemplate() {
    return `
        <div class="content">
          <picture>
            <source type="image/webp" srcset="./images/sad-emoji.webp">
            <source type="image/jpeg" srcset="./images/sad-emoji.webp">
            <img src="./images/sad-emoji.png" alt="people reviewer">
          </picture>
            <h2>Please refresh this site.</h2>
        </div>`;
  },
};

export default loader;
