(function() {

  /* toggle menu */
  var menuBtn = document.getElementById('menu-btn');
  var menuList = document.getElementById('menu-list');

  menuBtn.onclick = function() {
    menuList.classList.toggle('menu-list_closed');
  }

  /* toggle account-expand */
  var accountExpandBtn = document.getElementById('account-expand-btn');
  var accountExpandBlock = document.getElementById('account-expand-block');
  accountExpandBtn.onclick = function() {
    accountExpandBtn.classList.toggle('expand-btn_active')
    accountExpandBlock.classList.toggle('_no-visible');
  }

  /* edit my favourites */
  var editBtn = document.getElementById('favourites-edit-btn');
  var editDoneBtn = document.getElementById('favourites-done-edit-btn');
  var dragBlockBtns = document.getElementsByClassName('drag-block-btn');
  var controlsEdit = document.getElementsByClassName('controls-edit');
  var controlsDefault = document.getElementsByClassName('controls-default');

  editBtn.onclick = function () {
    editDoneBtn.classList.toggle('_no-visible');
    editBtn.classList.toggle('_no-visible');
    for ( var i = 0; i < dragBlockBtns.length; i++) {
      dragBlockBtns[i].classList.toggle('_no-visible');
    }
    for ( var i = 0; i < controlsEdit.length; i++) {
      controlsEdit[i].classList.toggle('_no-visible');
    }
    for ( var i = 0; i < controlsDefault.length; i++) {
      controlsDefault[i].classList.toggle('_no-visible');
    }
  }
  editDoneBtn.onclick = function () {
    editDoneBtn.classList.toggle('_no-visible');
    editBtn.classList.toggle('_no-visible');
    for ( var i = 0; i < dragBlockBtns.length; i++) {
      dragBlockBtns[i].classList.toggle('_no-visible');
    }
    for ( var i = 0; i < controlsEdit.length; i++) {
      controlsEdit[i].classList.toggle('_no-visible');
    }
    for ( var i = 0; i < controlsDefault.length; i++) {
      controlsDefault[i].classList.toggle('_no-visible');
    }
  }
})();