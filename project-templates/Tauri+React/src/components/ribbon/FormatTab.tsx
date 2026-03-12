import { useTranslation } from "react-i18next";
import RibbonGroup from "./RibbonGroup";
import RibbonButton from "./RibbonButton";
import RibbonButtonStack from "./RibbonButtonStack";
import {
  boldIcon, italicIcon, underlineIcon,
  alignLeftIcon, alignCenterIcon, alignRightIcon,
} from "./icons";

const fontSizeUpIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h4L12 4l4 16h4M8 14h8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 4v4m2-2h-4"/></svg>`;

const fontSizeDownIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 20h4L12 4l4 16h4M8 14h8"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 6h4"/></svg>`;

const strikethroughIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4H9a3 3 0 00-3 3v0a3 3 0 003 3h6a3 3 0 010 6H6"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16"/></svg>`;

const highlightIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>`;

const textColorIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20h4L15 4h-4L7 20zm0 0h10"/><rect x="3" y="19" width="18" height="2" rx="0.5" fill="#e53e3e" stroke="none"/></svg>`;

const bgColorIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485"/><rect x="3" y="19" width="18" height="2" rx="0.5" fill="#f6ad55" stroke="none"/></svg>`;

const listBulletIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h.01M4 12h.01M4 18h.01M8 6h12M8 12h12M8 18h12"/></svg>`;

const listNumberIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h2v4H3V5zm0 7h2l-2 3h2m-2 3h2v1H3v2h2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6h12M9 12h12M9 18h12"/></svg>`;

const indentIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M12 10h8M12 14h8M4 18h16M4 10l4 2-4 2V10z"/></svg>`;

export default function FormatTab() {
  const { t } = useTranslation("ribbon");

  return (
    <div className="ribbon-content active">
      <div className="ribbon-groups">
        <RibbonGroup label={t("format.font")}>
          <RibbonButtonStack>
            <RibbonButton size="small" icon={boldIcon} label={t("format.bold")} />
            <RibbonButton size="small" icon={italicIcon} label={t("format.italic")} />
            <RibbonButton size="small" icon={underlineIcon} label={t("format.underline")} />
          </RibbonButtonStack>
          <RibbonButtonStack>
            <RibbonButton size="small" icon={strikethroughIcon} label={t("format.strikethrough")} />
            <RibbonButton size="small" icon={fontSizeUpIcon} label={t("format.increaseSize")} />
            <RibbonButton size="small" icon={fontSizeDownIcon} label={t("format.decreaseSize")} />
          </RibbonButtonStack>
        </RibbonGroup>

        <RibbonGroup label={t("format.color")}>
          <RibbonButton icon={textColorIcon} label={t("format.textColor")} />
          <RibbonButton icon={bgColorIcon} label={t("format.fillColor")} />
          <RibbonButton icon={highlightIcon} label={t("format.highlight")} />
        </RibbonGroup>

        <RibbonGroup label={t("format.paragraph")}>
          <RibbonButtonStack>
            <RibbonButton size="small" icon={alignLeftIcon} label={t("format.alignLeft")} />
            <RibbonButton size="small" icon={alignCenterIcon} label={t("format.center")} />
            <RibbonButton size="small" icon={alignRightIcon} label={t("format.alignRight")} />
          </RibbonButtonStack>
          <RibbonButtonStack>
            <RibbonButton size="small" icon={listBulletIcon} label={t("format.bullets")} />
            <RibbonButton size="small" icon={listNumberIcon} label={t("format.numbering")} />
            <RibbonButton size="small" icon={indentIcon} label={t("format.indent")} />
          </RibbonButtonStack>
        </RibbonGroup>
      </div>
    </div>
  );
}
