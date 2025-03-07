# Finance Agent API

A FastAPI-based financial advisory service that provides personalized investment suggestions and budget planning using AI models. The service uses HuggingFace's Gemma model to analyze user financial data and provide tailored recommendations.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Investment Advisory**
  - Personalized investment strategies
  - Risk assessment and portfolio diversification
  - Investment amount recommendations
  - Expected returns analysis

- **Budget Planning**
  - Detailed budget allocation
  - Expense categorization
  - Savings recommendations
  - Emergency fund planning

- **AI-Powered Analysis**
  - Uses HuggingFace's Gemma-2-2b-it model
  - Natural language processing for financial advice
  - Data-driven recommendations

## Prerequisites

- Python 3.8+
- FastAPI
- HuggingFace API access
- Tavily API access
- Anthropic API access

## Installation

1. Clone the repository:
2. Install dependencies:
3. Set up environment variables:
4. Run the API:

## Environment Setup

1. Create a `.env` file in the root directory with your API keys:

2. pip install -r requirements.txt

3. Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```



## API Documentation

### Available Endpoints

#### 1. GET /
- **Description**: Welcome endpoint
- **Response**: Welcome message
- **Example Response**: `{"message": "Welcome to Finance Agent API"}`

#### 2. POST /api/v1/finance/advice
- **Description**: Get financial advice
- **Parameters**:
  - `selected_input` (required): Type of advice needed
    - Options: "Investment Suggestions" or "Budget Planning"
  - `user_data` (required): Financial information
    - `username`: User identifier
    - `income_amount`: Monthly/yearly income
    - `expenses`: Regular expenses
    - `savings`: Current savings
    - `investments`: List of current investments
    - `income_frequency`: Income frequency (monthly/yearly)
- **Response**: Financial advice based on the selected input

## Project Structure

finance_agent/Readme.md
finance_agent/
├── app/
│ ├── init.py
│ ├── api/
│ │ ├── init.py
│ │ └── v1/
│ │ ├── endpoints/
│ │ │ └── finance.py
│ │ └── router.py
│ ├── core/
│ │ ├── config.py
│ │ └── settings.py
│ ├── models/
│ │ └── finance.py
│ ├── services/
│ │ └── finance.py
│ └── main.py
├── tests/
│ └── test_finance.py
├── .env
├── requirements.txt
└── README.md

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with:
- [FastAPI](https://fastapi.tiangolo.com/)
- [Langchain](https://www.langchain.com/)
- [HuggingFace](https://huggingface.co/)

