from crewai import Agent, Crew, Process, Task
from langchain_openai import OpenAI
from pydantic import BaseModel

class FormSpecification(BaseModel):
    industry: str
    user_group: str 
    form_purpose: str
    compliance_requirements: list[str]
    integration_needs: list[str]

class FormGenerationCrew:
    """FabForms generation crew"""
    
    def requirement_analyst(self) -> Agent:
        return Agent(
            role="Requirements Validation Engine",
            goal="Create unambiguous form specifications that bridge user needs with technical requirements",
            backstory="A former systems analyst with 7 years experience in EdTech compliance and HR tech integrations. Specializes in translating user stories into technical requirements while maintaining regulatory compliance.",
            verbose=True,
            allow_delegation=False,
            llm=OpenAI(model="gpt-3.5-turbo", temperature=0.2)
        )

    def teacher_agent(self) -> Agent:
        return Agent(
            role="Educational Form Designer",
            goal="Transform traditional assessments into interactive experiences",
            backstory="Former EdTech designer specializing in student engagement",
            verbose=True
        )
    
    def professor_agent(self) -> Agent:
        return Agent(
            role="Academic Integrity Specialist",
            goal="Create secure and adaptive testing environments",
            backstory="Academic researcher with 10+ years in assessment design",
            verbose=True
        )
    
    def medical_intake_agent(self) -> Agent:
        return Agent(
            role="HIPAA Compliance Specialist",
            goal="Ensure medical data compliance while improving efficiency",
            backstory="Health IT consultant with EHR integration expertise",
            verbose=True
        )
    
    def recruiter_agent(self) -> Agent:
        return Agent(
            role="Talent Acquisition Form Builder",
            goal="Streamline recruitment workflows with AI-powered ranking",
            backstory="HR tech expert specializing in candidate experience",
            verbose=True
        )
    
    def lead_gen_agent(self) -> Agent:
        return Agent(
            role="Conversational Form Engineer",
            goal="Convert form interactions into qualified leads",
            backstory="Marketing technologist specializing in conversion optimization",
            verbose=True
        )
    
    def ticket_system_agent(self) -> Agent:
        return Agent(
            role="Support Workflow Automator",
            goal="Reduce resolution time through smart form design",
            backstory="Customer experience architect with Zendesk/ChatGPT expertise",
            verbose=True
        )

    def analyze_requirements(self) -> Task:
        return Task(
            description="Convert raw user inputs into structured FormSpecification",
            expected_output="Fully validated FormSpecification JSON object with technical implementation details",
            agent=self.requirement_analyst(),
            output_json=FormSpecification,
            context_format="json"
        )
    
    def generate_form_schema(self) -> Task:
        return Task(
            description="Generate a complete JSON schema for the form based on the requirements analysis",
            expected_output="Complete JSON schema for the form with all necessary fields and validation rules",
            agent=self.requirement_analyst(),
            output_file='form_schema.json'
        )
    
    def validate_compliance(self) -> Task:
        return Task(
            description="Validate the generated form schema against compliance requirements",
            expected_output="Compliance validation report with any issues identified and recommendations",
            agent=self.requirement_analyst()
        )

    def crew(self) -> Crew:
        """Create form generation crew with dynamic routing"""
        return Crew(
            agents=[
                self.requirement_analyst()
            ],
            tasks=[
                self.analyze_requirements(),
                self.generate_form_schema(),
                self.validate_compliance()
            ],
            process=Process.sequential,
            manager_llm=OpenAI(model="gpt-3.5-turbo", temperature=0.2),
            verbose=True,
            memory=True,
            full_output=True
        )
    
    def validate_form_schema(self, filename: str):
        """External validation method"""
        validator = Task(
            description="Validate the form schema against compliance requirements",
            expected_output="Compliance validation report",
            agent=self.requirement_analyst()
        )
        return validator.execute({"form_schema": filename})