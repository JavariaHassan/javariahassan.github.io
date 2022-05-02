const toggle = document.getElementsByClassName("ufo--page-navbar-toggle")[0];
const toggle_container = document.getElementsByClassName("ufo--page-navbar-container")[0];
toggle.onclick = function() {
  if (toggle.classList.contains("on")) {
    toggle.classList.remove("on");
    toggle_container.classList.remove("on");
  } else {
    toggle.classList.add('on');
    toggle_container.classList.add('on');
  }
}

const navbar_items = document.getElementsByClassName("ufo--page-navbar-item");
Array.from(navbar_items).forEach(item => {
  try {
    item_child = item.getElementsByTagName('div')[0];
  } catch {
    item_child = item.getElementsByTagName('a')[0];
  }
  item_child.addEventListener("click", function() {
    toggle.classList.remove("on");
    toggle_container.classList.remove("on");
  })
});