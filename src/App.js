import React, { Component } from "react";
import TodoList from "./components/TodoList";
import ThemeSwitcher from "./components/ThemeSwitcher";
import * as Themes from "./components/styles/themes";
import ThemeContext from "./components/styles/themes/context";
import { ThemeProvider}  from "styled-components";

class App extends Component {
  state = {
    theme: Themes.dark
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === Themes.dark ? Themes.light : Themes.dark
    });
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <ThemeSwitcher toggleTheme={this.toggleTheme} />
          <ThemeContext.Consumer>
            {theme => (
              <ThemeProvider theme={theme}>
                <TodoList  />
              </ThemeProvider>
            )}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
