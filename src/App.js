import {Component} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeLanguage: languageGreetingsList[0].id}

  onChangeLanguage = e => {
    this.setState({activeLanguage: e.target.value})
  }

  render() {
    const {activeLanguage} = this.state
    const activeData = languageGreetingsList.find(
      lang => activeLanguage === lang.id,
    )
    return (
      <div className="app_container">
        <h1 className="title">Multilingual Greetings</h1>
        <ul className="buttons_container">
          {languageGreetingsList.map(btn => (
            <li>
              <button
                className={
                  activeLanguage === btn.id ? 'active_button' : 'custom_button'
                }
                type="button"
                value={btn.id}
                onClick={this.onChangeLanguage}
                key={btn.id}
              >
                {btn.buttonText}
              </button>
            </li>
          ))}
        </ul>
        <div className="image_container" key={activeData.id}>
          <img
            src={activeData.imageUrl}
            alt={activeData.imageAltText}
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default App
