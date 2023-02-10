const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
})

function dragstart(event) {
	event.target.classList.add('hold')
	setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
	event.target.classList.remove('hold')
	event.target.classList.remove('hide') 
}

function dragover(event) {
	event.preventDefault() 
}

function dragenter(event) {
	if(event.target.id==1) {
	  event.target.classList.add('hovered-start') 
	} else if(event.target.id==2) {
	  event.target.classList.add('hovered-progress') 
	} else if(event.target.id==3) {
	  event.target.classList.add('hovered-done') 
	}
}

function dragleave(event) {
	event.target.classList.remove('hovered-start') 
  event.target.classList.remove('hovered-progress') 
  event.target.classList.remove('hovered-done') 
}

function dragdrop(event) {
	event.target.classList.remove('hovered-start') 
  event.target.classList.remove('hovered-progress') 
  event.target.classList.remove('hovered-done') 
	event.target.append(item)
}
