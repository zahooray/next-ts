// app/dashboard/@sidebar/page.tsx
import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul className="space-y-2">
        <li>
          <Link href="/dashboard">Home</Link>
        </li>
        <li>
          <Link href="/dashboard/reports">Reports</Link>
        </li>
        <li>
          <Link href="/dashboard/analytics">Analytics</Link>
        </li>
      </ul>
    </div>
  );
}
