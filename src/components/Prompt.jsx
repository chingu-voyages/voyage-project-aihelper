import { GoogleGenerativeAI } from '@google/generative-ai'

const handleSubmit = async (e) => {
  // Prevent the browser from reloading the page
  e.preventDefault()

  // Read the form data
  const form = e.target
  const formData = new FormData(form)
  const formJson = Object.fromEntries(formData.entries())
  const genAI = new GoogleGenerativeAI(import.meta.env.GEMINI_API_KEY)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })
  const result = await model.generateContent(formJson.aiPrompt)
  console.log(result.response.text())
}

const Prompt = () => {
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
      <p>Results:</p>
      <hr />
    </div>
  )
}

export default Prompt
