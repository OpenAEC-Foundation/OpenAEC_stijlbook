import { useTranslation } from "react-i18next";
import RibbonGroup from "./RibbonGroup";
import RibbonButton from "./RibbonButton";
import RibbonButtonStack from "./RibbonButtonStack";
import {
  undoIcon, redoIcon, cutIcon, copyIcon, clipboardIcon,
} from "./icons";

const selectAllIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9h6v6H9z"/></svg>`;

const findReplaceIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`;

const deleteIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`;

const duplicateIcon = `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/></svg>`;

export default function EditTab() {
  const { t } = useTranslation("ribbon");

  return (
    <div className="ribbon-content active">
      <div className="ribbon-groups">
        <RibbonGroup label={t("edit.undo")}>
          <RibbonButton icon={undoIcon} label={t("edit.undo")} title="Ctrl+Z" />
          <RibbonButton icon={redoIcon} label={t("home.redo")} title="Ctrl+Y" />
        </RibbonGroup>

        <RibbonGroup label={t("edit.clipboard")}>
          <RibbonButton icon={clipboardIcon} label={t("edit.paste")} title="Ctrl+V" />
          <RibbonButtonStack>
            <RibbonButton size="small" icon={cutIcon} label={t("edit.cut")} title="Ctrl+X" />
            <RibbonButton size="small" icon={copyIcon} label={t("edit.copy")} title="Ctrl+C" />
            <RibbonButton size="small" icon={duplicateIcon} label={t("edit.duplicate")} title="Ctrl+D" />
          </RibbonButtonStack>
        </RibbonGroup>

        <RibbonGroup label={t("edit.selection")}>
          <RibbonButtonStack>
            <RibbonButton size="small" icon={selectAllIcon} label={t("edit.selectAll")} title="Ctrl+A" />
            <RibbonButton size="small" icon={deleteIcon} label={t("edit.delete")} />
          </RibbonButtonStack>
        </RibbonGroup>

        <RibbonGroup label={t("edit.find")}>
          <RibbonButton icon={findReplaceIcon} label={t("edit.findReplace")} title="Ctrl+F" />
        </RibbonGroup>
      </div>
    </div>
  );
}
