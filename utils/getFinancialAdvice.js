// utils/getFinancialAdvice.js
import Groq from "groq-sdk";

// Initialize the Groq client with the dangerouslyAllowBrowser option
const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true
});

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  
  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} INR
      - Expenses: ${totalSpend} INR 
      - Incomes: ${totalIncome} INR
      Provide detailed financial advice in 2 sentences to help the user manage their finances more effectively.
    `;

    // Send the prompt to the Groq API
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: userPrompt
        }
      ],
      model: "mixtral-8x7b-32768", // Using Mixtral model which has a 32k context window
      temperature: 0.7,
      max_tokens: 150
    });

    // Extract the advice from the response
    const advice = completion.choices[0]?.message?.content;

    if (!advice) {
      throw new Error("No advice generated");
    }

    console.log(advice);
    return advice;

  } catch (error) {
    console.error("Error fetching financial advice from Groq:", error);
    
    // Enhanced error handling
    if (error.response) {
      console.error("API Error Details:", error.response);
      return "An error occurred while processing your request. Please try again later.";
    }
    
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;