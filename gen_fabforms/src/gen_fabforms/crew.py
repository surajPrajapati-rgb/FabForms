from crewai import Agent, Crew, Process, Task
from crewai.project import CrewBase, agent, crew, task
from langchain_openai import OpenAI
from pydantic import BaseModel

class FormSpecification(BaseModel):
    industry: str
    user_group: str 
    form_purpose: str
    compliance_requirements: list[str]
    integration_needs: list[str]

@CrewBase
class FormGenerationCrew:
    """FabForms generation crew"""
    
    agents_config = 'config/agents.yaml'
    tasks_config = 'config/tasks.yaml'
    
    @agent
    def requirement_analyst(self) -> Agent:
        return Agent(config=self.agents_config['requirement_analyst'])
    # Education Agents
    @agent
    def TeacherAgent(self) -> Agent:
        return Agent(config=self.agents_config['TeacherAgent'])
    
    @agent 
    def ProfessorAgent(self) -> Agent:
        return Agent(config=self.agents_config['ProfessorAgent'])
    
    # Healthcare Agents
    @agent
    def MedicalIntakeAgent(self) -> Agent:
        return Agent(config=self.agents_config['MedicalIntakeAgent'])
    
    # HR Agents
    @agent
    def RecruiterAgent(self) -> Agent:
        return Agent(config=self.agents_config['RecruiterAgent'])
    
    # Marketing Agents
    @agent
    def LeadGenAgent(self) -> Agent:
        return Agent(config=self.agents_config['LeadGenAgent'])
    
    # Support Agents
    @agent
    def TicketSystemAgent(self) -> Agent:
        return Agent(config=self.agents_config['TicketSystemAgent'])

    # Core Tasks
    @task
    def analyze_requirements(self) -> Task:
        return Task(
            config=self.tasks_config['analyze_requirements'],
            output_json=FormSpecification
        )
    
    @task
    def generate_form_schema(self) -> Task:
        return Task(
            config=self.tasks_config['generate_form_schema'],
            output_file='form_schema.json'
        )
    
    @task
    def validate_compliance(self) -> Task:
        return Task(
            config=self.tasks_config['validate_compliance']
        )

    @crew
    def crew(self) -> Crew:
        """Create form generation crew with dynamic routing"""
        return Crew(
            agents=self.agents,
            tasks=[
                self.analyze_requirements(),
                self.generate_form_schema(),
                self.validate_compliance()
            ],
            process=Process.hierarchical,
            manager_llm=OpenAI(temperature=0.2),
            verbose=2,
            memory=True,
            full_output=True
        )
    
    def validate_form_schema(self, filename: str):
        """External validation method"""
        validator = Task(config=self.tasks_config['validate_compliance'])
        return validator.execute({"form_schema": filename})