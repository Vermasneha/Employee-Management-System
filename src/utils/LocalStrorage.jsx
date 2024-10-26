const employees = [
    {
        "id": "1",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "password": "123",
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Review Financial Report", "taskDescription": "Review and analyze the Q3 financial report for discrepancies.", "taskDate": "2024-10-26", "category": "Finance" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Update Client Database", "taskDescription": "Ensure all client information is current and complete in the CRM.", "taskDate": "2024-10-20", "category": "Administration" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Conduct Team Meeting", "taskDescription": "Organize a team meeting for project updates.", "taskDate": "2024-10-27", "category": "Management" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Review Annual Budget", "taskDescription": "Evaluate the financial allocations for the annual budget.", "taskDate": "2024-10-21", "category": "Finance" },
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Prepare Invoice Report", "taskDescription": "Generate invoices for October.", "taskDate": "2024-10-28", "category": "Finance" },
            { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Client Call Follow-Up", "taskDescription": "Follow-up on last week’s client call.", "taskDate": "2024-10-25", "category": "Customer Service" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Submit Travel Expenses", "taskDescription": "Compile and submit travel expenses for October.", "taskDate": "2024-10-24", "category": "Finance" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Inventory Check", "taskDescription": "Ensure office supplies are adequately stocked.", "taskDate": "2024-10-22", "category": "Administration" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Weekly Project Update", "taskDescription": "Send a weekly update on project progress to management.", "taskDate": "2024-10-23", "category": "Project Management" },
            { "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Organize Files", "taskDescription": "Arrange and file documents from past projects.", "taskDate": "2024-10-30", "category": "Administration" }
        ],
        "firstName": "John",
        "taskCount": { "active": 4, "newTask": 3, "completed": 4, "failed": 1 }
    },
    {
        "id": "2",
        "name": "Jane Smith",
        "email": "jane.smith@example.com",
        "password": "123",
        "tasks": [
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Prepare Presentation", "taskDescription": "Create slides for the upcoming project meeting.", "taskDate": "2024-10-29", "category": "Project Management" },
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Write Project Brief", "taskDescription": "Summarize project details in a brief document.", "taskDate": "2024-10-28", "category": "Project Management" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Compile Project Report", "taskDescription": "Create a report on project milestones achieved.", "taskDate": "2024-10-24", "category": "Management" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Client Meeting Preparation", "taskDescription": "Prepare notes and agenda for client meeting.", "taskDate": "2024-10-23", "category": "Client Relations" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Update Risk Assessment", "taskDescription": "Review and update risk assessment documentation.", "taskDate": "2024-10-26", "category": "Risk Management" },
            { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Schedule Resource Allocation", "taskDescription": "Organize resource allocation schedule.", "taskDate": "2024-10-20", "category": "Resource Management" },
            { "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Plan Team Outing", "taskDescription": "Organize the team outing for Q4.", "taskDate": "2024-11-01", "category": "Human Resources" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Finalize Budget Proposal", "taskDescription": "Submit budget proposal for next quarter.", "taskDate": "2024-10-19", "category": "Finance" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Task Delegation", "taskDescription": "Delegate tasks for the upcoming project.", "taskDate": "2024-10-31", "category": "Project Management" },
            { "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Client Feedback Analysis", "taskDescription": "Analyze feedback received from clients.", "taskDate": "2024-10-22", "category": "Client Relations" }
        ],
        "firstName": "Jane",
        "taskCount": { "active": 4, "newTask": 3, "completed": 4, "failed": 1 }
    },
    {
        "id": "3",
        "name": "Alice Jones",
        "email": "alice.jones@example.com",
        "password": "123",
        "tasks": [
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Submit Expense Report", "taskDescription": "Compile and submit expenses for September.", "taskDate": "2024-10-10", "category": "Finance" },
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Draft Financial Summary", "taskDescription": "Prepare a financial summary for Q3.", "taskDate": "2024-10-26", "category": "Finance" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Arrange Budget Meeting", "taskDescription": "Organize a meeting to discuss budget cuts.", "taskDate": "2024-10-30", "category": "Finance" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Employee Expense Audit", "taskDescription": "Review employee expenses and flag any discrepancies.", "taskDate": "2024-10-22", "category": "Audit" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Review Investment Options", "taskDescription": "Analyze potential investment opportunities.", "taskDate": "2024-10-27", "category": "Finance" },
            { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Weekly Financial Brief", "taskDescription": "Prepare a brief on weekly financial updates.", "taskDate": "2024-10-24", "category": "Finance" },
            { "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Organize Investor Meeting", "taskDescription": "Prepare for the quarterly investor meeting.", "taskDate": "2024-10-29", "category": "Finance" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Budget Review for Q1", "taskDescription": "Evaluate budget requirements for Q1.", "taskDate": "2024-10-25", "category": "Finance" },
            { "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Monthly Financial Report", "taskDescription": "Compile the monthly financial report for October.", "taskDate": "2024-10-28", "category": "Finance" },
            { "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Risk Assessment", "taskDescription": "Update risk assessment documentation.", "taskDate": "2024-11-02", "category": "Finance" }
        ],
        "firstName": "Alice",
        "taskCount": { "active": 4, "newTask": 3, "completed": 3, "failed": 1 }
    },
    {
        "id": "4",
        "name": "Bob Brown",
        "email": "bob.brown@example.com",
        "password": "123",
        "tasks": [
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Organize Workshop", "taskDescription": "Plan and organize the upcoming team-building workshop.", "taskDate": "2024-11-05", "category": "HR" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Prepare Training Material", "taskDescription": "Create content for the new hire training program.", "taskDate": "2024-10-22", "category": "Training" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Employee Performance Review", "taskDescription": "Assess quarterly performance metrics.", "taskDate": "2024-10-28", "category": "HR" },
            { "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Update Employee Handbook", "taskDescription": "Revise policies in the employee handbook.", "taskDate": "2024-11-01", "category": "HR" },
            { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Coordinate Exit Interviews", "taskDescription": "Schedule and conduct exit interviews.", "taskDate": "2024-10-20", "category": "HR" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Employee Surveys", "taskDescription": "Distribute and review employee satisfaction surveys.", "taskDate": "2024-10-25", "category": "HR" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Plan Diversity Workshop", "taskDescription": "Organize a workshop focused on diversity and inclusion.", "taskDate": "2024-10-30", "category": "HR" },
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Arrange Benefits Fair", "taskDescription": "Plan a fair to showcase employee benefits.", "taskDate": "2024-10-26", "category": "HR" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Annual Employee Review", "taskDescription": "Conduct annual reviews for employees.", "taskDate": "2024-10-24", "category": "HR" },
            { "active": false, "newTask": false, "completed": false, "failed": false, "taskTitle": "Update Job Descriptions", "taskDescription": "Ensure all job descriptions are current.", "taskDate": "2024-10-29", "category": "HR" }
        ],
        "firstName": "Bob",
        "taskCount": { "active": 4, "newTask": 3, "completed": 3, "failed": 1 }
    },
    {
        "id": "5",
        "name": "Eve Davis",
        "email": "eve.davis@example.com",
        "password": "123",
        "tasks": [
            { "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Draft Marketing Plan", "taskDescription": "Develop a marketing plan for Q1.", "taskDate": "2024-12-01", "category": "Marketing" },
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Social Media Strategy", "taskDescription": "Design a social media strategy for product launch.", "taskDate": "2024-10-27", "category": "Marketing" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Brand Analysis", "taskDescription": "Analyze current brand positioning in the market.", "taskDate": "2024-10-22", "category": "Marketing" },
            { "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Client Feedback Report", "taskDescription": "Create a report on client feedback for Q3.", "taskDate": "2024-11-02", "category": "Client Relations" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "Content Calendar", "taskDescription": "Plan content calendar for Q1.", "taskDate": "2024-10-25", "category": "Marketing" },
            { "active": false, "newTask": false, "completed": false, "failed": true, "taskTitle": "Email Campaign Analysis", "taskDescription": "Evaluate the performance of recent email campaigns.", "taskDate": "2024-10-20", "category": "Marketing" },
            { "active": true, "newTask": false, "completed": false, "failed": false, "taskTitle": "Create Ad Copy", "taskDescription": "Write ad copy for new product.", "taskDate": "2024-10-30", "category": "Marketing" },
            { "active": true, "newTask": true, "completed": false, "failed": false, "taskTitle": "Market Research Report", "taskDescription": "Prepare a market research report on industry trends.", "taskDate": "2024-10-26", "category": "Marketing" },
            { "active": false, "newTask": false, "completed": true, "failed": false, "taskTitle": "SEO Analysis", "taskDescription": "Perform an SEO analysis for our website.", "taskDate": "2024-10-23", "category": "Marketing" },
            { "active": false, "newTask": true, "completed": false, "failed": false, "taskTitle": "Product Feedback", "taskDescription": "Collect feedback on the new product from initial users.", "taskDate": "2024-10-28", "category": "Product Management" }
        ],
        "firstName": "Eve",
        "taskCount": { "active": 4, "newTask": 3, "completed": 3, "failed": 1 }
    }
];

const admin =[
    {
        "id": "1",
        "name": "Admin",
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStroage= ()=> {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStroage= ()=> {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}
