from typing import Dict, Union
from langchain_community.tools.tavily_search import TavilySearchResults
from core.config import get_model
from core.settings import settings
from models.finance import InvestmentStrategy, UserData
import json

model = get_model()

print(model,"Model")

class FinanceService:
    @staticmethod
    def _get_search():
        # Initialize Tavily search with API key when needed
        return TavilySearchResults(
            max_results=2,
            tavily_api_key=settings.TAVILY_API_KEY
        )

    @staticmethod
    def generate_investment_suggestions(user_data: UserData) -> Union[InvestmentStrategy, str]:
        print("User Data", user_data.investments)
        username = user_data.username
        income = user_data.income_amount
        expenses = user_data.expenses
        savings = user_data.savings
        investments = user_data.investments
        income_frequency = user_data.income_frequency

        disposable_income = income - expenses
        
        prompt = (
            f"Based on the following user financial profile:\n"
            f"- User: {username}\n"
            f"- Income: ₹{income} ({income_frequency})\n"
            f"- Monthly Expenses: ₹{expenses}\n"
            f"- Disposable Income: ₹{disposable_income}\n"
            f"- Current Savings: ₹{savings}\n"
            f"- Existing Investments: {', '.join([f'{inv.type} (₹{inv.amount})' for inv in investments])}\n\n"
            "Provide a detailed investment strategy. Format your response as a valid JSON object with this exact structure:\n"
            "{\n"
            '  "summary": "Brief overview of strategy",\n'
            '  "recommended_investments": [\n'
            "    {\n"
            '      "Investment_Type": "investment name",\n'
            '      "Recommended_Amount": number,\n'
            '      "Risk_Level": "Low/Medium/High",\n'
            '      "Expected_Annual_Returns": number,\n'
            '      "Minimum_Investment_Period": "duration"\n'
            "    }\n"
            "  ],\n"
            '  "key_recommendations": ["specific action items"],\n'
            '  "risk_management_tips": ["risk management advice"]\n'
            "}\n"
            "Ensure the response is a valid JSON object."
        )

        response = model.invoke(prompt)
        print("Raw response:", response.content)
        
        try:
            # Clean the response content to ensure it's valid JSON
            content = response.content.strip()
            if content.startswith("```json"):
                content = content[7:]
            if content.endswith("```"):
                content = content[:-3]
            content = content.strip()
            
            parsed_response = json.loads(content)
            return InvestmentStrategy(**parsed_response)
        except Exception as e:
            print(f"Error parsing response: {str(e)}")
            return f"Could not generate investment suggestions: {str(e)}"

    @staticmethod
    def generate_budget_planning(user_data: UserData) -> str:
        username = user_data.username
        income = user_data.income_amount
        expenses = user_data.expenses
        savings = user_data.savings
        investments = user_data.investments
        income_frequency = user_data.income_frequency

        disposable_income = income - expenses
        prompt = (
            f"Create a detailed monthly budget plan for {username} with the following details:\n"
            f"- Monthly Income: ₹{income}\n"
            f"- Current Expenses: ₹{expenses}\n"
            f"- Savings: ₹{savings}\n"
            f"- Income Frequency: {income_frequency}\n\n"
            "Provide a budget breakdown following the 50/30/20 rule:\n"
            "- 50% for Essential Expenses\n"
            "- 30% for Discretionary Spending\n"
            "- 20% for Savings and Investments\n\n"
            "Format the response in a clear, readable table structure."
        )

        response = model.invoke(prompt)
        return response.content 