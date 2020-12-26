import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarkdownGenerator from './markdownGenerator.jsx'

const initialMarkdown =  `
# Welcome to the Markdown Generator App
                          
## By Sarenna Roeung

You can learn more about the requirements for this project [here](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer).

Code can be added to this parser. For example: \`<div></div>\` 
Or this... 

\`\`\`
\\ this is a multiline code 
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

Why did I make this app?
1. It's cool
2. Do I need more reasons?

> ***It's cool*** - the creator

Here's a random picture to show you more about the coolness of this app

![Philadelphia's Magic Gardens](./philly-magic-gardens.jpg "Philadelphia's Magic Gardens")
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: initialMarkdown
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  
  render() {
    return(
      <div>
        <MarkdownGenerator
          value = {this.state.value}
          change = {this.handleChange}
          />
      </div>
    );
  }
  
}

export default App;
