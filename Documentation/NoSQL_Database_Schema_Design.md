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
