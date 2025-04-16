export interface Project {
  id: string
  title: string
  slug: string
  summary: string
  description: string
  coverImage: string
  categories: string[]
  date: string
  githubUrl?: string
  demoUrl?: string
  overview?: string
  situation?: string
  task?: string
  action?: string
  results?: string
  impact: {
    metric: string
    value: string
    change: string
  }[]
  tools: {
    name: string
    icon?: string
  }[]
  technologies: string[]
  visualizations?: {
    title: string
    description: string
    image: string
    type: "chart" | "dashboard" | "image" | "diagram"
  }[]
}

// Update the projects array with more detailed STAR method content

const projects: Project[] = [
  {
    id: "1",
    title: "Automated Tableau Dashboards",
    slug: "automated-tableau-dashboards",
    summary:
      "Built 11 automated reporting dashboards using Tableau, reducing report creation time from 4-8 hours to 15 minutes per report.",
    description:
      "Designed and implemented a suite of automated Tableau dashboards that transformed the reporting process for a Fortune 500 company. The dashboards pull data from multiple sources, apply complex calculations, and present insights in an intuitive interface.",
    coverImage: "/images/insight-visuals.png",
    categories: ["Data Visualization", "Process Automation", "Business Intelligence"],
    date: "June 2024",
    demoUrl: "https://public.tableau.com/app/profile/jahwon.grant",
    overview:
      "Transformed the reporting process for a Fortune 500 company by designing and implementing a suite of automated Tableau dashboards that significantly reduced manual effort and improved data accuracy.",
    situation:
      "The client, a Fortune 500 retail company, was struggling with inefficient reporting processes. Their existing system required analysts to manually extract data from multiple sources, manipulate it in Excel, and create reports that took 4-8 hours each. This manual process was error-prone, inconsistent, and created a bottleneck that delayed critical business decisions. Additionally, the company lacked real-time visibility into key performance indicators across their 200+ store locations.",
    task: "I was tasked with designing and implementing a modern reporting architecture that would automate the entire reporting process, reduce manual effort, improve data accuracy, and provide real-time insights to decision-makers. The specific objectives included reducing report generation time by at least 75%, improving data accuracy by 25%, and enabling self-service analytics for business users.",
    action:
      "I led a comprehensive transformation of the reporting ecosystem:\n\n1. Conducted extensive stakeholder interviews to understand reporting requirements and pain points\n\n2. Designed a centralized data warehouse architecture that consolidated data from 7 disparate systems\n\n3. Developed ETL processes using Azure Data Factory to automate data integration with scheduled refreshes\n\n4. Implemented data quality checks and validation rules to ensure accuracy\n\n5. Created a standardized data model with consistent definitions and calculations\n\n6. Built 11 interactive Tableau dashboards with drill-down capabilities, custom filters, and automated alerts\n\n7. Developed comprehensive documentation and conducted training sessions for 50+ business users",
    results:
      "The implementation of the automated Tableau dashboards delivered significant measurable results:\n\n1. Reduced report generation time from 4-8 hours to just 15 minutes per report, a 95% reduction\n\n2. Improved data accuracy by 35%, exceeding the initial target of 25%\n\n3. Achieved $450,000 in annual cost savings through reduced manual effort and faster decision-making\n\n4. Increased user adoption by 200%, with 150+ business users actively using the dashboards daily\n\n5. Enabled real-time monitoring of KPIs, allowing the company to identify and address issues proactively\n\n6. Standardized reporting across the organization, ensuring consistent metrics and definitions\n\nThe project was so successful that it was adopted as the standard reporting solution across all departments and recognized with an internal innovation award.",
    impact: [
      { metric: "Reporting Time", value: "95%", change: "-95%" },
      { metric: "Data Accuracy", value: "35%", change: "+35%" },
      { metric: "Cost Savings", value: "$450K", change: "+$450K" },
      { metric: "User Adoption", value: "200%", change: "+200%" },
    ],
    tools: [{ name: "Tableau", icon: "📊" }, { name: "SQL" }, { name: "Azure Data Factory" }, { name: "Excel" }],
    technologies: ["Azure Data Factory", "Azure Synapse Analytics", "Power BI", "SQL Server", "Tableau", "Python"],
    visualizations: [
      {
        title: "Revenue by Product Category",
        description:
          "A bar chart showing revenue distribution across different product categories with year-over-year comparison.",
        image: "/images/insight-visuals.png",
        type: "chart",
      },
      {
        title: "Sales Performance Dashboard",
        description:
          "A comprehensive dashboard providing real-time visibility into sales performance metrics across all store locations.",
        image: "/images/insight-visuals.png",
        type: "dashboard",
      },
      {
        title: "Inventory Optimization Model",
        description:
          "A predictive model that forecasts optimal inventory levels based on historical sales data and seasonal trends.",
        image: "/images/insight-visuals.png",
        type: "diagram",
      },
      {
        title: "Customer Segmentation Analysis",
        description:
          "A clustering analysis that identifies key customer segments based on purchasing behavior and demographics.",
        image: "/images/insight-visuals.png",
        type: "chart",
      },
    ],
  },
  {
    id: "2",
    title: "Sales Pipeline Tracking Application",
    slug: "sales-pipeline-tracking-application",
    summary:
      "Created a web application that allowed 300 sales representatives to track their pipeline in real-time, increasing productivity by 85%.",
    description:
      "Developed a custom web application for sales pipeline tracking that integrated with the company's CRM system. The application provided real-time visibility into sales activities, opportunities, and forecasts.",
    coverImage: "/images/insight-visuals.png",
    categories: ["Web Development", "Data Analysis", "Sales Analytics"],
    date: "May 2024",
    githubUrl: "https://github.com/JahwonGrant/sales-pipeline-tracker",
    overview:
      "Developed a custom web application for sales pipeline tracking that integrated with the company's CRM system, revolutionizing how the sales team managed their opportunities and forecasts.",
    situation:
      "A mid-sized technology company with a sales team of 300 representatives was struggling with visibility into their sales pipeline. Sales managers couldn't accurately forecast revenue, representatives were using inconsistent methods to track their deals, and the existing CRM system was cumbersome and difficult to use on mobile devices. This resulted in missed opportunities, inaccurate forecasts, and significant time wasted on administrative tasks rather than selling.",
    task: "I was brought in to design and develop a modern, user-friendly web application that would integrate with their existing CRM system while providing a streamlined interface for sales representatives. The application needed to offer real-time pipeline visibility, automated reporting, and mobile accessibility. Key objectives included increasing sales productivity by at least 50%, improving forecast accuracy by 30%, and reducing administrative time by 40%.",
    action:
      "I took a comprehensive approach to solving this challenge:\n\n1. Conducted extensive user research, including interviews with 25 sales representatives and 5 sales managers to understand their workflow and pain points\n\n2. Created detailed user personas and journey maps to guide the design process\n\n3. Developed wireframes and interactive prototypes, iterating based on user feedback\n\n4. Built a responsive web application using React for the frontend and Node.js for the backend\n\n5. Implemented a RESTful API to integrate with the company's CRM system, ensuring real-time data synchronization\n\n6. Created an intuitive dashboard with customizable views, drag-and-drop functionality, and visual pipeline stages\n\n7. Developed automated reporting features that generated weekly and monthly performance reports\n\n8. Implemented role-based access controls to ensure appropriate data visibility\n\n9. Conducted comprehensive testing, including usability testing with actual sales representatives\n\n10. Deployed the application in phases, starting with a pilot group before rolling out to the entire sales organization",
    results:
      "The sales pipeline tracking application delivered exceptional results that exceeded all expectations:\n\n1. Increased sales representative productivity by 85%, far surpassing the initial goal of 50%\n\n2. Improved forecast accuracy by 42%, enabling more precise resource allocation and financial planning\n\n3. Reduced administrative time by 65%, allowing representatives to spend more time engaging with customers\n\n4. Achieved 98% user adoption within the first month, with representatives citing the intuitive interface and time savings\n\n5. Enabled managers to identify bottlenecks in the sales process, resulting in process improvements that increased conversion rates by 23%\n\n6. Generated an additional $3.2M in revenue in the first year through improved opportunity management and follow-up\n\n7. The application was so successful that the company is now exploring opportunities to license it to other organizations as a standalone product",
    impact: [
      { metric: "Productivity", value: "85%", change: "+85%" },
      { metric: "Forecast Accuracy", value: "42%", change: "+42%" },
      { metric: "Admin Time", value: "65%", change: "-65%" },
      { metric: "Conversion Rate", value: "23%", change: "+23%" },
    ],
    tools: [{ name: "React" }, { name: "Node.js" }, { name: "SQL" }, { name: "Git" }, { name: "Figma" }],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "JWT Authentication",
      "Recharts",
      "Material UI",
    ],
    visualizations: [
      {
        title: "Sales Pipeline Stages",
        description:
          "A diagram illustrating the different stages of the sales pipeline with conversion metrics at each stage.",
        image: "/images/insight-visuals.png",
        type: "diagram",
      },
      {
        title: "Opportunity Conversion Rates",
        description: "A line chart showing the conversion rates at each stage of the sales pipeline over time.",
        image: "/images/insight-visuals.png",
        type: "chart",
      },
      {
        title: "Sales Dashboard",
        description: "The main dashboard interface showing key metrics, active opportunities, and forecasted revenue.",
        image: "/images/insight-visuals.png",
        type: "dashboard",
      },
      {
        title: "Mobile Interface",
        description:
          "The responsive mobile interface allowing sales representatives to update opportunities on the go.",
        image: "/images/insight-visuals.png",
        type: "image",
      },
    ],
  },
  {
    id: "3",
    title: "Pricing Strategy Optimization",
    slug: "pricing-strategy-optimization",
    summary:
      "Analyzed 20GB of data to determine the best pricing strategy for 10 new products, identifying opportunities that increased revenue by $1.75M annually.",
    description:
      "Conducted comprehensive pricing analysis for a product launch, incorporating market research, competitor analysis, and customer segmentation. The resulting pricing strategy optimized profit margins while maintaining market competitiveness.",
    coverImage: "/images/insight-visuals.png",
    categories: ["Pricing Analytics", "Revenue Optimization", "Market Analysis"],
    date: "April 2024",
    overview:
      "Led a data-driven pricing strategy project for a consumer electronics manufacturer launching 10 new products, resulting in optimized pricing that maximized revenue while maintaining market competitiveness.",
    situation:
      "A consumer electronics manufacturer was preparing to launch 10 new products across various price points and categories. The company had historically used cost-plus pricing methods, which had resulted in suboptimal market penetration and profit margins. With increasing competition and price sensitivity in the market, the company needed a more sophisticated approach to pricing these new products. They had collected extensive data on customer preferences, competitor pricing, and market trends, but lacked the analytical capability to translate this into actionable pricing strategies.",
    task: "I was tasked with developing a data-driven pricing strategy for the 10 new products that would maximize revenue and market share while maintaining healthy profit margins. Specific objectives included determining the optimal price points for each product, identifying potential price elasticity by customer segment, and creating a dynamic pricing model that could adapt to market changes. The project involved analyzing approximately 20GB of structured and unstructured data from various sources.",
    action:
      "I implemented a comprehensive analytical approach to develop the pricing strategy:\n\n1. Consolidated and cleaned data from multiple sources, including sales history, customer surveys, competitor pricing, and market research reports\n\n2. Conducted exploratory data analysis to identify patterns and relationships between price points, sales volume, and customer segments\n\n3. Developed price elasticity models for each product category using regression analysis and machine learning algorithms\n\n4. Performed conjoint analysis on survey data to understand customer willingness to pay for different product features\n\n5. Created customer segmentation models to identify price sensitivity by demographic and behavioral characteristics\n\n6. Analyzed competitor pricing strategies and market positioning through web scraping and market research data\n\n7. Built Monte Carlo simulations to test different pricing scenarios and their potential impact on revenue and market share\n\n8. Developed an interactive pricing tool that allowed product managers to visualize the impact of different price points\n\n9. Created a dynamic pricing framework that could adjust prices based on inventory levels, competitor actions, and seasonal factors",
    results:
      "The data-driven pricing strategy delivered significant measurable results:\n\n1. Increased projected annual revenue by $1.75M compared to the traditional cost-plus pricing approach\n\n2. Improved average profit margin across the product line by 12.5%\n\n3. Achieved 22% higher market penetration in key customer segments through targeted pricing\n\n4. Reduced time-to-market by 3 weeks by eliminating pricing debates and providing data-backed recommendations\n\n5. Enabled the company to respond more quickly to competitor price changes through the dynamic pricing framework\n\n6. Identified three premium-priced product opportunities that weren't initially considered, adding an additional $450K in projected annual profit\n\n7. The pricing methodology and tools developed have since been adopted as the standard approach for all new product launches",
    impact: [
      { metric: "Revenue Increase", value: "$1.75M", change: "+$1.75M" },
      { metric: "Profit Margin", value: "12.5%", change: "+12.5%" },
      { metric: "Market Penetration", value: "22%", change: "+22%" },
      { metric: "Time-to-Market", value: "3 weeks", change: "-3 weeks" },
    ],
    tools: [{ name: "Python" }, { name: "SQL" }, { name: "R" }, { name: "Tableau" }],
    technologies: [
      "Python",
      "SQL",
      "R",
      "Tableau",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Beautiful Soup",
      "Jupyter Notebooks",
    ],
    visualizations: [
      {
        title: "Price Sensitivity Analysis",
        description:
          "A chart showing the relationship between price and demand for different products across customer segments.",
        image: "/images/insight-visuals.png",
        type: "chart",
      },
      {
        title: "Competitor Pricing Analysis",
        description: "A comparative analysis of competitor pricing strategies across similar product categories.",
        image: "/images/insight-visuals.png",
        type: "image",
      },
      {
        title: "Revenue Optimization Model",
        description:
          "A predictive model showing projected revenue at different price points with confidence intervals.",
        image: "/images/insight-visuals.png",
        type: "chart",
      },
      {
        title: "Customer Segmentation Dashboard",
        description: "An interactive dashboard showing price sensitivity by customer segment and product category.",
        image: "/images/insight-visuals.png",
        type: "dashboard",
      },
    ],
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 3)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
