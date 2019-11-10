if (!('serviceWorker' in navigator)) {
  console.log("Your Browser Doesn't Support Service Worker");
} else {
  navigator.serviceWorker.register('sw.js', {scope: '/'})
  .then(function() {
    console.log('Service Worker registered');
  })
  .catch(function(error) {
    console.log('Error: Failed register service worker:', error);
  });
}

window.addEventListener("beforeinstallprompt", e => {
    // Stop Chrome from asking _now_
    e.preventDefault();

    // Create your custom "add to home screen" button here if needed.
    // Keep in mind that this event may be called multiple times,
    // so avoid creating multiple buttons!
    btnAdd.onclick = () => e.prompt();
});
