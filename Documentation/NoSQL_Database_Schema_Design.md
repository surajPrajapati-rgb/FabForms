# Technical Report: NoSQL Database Schema Design for FabForms

## 1. Executive Summary

### Overview of FabForms
FabForms is a web application that transforms traditional forms into interactive, conversational experiences powered by conversational AI. It supports multi-modal inputs (text, voice, images), dynamic branching logic, real-time AI feedback, and analytics across use cases like education (quizzes), healthcare (patient intake), marketing (lead generation), and ticketing (customer support).

### Core Functionality
- Form creation with versioning, branching logic, and multi-modal question types.
- Real-time AI-driven suggestions and validation during form submission.
- User management with roles, teams, and permissions.
- Analytics for form performance, user engagement, and AI interactions.
- Integration with external services (e.g., CRMs) and payment systems.

### Key Objectives for Database Design
- **Scalability**: Handle high-traffic forms and large datasets (e.g., millions of submissions).
- **Performance**: Optimize for fast reads (form rendering, analytics) and real-time interactions.
- **Flexibility**: Support dynamic schemas for evolving forms and AI logic.
- **Security**: Protect sensitive data (e.g., healthcare records) with encryption and access controls.
- **Maintainability**: Enable easy updates, backups, and performance tuning.

---

## 2. Data Model Design

The schema uses a document-centric NoSQL design, leveraging denormalization and embedding where appropriate to optimize read performance. Below are the key entities with JSON document structures, data types, and design rationale.

### 2.1 Forms
Stores form metadata, questions, and logic.

#### Sample JSON Document
```json
{
  "formId": "form_12345",           // String: Unique identifier
  "creatorId": "user_98765",        // String: Reference to user
  "organizationId": "org_45678",    // String: Optional reference to organization
  "title": "Patient Intake Form",   // String: Form title
  "version": 1,                     // Number: Version for updates
  "questions": [                    // Array: Embedded question objects
    {
      "questionId": "q1",           // String: Unique within form
      "text": "Do you have a fever?", // String: Question text
      "type": "text",               // String: Enum (text, file_upload, etc.)
      "isRequired": true,           // Boolean: Required flag
      "position": 1                 // Number: Display order
    }
  ],
  "branchingLogic": {               // Object: Dynamic flow conditions
    "q1": {
      "condition": "contains 'yes'", // String: Logic condition
      "nextQuestion": "q2"          // String: Next question ID
    }
  },
  "theme": {                        // Object: Embedded styling
    "color": "#007BFF"             // String: Custom styling
  },
  "isPremium": false,               // Boolean: Payment flag
  "createdAt": "2025-03-16T10:00:00Z", // String: ISO timestamp
  "updatedAt": "2025-03-16T10:00:00Z"  // String: ISO timestamp
}
```

#### Design Choices
- **Embedded Data**: `questions` and `branchingLogic` are embedded for fast retrieval during form rendering.
- **Referenced Data**: `creatorId` and `organizationId` reference external entities to avoid duplication.
- **Rationale**: Embedding optimizes reads, while references maintain consistency for user/organization updates.

### 2.2 User Profiles and Roles
Manages users, roles, and permissions.

#### Sample JSON Document
```json
{
  "userId": "user_98765",           // String: Unique identifier
  "email": "john.doe@example.com",  // String: User email
  "name": "John Doe",               // String: Full name
  "roles": ["form_creator"],        // Array: Roles (admin, responder, etc.)
  "organizationIds": ["org_45678"], // Array: Team affiliations
  "permissions": {                  // Object: ABAC attributes
    "canEditForms": true,          // Boolean: Permission flag
    "canViewAnalytics": false      // Boolean: Permission flag
  },
  "createdAt": "2025-03-15T09:00:00Z" // String: ISO timestamp
}
```

#### Design Choices
- **Embedded Data**: `roles` and `permissions` are embedded for quick access control checks.
- **Referenced Data**: `organizationIds` links to organizations, enabling many-to-many relationships.
- **Rationale**: Embedding permissions reduces query overhead for authorization.

### 2.3 Submissions
Stores user responses and AI feedback.

#### Sample JSON Document
```json
{
  "submissionId": "sub_54321",      // String: Unique identifier
  "formId": "form_12345",           // String: Reference to form
  "userId": "user_98765",           // String: Optional user reference
  "responses": [                    // Array: Embedded answers
    {
      "questionId": "q1",           // String: Question reference
      "answer": "Yes",             // String: User response
      "type": "text",              // String: Response type
      "timestamp": "2025-03-16T11:00:00Z" // String: ISO timestamp
    }
  ],
  "aiFeedback": [                   // Array: Real-time AI responses
    {
      "message": "Please elaborate.", // String: AI suggestion
      "timestamp": "2025-03-16T11:00:30Z" // String: ISO timestamp
    }
  ],
  "status": "completed",            // String: Enum (in_progress, completed)
  "submittedAt": "2025-03-16T11:02:00Z" // String: ISO timestamp
}
```

#### Design Choices
- **Embedded Data**: `responses` and `aiFeedback` are embedded for single-document retrieval.
- **Referenced Data**: `formId` and `userId` link to external entities.
- **Rationale**: Embedding ensures fast submission retrieval, critical for real-time interactions.

### 2.4 Conversation Logs
Tracks AI-driven chat flows.

#### Sample JSON Document
```json
{
  "conversationId": "conv_78910",   // String: Unique identifier
  "submissionId": "sub_54321",      // String: Reference to submission
  "events": [                       // Array: Time-series events
    {
      "eventId": "e1",             // String: Event identifier
      "userInput": "I have a fever", // String: User message
      "aiResponse": "Upload a photo.", // String: AI reply
      "context": {                 // Object: NLP context
        "intent": "symptom_report" // String: AI intent
      },
      "timestamp": "2025-03-16T11:00:30Z" // String: ISO timestamp
    }
  ],
  "createdAt": "2025-03-16T11:00:00Z" // String: ISO timestamp
}
```

#### Design Choices
- **Embedded Data**: `events` embeds all conversation steps for efficient history retrieval.
- **Referenced Data**: `submissionId` links to the submission.
- **Rationale**: Embedding supports event sourcing and time-series analysis.

### 2.5 Analytics Data
Captures metrics and insights.

#### Sample JSON Document
```json
{
  "analyticsId": "an_11111",        // String: Unique identifier
  "formId": "form_12345",           // String: Reference to form
  "metrics": {                      // Object: Embedded metrics
    "views": 100,                  // Number: Form views
    "completions": 75,             // Number: Completed submissions
    "avgTime": 120                 // Number: Avg completion time (seconds)
  },
  "timestamp": "2025-03-16T12:00:00Z" // String: ISO timestamp
}
```

#### Design Choices
- **Embedded Data**: `metrics` embeds key stats for fast aggregation.
- **Referenced Data**: `formId` links to the form.
- **Rationale**: Embedding simplifies analytics queries.

---

## 3. Relationships and Data Flow

### Entity Interactions
- **Forms → Submissions**: One-to-Many (a form has many submissions).
- **Users → Forms**: One-to-Many (a user creates many forms).
- **Submissions → Conversations**: One-to-Many (a submission has multiple conversation steps).
- **Users ↔ Organizations**: Many-to-Many (via `organizationIds` in `users`).

### Managing Relationships in NoSQL
- **Embedding**: Used for one-to-few relationships (e.g., `questions` in `forms`) to reduce queries.
- **Referencing**: Used for one-to-many or many-to-many (e.g., `formId` in `submissions`) to avoid data duplication.
- **Foreign Key Alternatives**: Use unique IDs (e.g., `formId`) as references, queried as needed.

#### Example: One-to-Many (Forms → Submissions)
- Form document references `formId`, and submissions embed `formId`.
- Query: Fetch all submissions for `form_12345`.

#### Example: Many-to-Many (Users ↔ Organizations)
- `users` embeds `organizationIds`, and an `organizations` collection could store user lists if needed.

#### Hierarchical Structure
- `forms` → `questions` → `branchingLogic`: Nested hierarchy for dynamic flows.

---

## 4. Indexing Strategy

### Recommended Indexes
- **Forms**: `formId` (primary), `creatorId`, `createdAt`.
- **Users**: `userId` (primary), `email` (unique), `organizationIds`.
- **Submissions**: `submissionId` (primary), `formId`, `submittedAt`.
- **Conversations**: `conversationId` (primary), `submissionId`, `events.timestamp`.
- **Analytics**: `analyticsId` (primary), `formId`, `timestamp`.

### Index Types
- **Compound Indexes**: `formId` + `submittedAt` in `submissions` for range queries.
- **Partial Indexes**: Index `status: "published"` in `forms` for active forms only.
- **Text Search Indexes**: `title` in `forms` for search functionality.

### Rationale
Indexes optimize reads for form retrieval, submission history, and analytics, balancing write overhead.

---

## 5. Scalability and Partitioning Strategy

### Scaling Strategies
- **Sharding**: Partition by `formId` to distribute high-traffic forms.
- **Bucketing**: Group `submissions` and `conversations` by time (e.g., `submissions_2025_03`).
- **Replication**: Use read replicas for analytics queries.

### Partition Keys
- **Primary**: `formId` for even distribution across forms.
- **Secondary**: `userId` for user-specific workloads.

### Rationale
Sharding by `formId` isolates high-traffic forms (e.g., marketing campaigns), while bucketing manages growth.

---

## 6. Security and Data Protection

### Best Practices
- **Encryption**: Encrypt sensitive fields (e.g., `responses.answer`) at rest and in transit.
- **Tokenization**: Use tokens for `userId` in public-facing APIs.
- **RBAC**: Enforce roles (`roles` in `users`) for basic access.
- **ABAC**: Use `permissions` for fine-grained control (e.g., `canEditForms`).

### Implementation
- Store encrypted data in `responses` for healthcare use cases.
- Validate permissions on every query using application logic.

---

## 7. Backup, Recovery, and Data Retention

### Backup Strategies
- **Incremental Backups**: Daily snapshots of active collections.
- **Point-in-Time Recovery**: Log transactions for rollback.

### Retention Policies
- **Forms**: Archive inactive forms after 6 months.
- **Submissions/Conversations**: Retain for 1 year, then move to cold storage.
- **Analytics**: Keep indefinitely for historical trends.

### Rationale
Ensures data integrity while managing storage costs.

---

## 8. Maintenance and Performance Tuning

### Monitoring
- Track query latency, index usage, and storage growth.
- Use tools like MongoDB Atlas Profiler or DynamoDB CloudWatch.

### Optimization Tips
- **Query Optimization**: Avoid over-fetching; use projections.
- **Caching**: Cache frequent reads (e.g., form metadata) in Redis.
- **Latency Reduction**: Pre-aggregate analytics data nightly.

---

## 9. Recommended Database Solutions

**MongoDB** for its balance of flexibility, scalability, and integration ease.

---

## 10. Sample Queries and Operations

### Create/Update Form (MongoDB)
```javascript
db.forms.insertOne({
  formId: "form_12345",
  title: "New Form",
  questions: [{ questionId: "q1", text: "Name?", type: "text" }],
  createdAt: new Date()
});

db.forms.updateOne(
  { formId: "form_12345" },
  { $set: { version: 2, updatedAt: new Date() } }
);
```

### Query Analytics
```javascript
db.analytics.find(
  { formId: "form_12345", timestamp: { $gte: "2025-03-01" } },
  { projection: { metrics: 1 } }
);
```

### Fetch Conversation History
```javascript
db.conversations.find(
  { submissionId: "sub_54321" },
  { sort: { "events.timestamp": 1 } }
);
```

### Best Practices
- Use projections to fetch only needed fields.
- Index frequently queried fields for efficiency.

---

## Conclusion
This NoSQL schema for FabForms provides a scalable, performant, and secure foundation for conversational forms. With MongoDB as the recommended solution, it supports dynamic logic, real-time AI, and robust analytics while ensuring maintainability and compliance. Developers can use this report as a blueprint for implementation and optimization.
