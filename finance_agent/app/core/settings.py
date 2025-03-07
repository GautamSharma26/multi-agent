from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    API_V1_STR: str
    PROJECT_NAME: str
    ANTHROPIC_API_KEY: str
    TAVILY_API_KEY: str
    HUGGINGFACE_API_KEY: str
    
    class Config:
        env_file = ".env"
        env_file_encoding = 'utf-8'

settings = Settings() 