import Link from "next/link";
import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionary";
import { buildLocalePath } from "@/utils/localePaths";

interface SidebarProps {
  locale: Locale;
}

export default function Sidebar({ locale }: SidebarProps) {
  const dictionary = getDictionary(locale);

  // Extract other categories for quick links, excluding home
  const categoryLinks = dictionary.navigation.items.filter(
    (item) => item.key !== "home"
  );

  return (
    <aside id="sidebar" className="hidden lg:block lg:col-span-1 space-y-6 w-[300px] xl:w-[320px] shrink-0">
      {/* Widget 1: Quick Rules (Pushes the ad below the fold) */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <h3 className="font-bold text-gray-800 text-base mb-3 border-b pb-2 border-gray-100">
          {dictionary.sidebar.quickRulesTitle}
        </h3>
        <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
          {dictionary.sidebar.quickRulesList.map((rule, idx) => (
            <li key={idx} className="leading-relaxed">
              {rule}
            </li>
          ))}
        </ul>
      </div>

      {/* Widget 2: Popular Categories / Internal Links */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
        <h3 className="font-bold text-gray-800 text-base mb-3 border-b pb-2 border-gray-100">
          {dictionary.sidebar.popularTitle}
        </h3>
        <div className="flex flex-col gap-2">
          {categoryLinks.slice(0, 6).map((item) => (
            <Link
              key={item.key}
              href={buildLocalePath(locale, item.href)}
              className="text-sm text-purple-600 hover:text-purple-800 hover:underline transition-colors flex items-center gap-1.5"
            >
              <span>•</span>
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Widget 3: Sidebar Sticky Ad Placeholder (Pushed below the fold) */}
      {/* Mediavine script wrapper will target this sidebar and insert a sticky ad unit at the end */}
      <div 
        id="mediavine-sidebar-ad-placeholder" 
        className="w-[300px] min-h-[250px] bg-gray-50/50 rounded-lg border border-dashed border-gray-200 flex items-center justify-center text-xs text-gray-400 mt-6"
      >
        <span>{dictionary.sidebar.advertisement}</span>
      </div>
    </aside>
  );
}
