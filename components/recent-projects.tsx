import { CalendarIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function RecentProjects() {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-4 rounded-lg border p-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="font-medium">Market Segmentation Analysis</div>
            <Badge variant="outline" className="ml-auto">
              In Progress
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Identifying key customer segments for targeted marketing campaigns
          </div>
          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
            <CalendarIcon className="h-3 w-3" />
            <span>Updated 2 days ago</span>
          </div>
        </div>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-start gap-4 rounded-lg border p-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="font-medium">Quarterly Sales Forecast</div>
            <Badge variant="outline" className="ml-auto">
              Completed
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Predictive analysis of Q3 sales performance by region
          </div>
          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
            <CalendarIcon className="h-3 w-3" />
            <span>Updated 1 week ago</span>
          </div>
        </div>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-start gap-4 rounded-lg border p-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="font-medium">Product Line Optimization</div>
            <Badge variant="outline" className="ml-auto">
              In Progress
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground mt-1">
            Analyzing product performance to optimize inventory and pricing
          </div>
          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
            <CalendarIcon className="h-3 w-3" />
            <span>Updated 3 days ago</span>
          </div>
        </div>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
