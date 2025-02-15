const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare report",
        description: "Compile the monthly sales report.",
        category: "Reporting",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskDate: "2025-02-15",
      },
      {
        title: "Client Meeting",
        description: "Discuss project updates with the client.",
        category: "Meetings",
        active: false,
        newTask: true,
        complete: false,
        failed: false,
        taskDate: "2025-02-16",
      },
      {
        title: "Code Review",
        description: "Review the latest code changes in the repository.",
        category: "Development",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskDate: "2025-02-17",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Update Documentation",
        description: "Revise the API documentation with new endpoints.",
        category: "Documentation",
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskDate: "2025-02-18",
      },
      {
        title: "Bug Fixing",
        description: "Resolve the critical bug in user authentication.",
        category: "Development",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskDate: "2025-02-19",
      },
      {
        title: "Team Standup",
        description: "Daily team meeting to discuss progress.",
        category: "Meetings",
        active: false,
        newTask: true,
        complete: false,
        failed: false,
        taskDate: "2025-02-20",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Market Research",
        description: "Analyze competitor pricing strategies.",
        category: "Research",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskDate: "2025-02-21",
      },
      {
        title: "SEO Optimization",
        description: "Improve website SEO for better ranking.",
        category: "Marketing",
        active: false,
        newTask: true,
        complete: false,
        failed: false,
        taskDate: "2025-02-22",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Customer Support",
        description: "Respond to customer queries and complaints.",
        category: "Support",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskDate: "2025-02-23",
      },
      {
        title: "Product Demo",
        description: "Give a live demo of the new feature to clients.",
        category: "Sales",
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskDate: "2025-02-24",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Backup",
        description: "Schedule a weekly database backup.",
        category: "IT",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskDate: "2025-02-25",
      },
      {
        title: "Server Maintenance",
        description: "Perform routine server maintenance.",
        category: "IT",
        active: false,
        newTask: true,
        complete: false,
        failed: false,
        taskDate: "2025-02-26",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStoage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStoage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
}