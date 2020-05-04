document.addEventListener('DOMContentLoaded', () => {

  const notification = document.querySelector('.notification');
  const close = document.querySelector('.close');

  const styles = {
    green: 'green',
    red: 'red',
    top: 50,
    none: 'none'
  };

  function checkStatus() {
    const status = document.querySelectorAll('.status');

    status.forEach((checkStatusUsers) => {
      checkStatusUsers.style.backgroundColor = styles.red;      
    });
  }

  function showNotification() {
    setTimeout(() => {
      notification.classList.add('show');
    }, 1500)
  }

  function unShowNotification() {
    notification.classList.remove('show');
  }

  function showBlock() {
    const preloader = document.querySelector('.spinner');
    const block = document.querySelector('.block');
    const px = 'px';

    setInterval(() => {
      preloader.style.display = styles.none;
      block.style.top = styles.top + px;
    }, 1500)
    
  }

  checkStatus();
  showBlock();
  showNotification();

  close.addEventListener('click', unShowNotification);
});