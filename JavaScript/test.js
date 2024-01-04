const todoData = [
  {
    todo: "Provide concise task description",
    detail: "Add more specific details for clarity",
    priority: "High",
    category: "Tasks",
    dueDate: "2023-12-27",
  },
  {
    todo: "Review and finalize project scope document",
    detail: "Ensure all stakeholders are aligned",
    priority: "Medium",
    category: "Project",
    dueDate: "2023-12-27",
  },
  {
    todo: "Schedule team meeting to discuss project plan",
    detail: "Send calendar invites and prepare agenda",
    priority: "Medium",
    category: "Meeting",
    dueDate: "2023-12-28",
  },
  {
    todo: "Start outlining presentation on new product launch",
    detail: "Focus on key features and benefits",
    priority: "High",
    category: "Marketing",
    dueDate: "2023-12-28",
  },
  {
    todo: "Analyze customer feedback reports",
    detail: "Identify trends and areas for improvement",
    priority: "Medium",
    category: "Customer Service",
    dueDate: "2023-12-28",
  },
  {
    todo: "Order office supplies for upcoming quarter",
    detail: "",
    priority: "Low",
    category: "Administration",
    dueDate: "2023-12-29",
  },
  {
    todo: "Schedule one-on-one meeting with direct report",
    detail: "Discuss goals and provide feedback",
    priority: "Medium",
    category: "Management",
    dueDate: "2023-12-29",
  },
  {
    todo: "Finalize budget proposals for next fiscal year",
    detail: "Review assumptions and adjust as needed",
    priority: "High",
    category: "Finance",
    dueDate: "2023-12-29",
  },
  {
    todo: "Research potential software solutions for team collaboration",
    detail: "",
    priority: "Medium",
    category: "Technology",
    dueDate: "2023-12-29",
  },
  {
    todo: "Send holiday greetings to clients and partners",
    detail: "Personalize messages for a warm touch",
    priority: "Medium",
    category: "Marketing",
    dueDate: "2023-12-29",
  },
  {
    todo: "Prepare quarterly sales report for executive team",
    detail: "Highlight key metrics and trends",
    priority: "High",
    category: "Sales",
    dueDate: "2023-12-30",
  },
  {
    todo: "Conduct performance review with colleague",
    detail: "Provide constructive feedback and goal setting",
    priority: "Medium",
    category: "Human Resources",
    dueDate: "2023-12-30",
  },
  {
    todo: "Update contact information on company website",
    priority: "Low",
    category: "Administration",
    dueDate: "2023-12-30",
  },
  {
    todo: "Research competitor marketing strategies",
    detail: "Identify winning tactics and analyze effectiveness",
    priority: "Medium",
    category: "Marketing",
    dueDate: "2023-12-30",
  },
  {
    todo: "Plan professional development goals for next year",
    detail: "Align with career aspirations and company needs",
    priority: "Medium",
    category: "Career",
    dueDate: "2023-12-30",
  },
  {
    todo: "Finalize year-end inventory report",
    detail: "Ensure accuracy and completeness",
    priority: "High",
    category: "Operations",
    dueDate: "2023-12-31",
  },
  {
    todo: "Send thank you notes to team members for contributions",
    detail: "Recognize individual efforts and team spirit",
    priority: "Medium",
    category: "Teamwork",
    dueDate: "2023-12-31",
  },
  {
    todo: "Backup important work files and documents",
    detail: "Use a reliable cloud storage or external drive",
    priority: "High",
    category: "Technology",
    dueDate: "2023-12-31",
  },
  {
    todo: "Prepare for upcoming industry conference",
    detail: "Research topics, schedule meetings, and book travel",
    priority: "Medium",
    category: "Networking",
    dueDate: "2024-01-03",
  },
  {
    todo: "Renew website domain name and hosting",
    detail: "",
    priority: "High",
    category: "Technology",
    dueDate: "2024-01-05",
  },
  {
    todo: "Schedule annual physical exam",
    detail: "Maintain good health and well-being",
    priority: "High",
    category: "Personal",
    dueDate: "2024-01-05",
  },
];

todoData.forEach((ele) => {
  tasks.push(ele);
});

localStorage.setItem("tasks", JSON.stringify(tasks));
localStorage.tasks ? (tasks = JSON.parse(localStorage.tasks)) : (tasks = []);
