(function () {
  let el = document.getElementById('ready-cv')
  console.log(el.className)
  let aside = el.querySelector('.resume-aside')
  let main = el.querySelector('.resume-main')
  let header = el.querySelector('.resume-header')
  let contacts = document.createElement('div')
  contacts.appendChild(aside.querySelector('.phone'))
  let socials = aside.querySelectorAll('.social')
  socials.forEach(e => contacts.appendChild(e))
  contacts.className = 'contacts'
  header.appendChild(contacts)
  main.appendChild(aside.querySelector('.address-wrapper'))
  aside.removeChild(aside.querySelector('.personalInfo'))
  while (aside.children.length > 0) main.appendChild(aside.children[0])
  el.removeChild(aside)
}())
