//Sintase JSX é misturar codigo html com javascript
//Codigo javascript

// Retorna codigo html
// setList retorna a funçao. usestate é a posiçao inicial
// O react é imúltavel
// css deve se fazer instalando no terminal isso: npm install styled-components
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Conteiner, ToDoList, Input, Button, ListIten, H3, Trash, Check } from './styles';

document.addEventListener("keypress", function(e){
  if (e.key == "Enter"){
   const btn = document.querySelector("#send");

   btn.click();
  }
});

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState('')


  function inputMudou(event) {
    setInputTask(event.target.value)


  }
  console.log(list)

  function cliqueiNoBotao() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  function finalizarTarefa(id) {

    const newList = list.map(item => (
      item.id == id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function ocultarImagem(id) {

    const newList = list.filter(item => {
      return item.id !== id
    })

    setList(newList)
  }

  return (
    <Conteiner>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="Tarefas a Realizar..." />
        <Button onClick={cliqueiNoBotao} id='send' >Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListIten isFinished={item.finished} key={item.id} >
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => ocultarImagem(item.id)} />
                </ListIten>
              ))
            ) : (
              <H3>Não Há Tarefas</H3>
            )
          }

        </ul>
      </ToDoList>
    </Conteiner>
  )

}

export default App
