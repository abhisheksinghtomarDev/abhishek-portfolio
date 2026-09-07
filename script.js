const today = document.querySelector('#today');
if (today) {
  today.textContent = new Intl.DateTimeFormat('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric'
  }).format(new Date());
}
