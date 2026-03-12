import { useTranslation } from "react-i18next";
import RibbonGroup from "./RibbonGroup";
import RibbonButton from "./RibbonButton";
import { helpIcon, infoIcon } from "./icons";

export default function HelpTab() {
  const { t } = useTranslation("ribbon");

  return (
    <div className="ribbon-content active">
      <div className="ribbon-groups">
        <RibbonGroup label={t("help.support")}>
          <RibbonButton icon={helpIcon} label={t("help.help")} />
          <RibbonButton icon={infoIcon} label={t("help.about")} />
        </RibbonGroup>
      </div>
    </div>
  );
}
