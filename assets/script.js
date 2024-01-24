const title = document.getElementById('title')
const button = document.getElementById('button')

button.addEventListener('click', () => {
  title.classList.toggle('text-blue-500')
  title.classList.toggle('text-blue-300')
})
