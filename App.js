import React, {useState} from 'react';
import TodoList from './components/TodoList/index';
import ThemeSwitcher from './components/ThemeSwitcher/index';
import { ThemeProvider } from 'styled-components';
import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';

function App() {
  const [theme, setTheme] = useState({
    theme: themes.dark
  });

  const toggleTheme = () => {
    setTheme({ theme: theme === themes.dark ? themes.light : themes.dark})
  };

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <ThemeSwitcher toggleTheme={toggleTheme}/>
        <ThemeContext.Consumer>
          {theme => (<ThemeProvider theme={theme}><TodoList/></ThemeProvider>)}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </div>  
  );
}

export default App;
