const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// adding an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", event => {
  console.log("hit");
  console.log("event" + event);
  event.preventDefault();
  // storing the triggered events
  window.deferredPrompt = event;

  // removing the hidden class deom the button
  butInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();

  // resetting the deferred prompt variable
  window.deferredPrompt = null;

  butInstall.classList.toggle("hidden", true);
});

// adding a handler for the `appinstalled` event
window.addEventListener("appinstalled", event => {
  // clearing the prompt
  console.log("install hit");
  window.deferredPrompt = null;
});
