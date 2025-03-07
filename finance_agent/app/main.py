from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.settings import settings
from api.v1.router import api_router

print(settings.ANTHROPIC_API_KEY,"Anthropic API Key")

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/")
async def root():
    return {"message": "Welcome to Finance Agent API"}

# Debug endpoint (remove in production)
@app.get("/debug/settings")
async def debug_settings():
    return {
        "tavily_key_set": bool(settings.TAVILY_API_KEY),
        "huggingface_key_set": bool(settings.HUGGINGFACE_API_KEY),
        "anthropic_key_set": bool(settings.ANTHROPIC_API_KEY)
    } 