import React from 'react';
import { Title } from './components/Title';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import './App.css';

const defaultTodos = [
  {text: "cortar cebollas", completed: false},
  {text: "secuestrar a yoshi", completed: false},
  {text: "ganarse la confianza de darwin", completed: false},
  {text: "sacar a navia", completed: true},
  {text: "sacar el arma de navia", completed: true},

]
function App() {
  const [todo, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);
  
  const searchedTodos = todo.filter(element => element.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))

  const completedTodos = todo.filter(element => element.completed).length; 
  const todos = todo.length;
  return (
    <React.Fragment>
      
      <Title />
      <TodoCounter completed={completedTodos} total={todos} />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {searchedTodos.map(todo =>(
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
