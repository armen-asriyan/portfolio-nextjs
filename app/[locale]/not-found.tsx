import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <pre
        className="text-lg leading-none mb-6 -translate-x-5"
        style={{ fontFamily: "Roboto" }}
      >
        {`A_A
                (╹ -╹)   - ${t("huh")} ?`}
      </pre>
      <h1 className="text-6xl font-bold mb-4">404</h1>

      <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
        {t("description")}
      </p>

      <Link
        href="/"
        className="px-6 py-2 text-white bg-purple-700 hover:bg-purple-800 rounded-md transition"
      >
        {t("link")}
      </Link>
    </div>
  );
}
