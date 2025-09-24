import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all'); // all, active, completed
  
  const addTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([...todos, { 
        id: Date.now(), 
        text: inputValue, 
        completed: false 
      }]);
      setInputValue('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  
  const containerStyle = {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };
  
  const formStyle = {
    display: 'flex',
    marginBottom: '1rem'
  };
  
  const inputStyle = {
    flex: '1',
    padding: '0.75rem',
    borderRadius: '4px 0 0 4px',
    border: '1px solid #ddd',
    fontSize: '1rem'
  };
  
  const buttonStyle = {
    padding: '0.75rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer'
  };
  
  const todoItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0.75rem',
    borderBottom: '1px solid #eee'
  };
  
  const todoTextStyle = (completed) => ({
    flex: '1',
    textDecoration: completed ? 'line-through' : 'none',
    color: completed ? '#6c757d' : 'inherit'
  });
  
  const filterStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1rem',
    padding: '0.75rem 0'
  };
  
  const filterButtonStyle = (current) => ({
    padding: '0.25rem 0.5rem',
    border: 'none',
    backgroundColor: 'transparent',
    color: filter === current ? '#007bff' : '#6c757d',
    fontWeight: filter === current ? 'bold' : 'normal',
    cursor: 'pointer'
  });
  
  return (
    <div style={containerStyle}>
      <h3>Todo App</h3>
      
      <form onSubmit={addTodo} style={formStyle}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Add</button>
      </form>
      
      <div>
        {filteredTodos.length === 0 ? (
          <div style={{ padding: '1rem 0', textAlign: 'center', color: '#6c757d' }}>
            {filter === 'all' ? 'No tasks yet! Add one above.' : 
             filter === 'active' ? 'No active tasks!' : 'No completed tasks!'}
          </div>
        ) : (
          filteredTodos.map(todo => (
            <div key={todo.id} style={todoItemStyle}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                style={{ marginRight: '0.75rem' }}
              />
              <span style={todoTextStyle(todo.completed)}>{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: '#dc3545',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  lineHeight: 1
                }}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
      
      {todos.length > 0 && (
        <div style={filterStyle}>
          <div>
            <span style={{ color: '#6c757d', fontSize: '0.9rem' }}>
              {todos.filter(todo => !todo.completed).length} items left
            </span>
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button 
              onClick={() => setFilter('all')} 
              style={filterButtonStyle('all')}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('active')} 
              style={filterButtonStyle('active')}
            >
              Active
            </button>
            <button 
              onClick={() => setFilter('completed')} 
              style={filterButtonStyle('completed')}
            >
              Completed
            </button>
          </div>
          
          {todos.some(todo => todo.completed) && (
            <button
              onClick={clearCompleted}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#6c757d',
                cursor: 'pointer',
                fontSize: '0.9rem'
              }}
            >
              Clear completed
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoApp;