function decorateBanner(el) {
    // Add a class to the banner container for styling
    el.classList.add('banner-block');
  
    // Select the title element and set a class
    const title = el.querySelector('#banner-title');
    if (title) {
      title.classList.add('banner-title');
    }
  
    // Select the <img> inside picture and add class
    const img = el.querySelector('img');
    if (img) {
      img.classList.add('banner-image');
    }
  
    // Set the background color of the whole banner container to blue
    el.style.backgroundColor = '#007bff'; // blue color
  }
  
  // Apply this to all banner blocks, e.g. elements with "banner block" class
  const bannerEls = document.querySelectorAll('.banner.block');
  bannerEls.forEach((el) => {
    decorateBanner(el);
  });
  