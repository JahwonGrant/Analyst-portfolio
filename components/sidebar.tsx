import { BarChart3, FileText, Home, LineChart, PieChart, Settings, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Sidebar() {
  return (
    <ScrollArea className="h-full py-6">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold">Navigation</h2>
        <div className="space-y-1">
          <Button variant="secondary" asChild className="w-full justify-start">
            <Link href="#">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#">
              <LineChart className="mr-2 h-4 w-4" />
              Analytics
            </Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#">
              <FileText className="mr-2 h-4 w-4" />
              Reports
            </Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#">
              <PieChart className="mr-2 h-4 w-4" />
              Visualizations
            </Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#">
              <BarChart3 className="mr-2 h-4 w-4" />
              Forecasting
            </Link>
          </Button>
        </div>
      </div>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold">Management</h2>
        <div className="space-y-1">
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#">
              <Users className="mr-2 h-4 w-4" />
              Team
            </Link>
          </Button>
          <Button variant="ghost" asChild className="w-full justify-start">
            <Link href="#">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
        </div>
      </div>
    </ScrollArea>
  )
}
