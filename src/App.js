
import './App.css';
import {useState} from 'react'

function App() {

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };
  

  const handleOnChange =(event) =>{
    const inputText = event.target.value;
    const words = inputText.split(/\s+/); // Split the text into words using whitespace as a delimiter
    const wordCount = words.length;
    setText(inputText);
    setWordCount(wordCount);
  }

  const [text, setText] = useState('Enter your text here');
  const [wordCount, setWordCount] = useState(0);
  

  return (
    <div className="App">
      <div style={containerStyle}>
        <div className="container" style={{textAlign:'center'}} >
          <h1>Responsive Paragraph word counter</h1><br></br><br></br>
          <div style={{ width: '100%', maxWidth: '600px', margin:'0 auto'}} >
            <textarea className="form-control" value={text} rows='5' onChange={handleOnChange}></textarea>
            <p>Word count is : {wordCount}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
