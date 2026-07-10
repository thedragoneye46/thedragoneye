  document.getElementById('year').textContent = new Date().getFullYear();

  const form = document.getElementById('notifyForm');
  const note = document.getElementById('formNote');
  const input = document.getElementById('emailInput');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const value = input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(value)){
      note.textContent = 'Enter a valid email address.';
      note.classList.remove('success');
      return;
    }

    note.textContent = "You're on the list — we'll be in touch when the studio opens.";
    note.classList.add('success');
    input.value = '';
    input.blur();
  });
