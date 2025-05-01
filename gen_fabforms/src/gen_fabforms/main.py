#!/usr/bin/env python
import sys
import warnings
from datetime import datetime
from gen_fabforms.crew import FormGenerationCrew
from gen_fabforms.crew import FormSpecification
import json

warnings.filterwarnings("ignore", category=SyntaxWarning, module="pysbd")

def run():
    """Run the form generation crew with user inputs"""
    try:
        # Collect dynamic user inputs
        inputs = {
            'industry': input("Enter industry (Education/Healthcare/HR/Marketing/Support): ").strip(),
            'user_group': input("Specific user group (e.g., Teachers, Doctors, Recruiters): ").strip(),
            'form_purpose': input("Form purpose (e.g., Patient Intake, Employee Feedback): ").strip(),
            'compliance_requirements': input("Compliance needs (comma separated): ").split(','),
            'integration_needs': input("Required integrations (comma separated): ").split(','),
            'current_year': str(datetime.now().year)
        }
        def validate_industry_inputs(inputs: dict):
            """Validate education sector inputs"""
            industry_mappings = {
                'Education': {
                'valid_purposes': ['Student Assessment', 'Interactive Quiz', 'Feedback Survey'],
                'required_compliance': ['FERPA', 'COPPA'],
                'common_integrations': ['Google Classroom', 'Schoology', 'Canvas']
                }
            }
        
            industry = inputs['industry']
            spec = industry_mappings.get(industry, {})
            # print(f"Industry: {industry}, Spec: {spec}")
        
            if not spec:
                raise ValueError(f"Unsupported industry: {industry}")
        
        # Map generic purpose to specific template
            if inputs['form_purpose'].lower() == 'students':
                inputs['form_purpose'] = 'Student Assessment'
        
            if inputs['form_purpose'] not in spec['valid_purposes']:
                raise ValueError(f"Invalid purpose for {industry}. Valid options: {spec['valid_purposes']}")
        
            # Add mandatory compliance
            inputs['compliance_requirements'] += spec['required_compliance']
            inputs['compliance_requirements'] = list(set(inputs['compliance_requirements']))
        
            return inputs

    # Update run() function:
        # inputs = { ... }  # Collected inputs
        inputs = validate_industry_inputs(inputs)
        print(f"Validated inputs: {inputs}")
        # FormGenerationCrew().crew().kickoff(inputs=inputs)
        # ✅ CONVERT to Pydantic model
        input_spec = FormSpecification(
            industry=inputs['industry'],
            user_group=inputs['user_group'],
            form_purpose=inputs['form_purpose'],
            compliance_requirements=inputs['compliance_requirements'],
            integration_needs=inputs['integration_needs']
        )
        # Convert Pydantic model to dictionary and format for crew
        # Convert inputs to strings to avoid unhashable types
        stringified_inputs = {
            "industry": inputs['industry'],
            "user_group": inputs['user_group'],
            "form_purpose": inputs['form_purpose'],
            "compliance_requirements": str(inputs['compliance_requirements']),
            "integration_needs": str(inputs['integration_needs'])
        }
        
        print("Debug - Sending inputs to Crew:", stringified_inputs)
        
        try:
            FormGenerationCrew().crew().kickoff(inputs=stringified_inputs)
        except Exception as e:
            import traceback
            print(f"\n❌ Detailed error: {str(e)}")
            traceback.print_exc()

        
    except Exception as e:
        print(f"\n❌ Form generation failed: {str(e)}")
        sys.exit(1)

def validate():
    """Validate existing form JSON schemas"""
    try:
        filename = input("Enter JSON file path to validate: ").strip()
        FormGenerationCrew().crew().validate_form_schema(filename)
        
    except Exception as e:
        print(f"\n❌ Validation error: {str(e)}")
        sys.exit(1)

if __name__ == "__main__":
    print("🌟 FabForms AI Crew 🌟")
    print("1. Generate New Form\n2. Validate Existing Form")
    choice = input("Select operation (1/2): ").strip()
    
    if choice == '1':
        run()
    elif choice == '2':
        validate()
    else:
        print("Invalid choice")
        sys.exit(1)