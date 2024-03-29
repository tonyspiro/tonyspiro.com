import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10 px-4">
      <Link href="/" className="flex items-center space-x-4">
        <span className="mt-[3px] inline-block font-bold">
          {siteConfig.navTitle}
        </span>
      </Link>
    </div>
  )
}
