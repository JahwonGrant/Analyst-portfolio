export type Tool = {
  name: string
  icon?: string
}

export type ProjectVisualization = {
  title: string
  description: string
  image: string
  type: "chart" | "dashboard" | "screenshot" | "diagram"
}

export type Project = {
  id: string
  title: string
  slug: string
  summary: string
  overview: string
  situation: string
  task: string
  action: string
  results: string
  impact: {
    metric: string
    value: string
    change: string
  }[]
  tools: Tool[]
  technologies: string[]
  categories: string[]
  coverImage: string
  githubUrl?: string
  demoUrl?: string
  date: string
  visualizations?: ProjectVisualization[]
}

const projects: Project[] = [
  {
    id: "1",
    title: "Automated Tableau Dashboards",
    slug: "automated-tableau-dashboards",
    summary:
      "Built 11 automated reporting dashboards using Tableau, reducing report creation time from 4-8 hours to 15 minutes per report.",
    overview:
      "Delivered automated Tableau reporting that accelerated insights and scaled across departments, transforming how the organization accessed and utilized critical business data.",
    situation:
      "Multiple departments relied on manual Excel reports, consuming 4–8 hours weekly per report, delaying strategic decisions and creating significant operational inefficiencies. Leadership lacked timely access to critical business metrics, hampering agility and data-driven decision making.",
    task: "Streamline and automate executive and departmental reporting with dynamic dashboards that reduce analyst hours and improve decision velocity. Create a scalable reporting solution that could be maintained with minimal ongoing effort.",
    action:
      "Developed 11 Tableau dashboards connected to SQL-driven live data pipelines. Used Tableau Prep to automate refresh logic, reducing manual intervention and enabling real-time executive visibility. Implemented parameter-driven filters to allow users to customize their view of the data without requiring technical expertise. Created documentation and conducted training sessions to ensure adoption across the organization.",
    results:
      "Reduced reporting time to just 15 minutes per report — freeing 30+ analyst hours weekly and increasing leadership access to timely insights. The automated dashboards improved data accuracy by eliminating manual data entry errors and provided consistent metrics across departments. Executive leadership gained the ability to make data-driven decisions with up-to-date information, improving overall business agility.",
    impact: [
      { metric: "Report Generation Time", value: "15 minutes", change: "-95%" },
      { metric: "Analyst Hours Saved", value: "30+ hours/week", change: "+100%" },
      { metric: "Data Refresh Frequency", value: "Daily", change: "+500%" },
      { metric: "User Adoption", value: "87%", change: "+45%" },
    ],
    tools: [{ name: "Tableau" }, { name: "Tableau Prep" }, { name: "SQL" }, { name: "Excel" }],
    technologies: ["Data Visualization", "ETL", "Data Modeling", "SQL Server"],
    categories: ["Data Visualization", "Process Automation", "Business Intelligence"],
    coverImage: "/placeholder.svg?height=600&width=800",
    githubUrl: "https://github.com/JahwonGrant/tableau-dashboards",
    date: "2023 - 2024",
    visualizations: [
      {
        title: "Executive Dashboard",
        description: "Comprehensive view of key performance indicators for executive leadership",
        image: "/placeholder.svg?height=600&width=800",
        type: "dashboard",
      },
      {
        title: "Sales Performance Tracker",
        description: "Real-time visualization of sales metrics by region and product category",
        image: "/placeholder.svg?height=600&width=800",
        type: "dashboard",
      },
      {
        title: "Data Pipeline Architecture",
        description: "Technical diagram showing the automated data flow from source systems to dashboards",
        image: "/placeholder.svg?height=600&width=800",
        type: "diagram",
      },
    ],
  },
  {
    id: "2",
    title: "Sales Pipeline Tracking Application",
    slug: "sales-pipeline-tracking",
    summary:
      "Created a web application that allowed 300 sales representatives to track their pipeline in real-time, increasing productivity by 85%.",
    overview:
      "Built a custom web-based platform for sales pipeline visibility, empowering 300+ reps with real-time tracking and actionable insights that transformed the sales organization's effectiveness.",
    situation:
      "Sales teams lacked centralized tools, resulting in outdated pipeline data, inconsistent forecasting, and low accountability. Management had limited visibility into the sales process, making it difficult to identify bottlenecks and coaching opportunities.",
    task: "Develop a scalable, interactive web application to capture pipeline stages, visualize deal flow, and enable rep-level performance tracking. The solution needed to integrate with existing CRM data while providing a more intuitive and actionable interface for sales representatives.",
    action:
      "Engineered a responsive full-stack application using Python (Flask), PostgreSQL, and JavaScript. Integrated real-time updates, dynamic filters, and performance KPIs for actionable sales management. Implemented role-based access controls to provide appropriate views for sales reps, managers, and executives. Created an API layer to integrate with the existing CRM system for seamless data flow.",
    results:
      "Boosted sales rep productivity by 85%, increased forecast accuracy by 42%, and decreased time spent on manual updates by 75%. The application provided unprecedented visibility into the sales pipeline, allowing management to identify bottlenecks and optimize the sales process. Sales representatives gained a clear understanding of their performance metrics and pipeline health.",
    impact: [
      { metric: "Sales Rep Productivity", value: "85%", change: "+85%" },
      { metric: "Forecast Accuracy", value: "92%", change: "+42%" },
      { metric: "Time on Manual Updates", value: "15 min/day", change: "-75%" },
      { metric: "Pipeline Visibility", value: "100%", change: "+60%" },
    ],
    tools: [
      { name: "Python" },
      { name: "Flask" },
      { name: "PostgreSQL" },
      { name: "JavaScript" },
      { name: "HTML/CSS" },
    ],
    technologies: ["Web Development", "Database Design", "API Integration", "Data Visualization"],
    categories: ["Web Development", "Data Analysis", "Sales Analytics"],
    coverImage: "/placeholder.svg?height=600&width=800",
    githubUrl: "https://github.com/JahwonGrant/sales-pipeline-app",
    demoUrl: "https://sales-pipeline-demo.vercel.app",
    date: "2023",
    visualizations: [
      {
        title: "Pipeline Dashboard",
        description: "Main interface showing deal flow and key metrics",
        image: "/placeholder.svg?height=600&width=800",
        type: "screenshot",
      },
      {
        title: "Performance Analytics",
        description: "Visualization of individual and team performance metrics",
        image: "/placeholder.svg?height=600&width=800",
        type: "chart",
      },
      {
        title: "Application Architecture",
        description: "Technical diagram of the application's components and data flow",
        image: "/placeholder.svg?height=600&width=800",
        type: "diagram",
      },
    ],
  },
  {
    id: "3",
    title: "Pricing Strategy Optimization",
    slug: "pricing-strategy-optimization",
    summary:
      "Analyzed 20GB of data to determine the best pricing strategy for 10 new products, identifying opportunities that increased revenue by $1.75M annually.",
    overview:
      "Used advanced analytics to uncover pricing insights that led to a $1.75M annual revenue boost, transforming the company's approach to product pricing and market positioning.",
    situation:
      "The company was preparing to launch 10 new products but lacked a data-backed strategy to price them competitively while maximizing revenue. Previous pricing decisions were largely based on intuition and industry standards, resulting in suboptimal market performance.",
    task: "Conduct a deep pricing analysis across historical, market, and behavioral data to uncover elasticity patterns and competitive gaps. Develop a data-driven pricing strategy that would maximize revenue while maintaining market competitiveness.",
    action:
      "Processed 20GB of sales and competitor data using Python (pandas, seaborn, scikit-learn). Developed pricing models and elasticity curves, and visualized insights with Tableau dashboards for exec-level decision-making. Implemented A/B testing methodologies to validate pricing hypotheses before full-scale implementation. Created a dynamic pricing model that could adapt to changing market conditions.",
    results:
      "Identified optimal pricing tiers that increased projected annual revenue by $1.75M. The data-driven approach provided confidence in pricing decisions and created a framework for future product launches. The executive team gained valuable insights into price elasticity and customer purchasing behavior.",
    impact: [
      { metric: "Annual Revenue", value: "$1.75M", change: "+12%" },
      { metric: "Profit Margin", value: "32%", change: "+8%" },
      { metric: "Market Share", value: "18%", change: "+3%" },
      { metric: "Customer Acquisition", value: "1,200", change: "+15%" },
    ],
    tools: [{ name: "Python" }, { name: "Pandas" }, { name: "Seaborn" }, { name: "Scikit-learn" }, { name: "Tableau" }],
    technologies: ["Statistical Analysis", "Machine Learning", "Data Visualization", "A/B Testing"],
    categories: ["Pricing Analytics", "Revenue Optimization", "Market Analysis"],
    coverImage: "/placeholder.svg?height=600&width=800",
    githubUrl: "https://github.com/JahwonGrant/pricing-optimization",
    date: "2023",
    visualizations: [
      {
        title: "Price Elasticity Curves",
        description: "Visualization of how demand responds to price changes across product categories",
        image: "/placeholder.svg?height=600&width=800",
        type: "chart",
      },
      {
        title: "Revenue Projection Dashboard",
        description: "Interactive model showing revenue projections at different price points",
        image: "/placeholder.svg?height=600&width=800",
        type: "dashboard",
      },
      {
        title: "Competitive Pricing Analysis",
        description: "Market positioning visualization comparing pricing against competitors",
        image: "/placeholder.svg?height=600&width=800",
        type: "chart",
      },
    ],
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}

export function getFeaturedProjects(count = 3): Project[] {
  return projects.slice(0, count)
}
