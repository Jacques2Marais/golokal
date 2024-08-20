import { Search } from "lucide-react";
import { Input } from "@/components/ui/input"

export function BusinessCategorySearch({ includeIcon = false, className = "", ...props }) {
  return (
    <div className={`flex gap-4 items-center justify-center w-full max-w-lg ${className}`} {...props}>
      {includeIcon && <Search size={20} />}
      <Input className="w-full text-foreground" placeholder="Search for a business category" />
    </div>
  );
}