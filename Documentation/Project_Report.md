# Product Report

👉 [Introduction](#introduction)  

👉 [User Segmentation](#user-segmentation)  

👉 [UI Design](https://www.figma.com/design/WQyxLAKiWOsXGqLHfEc5g7/Untitled?node-id=1-550&t=xEeYSzeP0RmXsJn4-1) 

👉 [UserFlow](#userflow)

👉 [Database Design](#database-design)

👉 [Service-Oriented Architecture](#service-oriented-architecture)  

👉 [System Design](https://www.mermaidchart.com/raw/dee00f7d-a20c-4870-a513-278dd6621981?theme=light&version=v0.1&format=svg)  


## Proposal

### Team
- Ashutosh  
- Sahil  
- Suraj  

### [Introduction](#introduction)
FabForms is an innovative web application that transforms traditional form creation and data collection into an interactive, conversational experience.

### What is your product about?
FabForms leverages conversational interfaces to create a developer-friendly yet user-centric solution, aiming to rival traditional form tools like Google Forms and SurveyMonkey.

### Why you want to build this product?
We aim to enhance user engagement, accessibility, and intelligent automation in form creation and data collection.

### [Users](#user-segmentation)
- Educators  
- Healthcare providers  
- HR professionals  
- Marketers  
- Customer support teams  

### Use Cases
- Interactive quizzes and feedback forms for students.  
- Patient intake forms with symptom tracking.  
- Employee surveys, recruitment, and onboarding processes.  
- Lead generation and customer feedback collection.  
- Ticketing forms with conversational interfaces.  

### Differentiating Features
- AI-Powered Dynamic Responses  
- Real-Time Validation and Feedback  
- Analytics and Data Dashboard  

### HCI Principles highlighted in the product
- Simplicity  
- Accessibility  
- Flexibility  
- Live interaction  

### [User Segmentation](#user-segmentation)
FabForms targets **five core industries**, each with distinct user groups:  
- **Educators**: Need for engaging and interactive forms for students.  
- **Healthcare Providers**: Efficient patient intake and symptom tracking.  
- **HR Professionals**: Streamlined employee surveys and onboarding.  
- **Marketers**: Effective lead generation and customer feedback.  
- **Customer Support Teams**: Quick and efficient ticketing systems.  

### **Needs, Pain Points, Challenges & Preferences**

#### **Education**
| **User Group** | **Needs** | **Pain Points** | **Challenges** | **Preferences** |  
|--------------|-----------|----------------|--------------|--------------|  
| **Teachers** | Engaging quizzes, auto-grading, real-time student feedback | Manual grading is time-consuming, low student engagement | Ensuring students stay motivated, making assessments interactive | Mobile-friendly, gamified interfaces, AI-generated questions |  
| **Professors** | Complex assessments, plagiarism detection, adaptive testing | Time-consuming question creation, difficult to track student performance over time | Academic integrity concerns, creating tests that challenge students without overwhelming them | AI-assisted question generation, customizable test formats, integration with LMS (e.g., Blackboard, Moodle) |  
| **Students** | Interactive learning tools, instant personalized feedback, progress tracking | Boring, text-heavy forms, lack of immediate feedback | Difficulty understanding questions, accessibility issues for students with disabilities | Conversational UI, voice input, mobile accessibility, accessibility features (text-to-speech) |  

## **HR (Human Resources)**
| **User Group** | **Needs** | **Pain Points** | **Challenges** | **Preferences** |  
|--------------|-----------|----------------|--------------|--------------|  
| **Recruiters** | Candidate evaluation forms, digital onboarding checklists, interview feedback collection | Manual data entry, tracking multiple applicants across different platforms | Managing a high volume of applications, standardizing evaluation criteria | Auto-fill from resumes, AI-powered applicant ranking, integration with LinkedIn/ATS |  
| **Employees** | Performance review forms, anonymous feedback tools, self-assessment surveys | Long, tedious forms, fear of biased evaluations | Encouraging honest feedback, reducing friction in the evaluation process | Mobile accessibility, progress-saving feature, anonymous mode |  
| **HR Managers** | Survey analytics, compliance tracking, employee engagement measurement | Low survey response rates, difficulty analyzing large-scale feedback data | Gaining meaningful insights from qualitative responses | Automated reminders, interactive reports, sentiment analysis |  

---
#### **Healthcare**
| **User Group** | **Needs** | **Pain Points** | **Preferences** |  
|----------------|-----------|-----------------|-----------------|  
| **Doctors** | Streamlined patient intake, symptom tracking | Repetitive data entry, EHR integration issues | HIPAA-compliant templates |  
| **Nurses** | Quick form creation, real-time updates | Tech-averse patients | Voice/visual input support |  
| **Medical Staff** | Data organization, compliance | Manual data transfers | Drag-and-drop form builders |  

#### **Marketing**
| **User Group** | **Needs** | **Pain Points** | **Preferences** |  
|----------------|-----------|-----------------|-----------------|  
| **Marketing Managers** | Lead generation, customer feedback | Low engagement with static forms | Conversational chatbots, pop-up widgets |  
| **Analysts** | Accurate data, real-time insights | Manual reporting | Customizable dashboards, API integrations |  

#### **Customer Support**
| **User Group** | **Needs** | **Pain Points** | **Preferences** |  
|----------------|-----------|-----------------|-----------------|  
| **Support Agents** | Ticketing, conversational interfaces | Repetitive queries | Auto-suggested FAQs, live chat integration |  
| **Support Managers** | Performance tracking, reporting | Siloed data | Real-time analytics, agent training tools |  



### [UserFlow](#userflow)

![](https://github.com/surajPrajapati-rgb/FabForms/blob/cf1d3a4624e477c5d1067591fc87930c9ac2926c/Documentation/assets/UserFlow.png)
---

### [Service-Oriented Architecture](#service-oriented-architecture)
![Service-Oriented Architecture](https://github.com/surajPrajapati-rgb/FabForms/blob/984e7dc60007fd588730bd8e8e930f748cebbf09/Documentation/assets/Service-Oriented%20Architecture.png)

---

### [Database Design](#database-design-diagram)

![](https://github.com/surajPrajapati-rgb/FabForms/blob/e20838505a4db2e20f77799a09ecd6e4c1534c03/Documentation/assets/db_diagram.png)

### **1. Forms**
```json
{
  "form_id": "form_12345",
  "creator_id": "user_98765",
  "organization_id": "org_45678",
  "title": "Patient Intake Form",
  "version": 2,
  "created_by_prompt_id": "prompt_001",
  "modified_by_prompt_ids": ["prompt_002"],
  "questions": [
    {
      "question_id": "q1",
      "text": "What is your name?",
      "type": "text",
      "is_required": true,
      "alt_text": "Text input for name",
      "position": 1,
      "auto_fillable": true
    },
    {
      "question_id": "q2",
      "text": "What is your age?",
      "type": "number",
      "is_required": true,
      "alt_text": "Number input for age",
      "position": 2,
      "auto_fillable": true
    },
    {
      "question_id": "q3",
      "text": "Do you have any allergies?",
      "type": "text",
      "is_required": false,
      "alt_text": "Text input for allergies",
      "position": 3,
      "auto_fillable": false
    }
  ],
  "branching_logic": {
    "q3": {
      "condition": "if q3 contains 'yes'",
      "next_question": "q4"
    }
  },
  "theme": {
    "color": "#007BFF",
    "logo_url": "https://example.com/logo.png"
  },
  "is_premium": false,
  "created_at": "2025-03-16T10:00:00Z",
  "updated_at": "2025-03-17T12:00:00Z",
  "status": "published"
}
```
- **Relationships**:
  - `creator_id` links to `users.user_id`, identifying the form creator.
  - `organization_id` links to an external organization entity (not detailed here).
  - `created_by_prompt_id` and `modified_by_prompt_ids` link to `prompt_logs.prompt_id`, tracking AI-driven creation and modifications.

---

### **2. User Profiles and Roles**
```json
{
  "user_id": "user_98765",
  "email": "john.doe@example.com",
  "name": "John Doe",
  "roles": ["form_creator", "responder"],
  "organization_ids": ["org_45678"],
  "permissions": {
    "can_edit_forms": true,
    "can_view_analytics": false
  },
  "static_data": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30,
    "address": "123 Main St"
  },
  "created_at": "2025-03-15T09:00:00Z"
}
```
- **Relationships**:
  - `user_id` is referenced by `forms.creator_id`, `submissions.user_id`, and `prompt_logs.user_id`, connecting users to their forms, submissions, and prompts.
  - `organization_ids` links to external organization entities.

---

### **3. Submission Data**
```json
{
  "submission_id": "sub_54321",
  "form_id": "form_12345",
  "user_id": "user_98765",
  "responses": [
    {
      "question_id": "q1",
      "answer": "John Doe",
      "type": "text",
      "auto_filled": true,
      "auto_filled_from": "user.static_data.name",
      "timestamp": "2025-03-16T11:00:00Z"
    },
    {
      "question_id": "q2",
      "answer": "30",
      "type": "number",
      "auto_filled": true,
      "auto_filled_from": "user.static_data.age",
      "timestamp": "2025-03-16T11:00:00Z"
    },
    {
      "question_id": "q3",
      "answer": "Yes, I’m allergic to peanuts",
      "type": "text",
      "auto_filled": false,
      "timestamp": "2025-03-16T11:01:00Z"
    }
  ],
  "ai_feedback": [
    {
      "step": 1,
      "suggestion": "Please provide more details about your allergies.",
      "timestamp": "2025-03-16T11:01:30Z"
    }
  ],
  "status": "completed",
  "submitted_at": "2025-03-16T11:02:00Z"
}
```
- **Relationships**:
  - `form_id` links to `forms.form_id`, associating the submission with a specific form.
  - `user_id` links to `users.user_id`, identifying the submitter.
  - `submission_id` is referenced by `conversations.submission_id`, connecting submissions to conversation logs.

---

### **4. Conversation Logs**
```json
{
  "conversation_id": "conv_78910",
  "submission_id": "sub_54321",
  "events": [
    {
      "event_id": "e1",
      "user_input": "I’m submitting the form.",
      "ai_response": "I’ve auto-filled your name and age from your profile.",
      "context": {
        "intent": "form_submission",
        "entities": ["name", "age"]
      },
      "timestamp": "2025-03-16T11:00:00Z"
    },
    {
      "event_id": "e2",
      "user_input": "Yes, I’m allergic to peanuts.",
      "ai_response": "Thank you, submission completed.",
      "context": {
        "intent": "allergy_report"
      },
      "timestamp": "2025-03-16T11:01:00Z"
    }
  ],
  "created_at": "2025-03-16T11:00:00Z"
}
```
- **Relationships**:
  - `submission_id` links to `submissions.submission_id`, tying conversations to specific submissions.

---

### **5. Prompt Logs**
```json
{
  "prompt_id": "prompt_001",
  "user_id": "user_98765",
  "form_id": null,
  "prompt_text": "Create a patient intake form with questions about name, age, and symptoms",
  "ai_interpretation": {
    "intent": "create_form",
    "entities": {
      "form_type": "patient_intake",
      "questions": ["name", "age", "symptoms"]
    }
  },
  "action": "create_form",
  "result": {
    "form_id": "form_12345",
    "questions_added": ["q1", "q2", "q3"]
  },
  "created_at": "2025-03-16T10:00:00Z"
}
```
**Another Example (Modification):**
```json
{
  "prompt_id": "prompt_002",
  "user_id": "user_98765",
  "form_id": "form_12345",
  "prompt_text": "Add a question about allergies to the patient intake form",
  "ai_interpretation": {
    "intent": "modify_form",
    "entities": {
      "form_id": "form_12345",
      "new_question": "allergies"
    }
  },
  "action": "modify_form",
  "result": {
    "question_added": "q3",
    "new_version": 2
  },
  "created_at": "2025-03-17T12:00:00Z"
}
```
- **Relationships**:
  - `user_id` links to `users.user_id`, identifying the prompt issuer.
  - `form_id` links to `forms.form_id` (null for new form creation), associating prompts with affected forms.
  - `prompt_id` is referenced by `forms.created_by_prompt_id` and `forms.modified_by_prompt_ids`, connecting prompts to form creation/modification.

---

### **Summary of Relationships**
- **`users`**: Central entity linking to `forms` (via `creator_id`), `submissions` (via `user_id`), and `prompt_logs` (via `user_id`).
- **`forms`**: Linked to `users` (creator), `prompt_logs` (creation/modification prompts), and `submissions` (form responses).
- **`submissions`**: Connected to `forms` (form structure), `users` (submitter), and `conversations` (interaction logs).
- **`conversations`**: Tied to `submissions` (context of interaction).
- **`prompt_logs`**: Linked to `users` (prompt issuer) and `forms` (affected form or new form creation).


