# FabForms

FabForms is a web application that transforms traditional forms into interactive, conversational experiences powered by advanced AI. It supports multi-modal inputs (text, voice, images), dynamic branching logic, real-time AI feedback, and analytics for various use cases including education, healthcare, marketing, and ticketing.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Database Schema](#database-schema)
- [Installation](#installation)

## Overview
FabForms revolutionizes form interactions by leveraging a microservices architecture and a document-centric NoSQL database. It offers an engaging, AI-driven form experience that adapts dynamically to user input.

## Features
- **Interactive Conversational Forms:** Transform static forms into engaging, dynamic interactions.
- **Multi-Modal Inputs:** Accept text, voice, and image inputs.
- **Real-Time AI Feedback:** Provide instant suggestions and validations.
- **Dynamic Branching Logic:** Customize form flows based on user responses.
- **User Management:** Robust authentication, role-based access control (RBAC), and attribute-based access control (ABAC).
- **Analytics and Reporting:** Track form views, completions, and user interactions.
- **External Integrations:** Easily connect with CRMs, payment gateways, and more.

## Architecture
FabForms is built on a microservices architecture that separates key functionalities:

- **Client Layer:**  
  - Web and mobile clients for interactive form rendering.
  
- **API Gateway:**  
  - Manages incoming requests, security, and routing to microservices.
  
- **Microservices:**  
  - **Form Service:** Handles form creation, versioning, and dynamic question logic.
  - **User Service:** Manages user profiles, roles, and permissions.
  - **Submission Service:** Records user responses and AI feedback.
  - **Conversation Service:** Maintains chat logs for interactive conversations.
  - **Analytics Service:** Aggregates usage metrics and performance data.
  
- **Database:**  
  - Uses MongoDB to store forms, users, submissions, conversations, and analytics data.
  
- **Caching & Messaging:**  
  - Redis is used for caching frequent queries, and message queues handle asynchronous tasks.

## Database Schema
FabForms uses a document-centric NoSQL schema comprising four main collections:

- **Users Collection:**  
  Stores user data, authentication credentials, preferences, and organization memberships.
  
- **Forms Collection:**  
  Contains form metadata, settings, questions (with embedded branching logic), themes, and analytics.
  
- **Submissions Collection:**  
  Records user responses, submission metadata, AI feedback, and evaluation metrics.
  
- **Conversations Collection:**  
  Manages interactive chat logs, contextual conversation data, and analytics for the conversational flow.

For further details, please refer to the [Database Schema Documentation]([./docs/db_schema.md](https://github.com/surajPrajapati-rgb/FabForms/blob/master/Documentation/NoSQL_Database_Schema_Design.md)).

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB (v4.0+)
- Redis
- npm or yarn

### Setup Steps
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/surajPrajapati-rgb/fabforms.git
   cd fabforms
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file by copying the provided example:
   ```bash
   cp .env.example .env
   ```
   Update the configuration values (e.g., database connection strings, API keys).

4. **Start the Development Server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

---
