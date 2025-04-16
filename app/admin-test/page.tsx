export default function AdminTestPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4 rounded-lg border bg-card p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Admin Test Page</h1>
        <p>If you can see this page, routing is working correctly.</p>
        <div className="flex flex-col gap-2">
          <a
            href="/admin/login"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Go to Admin Login
          </a>
        </div>
      </div>
    </div>
  )
}
