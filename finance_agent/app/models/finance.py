from typing import List, Optional, Dict, Union
from pydantic import BaseModel

class Investment(BaseModel):
    type: str
    amount: float

class UserData(BaseModel):
    username: str
    income_amount: float
    expenses: float
    savings: float
    investments: List[Investment]
    income_frequency: str

class InvestmentRecommendation(BaseModel):
    Investment_Type: str
    Recommended_Amount: float
    Risk_Level: str
    Expected_Annual_Returns: float
    Minimum_Investment_Period: str

class InvestmentStrategy(BaseModel):
    summary: str
    recommended_investments: List[InvestmentRecommendation]
    key_recommendations: List[str]
    risk_management_tips: List[str]

class FinanceRequest(BaseModel):
    query: Optional[str] = None
    selected_input: str
    user_data: Optional[UserData] = None

class FinanceResponse(BaseModel):
    suggestions: Optional[Union[InvestmentStrategy, str]] = None
    budget_planning: Optional[str] = None
    message: Optional[str] = None 