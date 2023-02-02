(function(){
  const container = document.querySelector('.search-result__content');
  if (!container) return;
  const sortTool = container.querySelector('.search-sort');
  if (!sortTool) return;

  const cols = container.querySelectorAll('.search-result__grid-col');
  const btns = sortTool.querySelectorAll('.btn');

  const toggleViewClass = function (btn) {
    let id = btn.id;
    for (let i = 0; i < cols.length; i++) {
      let item = cols[i];
      if (id === 'lst') {
        item.classList.add('search-result__grid-col--list');
        item.firstElementChild.classList.add('result-card--list');
      } else {
        item.classList.remove('search-result__grid-col--list');
        item.firstElementChild.classList.remove('result-card--list');
      }
    }
  };

  const btnsClickHandler = function (e) {
    let currentBtn = e.target;
    let nextBtn = currentBtn.nextElementSibling;
    let prevBtn = currentBtn.previousElementSibling;
    if (nextBtn && nextBtn.classList.contains('active')) {
      nextBtn.classList.remove('active');
    }
    if (prevBtn && prevBtn.classList.contains('active')) {
      prevBtn.classList.remove('active');
    }
    if (currentBtn) {
      currentBtn.classList.add('active');
      toggleViewClass(currentBtn);
    }
  };

  for (let i = 0; i < btns.length; i++) {
    let btn =  btns[i];
    btn.addEventListener('click', btnsClickHandler);
  }

}());
