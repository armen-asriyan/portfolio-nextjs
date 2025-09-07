import {
  // Languages
  SiJavascript,
  SiJavascriptHex,
  SiTypescript,
  SiTypescriptHex,

  // Frontend Frameworks & Libraries
  SiReact,
  SiReactHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiSolid,
  SiSolidHex,
  SiVite,
  SiViteHex,
  SiVanillaextract,
  SiVanillaextractHex,

  // Styling
  SiTailwindcss,
  SiTailwindcssHex,
  SiCss,
  SiCssHex,
  SiHtml5,
  SiHtml5Hex,

  // Backend
  SiExpress,
  SiNodedotjs,
  SiNodedotjsHex,

  // Databases
  SiMongodb,
  SiMongodbHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiSqlite,
  SiSqliteHex,

  // Tools & Services
  SiFirebase,
  SiFirebaseHex,
  SiGit,
  SiGitHex,
  SiFigma,
  SiFigmaHex,
  SiWordpress,
  SiWordpressHex,
  SiVercel,
  SiVercelHex,
} from "@icons-pack/react-simple-icons";

type Skill = {
  icon: React.ComponentType<{ className?: string }>;
  hoverColor?: string;
  darkIcon?: boolean;
};

const SkillList: Skill[] = [
  // 🟨 Languages
  { icon: SiJavascript, hoverColor: SiJavascriptHex },
  { icon: SiTypescript, hoverColor: SiTypescriptHex },

  // ⚛️ Frontend Frameworks & Libraries
  { icon: SiReact, hoverColor: SiReactHex },
  { icon: SiNextdotjs, hoverColor: SiNextdotjsHex, darkIcon: true },
  { icon: SiSolid, hoverColor: SiSolidHex },
  { icon: SiVite, hoverColor: SiViteHex },
  { icon: SiVanillaextract, hoverColor: SiVanillaextractHex },

  // 🎨 Styling
  { icon: SiTailwindcss, hoverColor: SiTailwindcssHex },
  { icon: SiCss, hoverColor: SiCssHex },
  { icon: SiHtml5, hoverColor: SiHtml5Hex },

  // 🔧 Backend
  { icon: SiExpress, darkIcon: true },
  { icon: SiNodedotjs, hoverColor: SiNodedotjsHex },

  // 🗄️ Databases
  { icon: SiMongodb, hoverColor: SiMongodbHex },
  { icon: SiPostgresql, hoverColor: SiPostgresqlHex },
  { icon: SiSqlite, hoverColor: SiSqliteHex },

  // 🔌 Tools & Services
  { icon: SiFirebase, hoverColor: SiFirebaseHex },
  { icon: SiGit, hoverColor: SiGitHex },
  { icon: SiFigma, hoverColor: SiFigmaHex },
  { icon: SiWordpress, hoverColor: SiWordpressHex },
  { icon: SiVercel, hoverColor: SiVercelHex, darkIcon: true },
] as const;

export default SkillList;
