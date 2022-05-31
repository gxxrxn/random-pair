chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: "randompair.html",
  });
});
