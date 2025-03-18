```markdown
# MongoDB Schema Design for FabForms

This file represents the document structure for each collection in the FabForms application.

---

## 1. Users Collection

```javascript
const userSchema = {
  _id: ObjectId(),
  email: String,
  passwordHash: String,
  firstName: String,
  lastName: String,
  avatarUrl: String,
  role: String, // 'admin', 'form_creator', 'form_responder'
  permissions: [String], // ['create_form', 'edit_form', 'view_analytics', etc.]
  organizations: [
    {
      orgId: ObjectId(),
      role: String,
      joinedAt: Date
    }
  ],
  createdAt: Date,
  updatedAt: Date,
  lastLoginAt: Date,
  status: String, // 'active', 'inactive', 'suspended'
  preferences: {
    theme: String,
    notifications: {
      email: Boolean,
      push: Boolean
    }
  },
  // For quick lookups without joins
  formCount: Number,
  submissionCount: Number
};
```

---

## 2. Forms Collection

```javascript
const formSchema = {
  _id: ObjectId(),
  title: String,
  description: String,
  createdBy: ObjectId(), // userId
  organizationId: ObjectId(),
  version: Number,
  status: String, // 'draft', 'published', 'archived'
  publishedAt: Date,
  createdAt: Date,
  updatedAt: Date,
  settings: {
    isPublic: Boolean,
    allowAnonymous: Boolean,
    multipleSubmissions: Boolean,
    notifyOnSubmission: Boolean,
    redirectUrl: String,
    deadline: Date,
    maxResponses: Number
  },
  theme: {
    primaryColor: String,
    secondaryColor: String,
    font: String,
    logo: String,
    customCSS: String
  },
  questions: [
    {
      _id: ObjectId(),
      order: Number,
      type: String, // 'text', 'multipleChoice', 'checkbox', 'date', 'file', 'conversation', etc.
      question: String,
      description: String,
      isRequired: Boolean,
      options: [
        {
          value: String,
          label: String
        }
      ],
      validation: {
        type: String, // 'email', 'phone', 'number', 'regex', etc.
        regex: String,
        min: Number,
        max: Number,
        errorMessage: String
      },
      branchingLogic: {
        enabled: Boolean,
        conditions: [
          {
            questionId: ObjectId(),
            operator: String, // 'equals', 'contains', 'greaterThan', etc.
            value: String,
            jumpToQuestionId: ObjectId()
          }
        ]
      },
      aiAssistance: {
        enabled: Boolean,
        suggestionsType: String, // 'completions', 'validations', 'recommendations'
        model: String // reference to the AI model to use
      }
    }
  ],
  // For quick lookups and analytics
  statistics: {
    views: Number,
    starts: Number,
    completions: Number,
    averageTimeSeconds: Number,
    lastSubmissionAt: Date
  }
};
```

---

## 3. Submissions Collection

```javascript
const submissionSchema = {
  _id: ObjectId(),
  formId: ObjectId(),
  userId: ObjectId(), // can be null for anonymous submissions
  submittedAt: Date,
  updatedAt: Date,
  status: String, // 'in_progress', 'completed', 'reviewed'
  timeSpentSeconds: Number,
  ipAddress: String,
  userAgent: String,
  responses: [
    {
      questionId: ObjectId(),
      type: String, // same as question type
      value: Schema.Types.Mixed, // can be String, Number, Boolean, Array, etc. depending on question type
      answeredAt: Date,
      timeSpentSeconds: Number,
      aiFeedback: {
        suggestion: String,
        confidence: Number,
        providedAt: Date,
        accepted: Boolean
      }
    }
  ],
  // If there's a conversation component
  conversationId: ObjectId(),
  // For quick filtering
  tags: [String],
  score: Number, // calculated based on various metrics
  // If form uses scoring or grading
  evaluation: {
    score: Number,
    maxScore: Number,
    feedback: String,
    evaluatedBy: ObjectId(),
    evaluatedAt: Date
  }
};
```

---

## 4. Conversations Collection

```javascript
const conversationSchema = {
  _id: ObjectId(),
  formId: ObjectId(),
  submissionId: ObjectId(),
  userId: ObjectId(),
  startedAt: Date,
  updatedAt: Date,
  status: String, // 'active', 'completed', 'abandoned'
  messages: [
    {
      _id: ObjectId(),
      sender: String, // 'user', 'ai', 'system'
      content: String,
      contentType: String, // 'text', 'image', 'file'
      timestamp: Date,
      metadata: {
        questionId: ObjectId(), // if related to a specific question
        intent: String, // classified intent of the message
        entities: [
          {
            type: String,
            value: String,
            confidence: Number
          }
        ]
      }
    }
  ],
  context: {
    currentQuestionId: ObjectId(),
    formProgress: Number, // percentage
    previousSubmissions: [ObjectId()],
    userPreferences: Schema.Types.Mixed
  },
  // Analytics data
  analytics: {
    messageCount: Number,
    averageResponseTimeMs: Number
  }
};
```
