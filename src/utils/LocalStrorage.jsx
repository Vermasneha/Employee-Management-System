const employees = [
    {
        "id": "1",
        "email": "john.doe@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Review Financial Report",
                "taskDescription": "Review and analyze the Q3 financial report for discrepancies.",
                "taskDate": "2024-10-26",
                "category": "Finance"
            },
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Update Client Database",
                "taskDescription": "Ensure all client information is current and complete in the CRM.",
                "taskDate": "2024-10-20",
                "category": "Administration"
            },
            // ...more tasks
        ]
    },
    {
        "id": "2",
        "email": "jane.smith@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare Presentation",
                "taskDescription": "Create slides for the upcoming project meeting.",
                "taskDate": "2024-10-29",
                "category": "Project Management"
            },
            // ...more tasks
        ]
    },
    {
        "id": "3",
        "email": "alice.jones@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Submit Expense Report",
                "taskDescription": "Compile and submit expenses for September.",
                "taskDate": "2024-10-10",
                "category": "Finance"
            },
            // ...more tasks
        ]
    },
    {
        "id": "4",
        "email": "bob.brown@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Organize Workshop",
                "taskDescription": "Plan and organize the upcoming team-building workshop.",
                "taskDate": "2024-11-05",
                "category": "HR"
            },
            // ...more tasks
        ]
    },
    {
        "id": "5",
        "email": "eve.davis@example.com",
        "password": "123",
        "tasks": [
            {
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Draft Marketing Plan",
                "taskDescription": "Develop a marketing plan for Q1.",
                "taskDate": "2024-12-01",
                "category": "Marketing"
            },
            // ...more tasks
        ]
    }
];

const admin =[
    {
        "id": "1",
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
