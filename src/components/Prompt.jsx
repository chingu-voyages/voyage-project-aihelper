import { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const Prompt = () => {
  const [aiAnswer, setAiAnswer] = useState(''); // Declare a state variable...

  const handleSubmit = async (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault()
  
    // Read the form data
    const form = e.target
    const formData = new FormData(form)
    const formJson = Object.fromEntries(formData.entries())
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
    const result = await model.generateContent(formJson.aiPrompt)
    setAiAnswer(result.response.text())
  }

  return (
    <div>
      <form method="post" onSubmit={ handleSubmit }>
        <label>
            What's your question? <input name="aiPrompt"  />
        </label>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
        <hr />        
      </form>
      <h1>Results:</h1>
      {aiAnswer !== '' && <p>{ aiAnswer }</p>}
      <hr />
    </div>
  )
}

export default Prompt
