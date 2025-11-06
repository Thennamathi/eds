// blocks/teaser/teaser.js
export default function decorateTeaser(el) {
    el.classList.add('teaser-block');
  
    // Grab heading (optional)
    const heading = el.querySelector('h2, h3, h4');
    if (heading) {
      heading.classList.add('teaser-title');
    }
  
    // Look for YouTube or Twitter links inside
    const links = el.querySelectorAll('a');
    links.forEach((link) => {
      const url = link.href;
  
      // YouTube embed
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const videoId = url.includes('v=')
          ? url.split('v=')[1].split('&')[0]
          : url.split('/').pop();
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.width = '560';
        iframe.height = '315';
        iframe.title = 'YouTube video player';
        iframe.frameBorder = '0';
        iframe.allow =
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        iframe.classList.add('teaser-video');
        link.replaceWith(iframe);
      }
  
      // Twitter embed
      if (url.includes('twitter.com')) {
        const blockquote = document.createElement('blockquote');
        blockquote.classList.add('twitter-tweet');
        const anchor = document.createElement('a');
        anchor.href = url;
        blockquote.appendChild(anchor);
        link.replaceWith(blockquote);
  
        // Load Twitter script only once
        if (!document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')) {
          const script = document.createElement('script');
          script.src = 'https://platform.twitter.com/widgets.js';
          script.async = true;
          document.body.appendChild(script);
        }
      }
    });
  }
  