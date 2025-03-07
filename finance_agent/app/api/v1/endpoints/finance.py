from fastapi import APIRouter, HTTPException
from models.finance import FinanceRequest, FinanceResponse, InvestmentStrategy
from services.finance import FinanceService
from core.settings import settings
from typing import Union

router = APIRouter()


@router.post("/advice", response_model=FinanceResponse)
async def get_finance_advice(request: FinanceRequest) -> FinanceResponse:
    try:
        if not request.user_data:
            raise HTTPException(status_code=400, detail="User data is required")

        if request.selected_input == "Investment Suggestions":
            suggestions = FinanceService.generate_investment_suggestions(request.user_data)
            return FinanceResponse(suggestions=suggestions)
            
        elif request.selected_input == "Budget Planning":
            budget_plan = FinanceService.generate_budget_planning(request.user_data)
            return FinanceResponse(budget_planning=budget_plan)
            
        else:
            return FinanceResponse(message="Invalid selection")
            
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e)) 