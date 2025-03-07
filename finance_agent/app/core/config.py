from langchain_community.llms import HuggingFaceHub
from .settings import settings
from langchain_anthropic import ChatAnthropic
from fastapi import HTTPException

def get_model():
    try:
        # return HuggingFaceHub(
        #     repo_id="google/gemma-2-2b-it",
        #     model_kwargs={"temperature": 1},
        #     task="text-generation", 
        #     huggingfacehub_api_token=settings.HUGGINGFACE_API_KEY
        # )
        model = ChatAnthropic(model="claude-3-5-sonnet-20240620", temperature=0,anthropic_api_key=settings.ANTHROPIC_API_KEY)
        return model
    except Exception as e:
        print(e)
        raise HTTPException(
            status_code=500,
            detail=f"Failed to initialize HuggingFace model: {str(e)}"
        ) 