let todoForm = document.getElementById('form')
let inp = document.getElementsByTagName('input')[0]
let todoList = document.getElementById('todoList')

todoForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    let obj = {item: inp.value}
    inp.value = ''
    fetch('/todo', {
        method: 'POST',
        headers:{
            'Content-type': 'application/JSON',
            'Accept': 'application/JSON',
            
        },
        body: JSON.stringify(obj)

    }).then(res=>{
      
        return res.json()
    }).then(result=>{
        let li = document.createElement('li')
        li.id = result._id
        li.innerHTML=result.item
        todoList.append(li)
        
    })
})


todoList.addEventListener('click', (e)=>{
    
    
        let obj = {_id: e.target.id}
       
        fetch('/todo', {
            method: 'DELETE',
            headers:{
                'Content-type': 'application/JSON',
                'Accept': 'application/JSON',
                
            },
            body: JSON.stringify(obj)
    
        }).then(res=>{
            return res.json()
        }).then(result=>{
           console.log(result)
            e.target.remove()
        })
    
})