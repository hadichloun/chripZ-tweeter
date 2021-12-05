import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Twitter/>
      <StyledDiv>
      <div className="border border-grey-300 shadow rounded-md  max-w-sm w-full mx-auto">
        <div className="animate-pulse flex p-6 h-32">
          <div className="bg-gray-300 rounded-lg flex items-center justify-center h-16 w-16">
            <Icon Component={ProfileIcon} color="#6782A4" />
          </div>
          <div className="flex-1 space-y-4 py-1 ml-3">
            <div className="h-7 bg-gray-500 rounded-xl w-20"></div>
            <div className="space-y-2 w-32">
              <div className="h-3 bg-gray-300 rounded-xl"></div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex items-center justify-center p-6">
          <div className="h-4 bg-gray-300 rounded-xl w-5/6"></div>
        </div>
      </div>
    </StyledDiv>
      <form>
        <input>login</input>
        <input>signup</input>        
      <h1>tweet button</h1>
      <h1>chripZzZ</h1></form>
    </div>
  );
}

export default App;
