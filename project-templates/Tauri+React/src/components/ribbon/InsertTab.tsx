import { useTranslation } from "react-i18next";
import RibbonGroup from "./RibbonGroup";
import RibbonButton from "./RibbonButton";
import RibbonButtonStack from "./RibbonButtonStack";
import { imageIcon, tableIcon, linkIcon } from "./icons";

const shapeIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"/><circle cx="17" cy="7" r="3" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 14l3 6H4l3-6z"/></svg>`;

const chartIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`;

const textBoxIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6v12"/></svg>`;

const videoIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>`;

const codeIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`;

const dividerIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12h16"/></svg>`;

export default function InsertTab() {
  const { t } = useTranslation("ribbon");

  return (
    <div className="ribbon-content active">
      <div className="ribbon-groups">
        <RibbonGroup label={t("insert.content")}>
          <RibbonButton icon={imageIcon} label={t("insert.image")} />
          <RibbonButton icon={tableIcon} label={t("insert.table")} />
          <RibbonButton icon={chartIcon} label={t("insert.chart")} />
        </RibbonGroup>

        <RibbonGroup label={t("insert.elements")}>
          <RibbonButton icon={shapeIcon} label={t("insert.shapes")} />
          <RibbonButton icon={textBoxIcon} label={t("insert.textBox")} />
          <RibbonButton icon={linkIcon} label={t("insert.link")} />
        </RibbonGroup>

        <RibbonGroup label={t("insert.media")}>
          <RibbonButtonStack>
            <RibbonButton size="small" icon={videoIcon} label={t("insert.video")} />
            <RibbonButton size="small" icon={codeIcon} label={t("insert.codeBlock")} />
            <RibbonButton size="small" icon={dividerIcon} label={t("insert.divider")} />
          </RibbonButtonStack>
        </RibbonGroup>
      </div>
    </div>
  );
}
