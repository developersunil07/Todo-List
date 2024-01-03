let addTodo  = document.querySelector('.add');
let list = document.querySelector('.todos')
let search = document.querySelector('.search input')

addTodo.addEventListener("submit", (e)=>{
    e.preventDefault();

    let todos = addTodo.addNew.value;

    if(todos.length){
        let template = `<li>${todos}<i class="fa fa-trash delete" aria-hidden="true"> </i></li>
       `
       
        list.innerHTML = list.innerHTML + template;
        addTodo.reset();
    }
})

list.addEventListener('click' ,e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
  

})

search.addEventListener('keyup',()=>{

    let term = search.value.trim();


    Array.from(list.children).filter((list)=>{
        return !list.textContent.includes(term)
    }).forEach((list)=>{
        list.classList.add('hide')
    })

  

    
        Array.from(list.children).filter((list)=>{
            return list.textContent.includes(term)  
        }).forEach((list)=>{
            list.classList.remove('hide')
        })
    
   

})

