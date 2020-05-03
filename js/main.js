document.addEventListener('DOMContentLoaded', () => {

  const notification = document.querySelector('.notification');
  const close = document.querySelector('.close');

  const styles = {
    green: 'green',
    red: 'red',
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
    }, 1000)
  }

  function unShowNotification() {
    notification.classList.remove('show');
  }

  checkStatus();
  showNotification();

  close.addEventListener('click', unShowNotification);
});