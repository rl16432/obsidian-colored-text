import { App, Editor, Menu } from "obsidian";
import ColoredFont from "./main";

export default function contextMenu(
  app: App,
  menu: Menu,
  editor: Editor,
  plugin: ColoredFont,
  curColor: string
): void {
  const selection = editor.getSelection();

  if (selection) {
    menu.addItem((item) => {
      item
        .setTitle("Color Text")
        .onClick((e) => {
          if (editor.getSelection()) {
            editor.replaceSelection(`<span style="color:${curColor}">${selection}</span>`);

            const cursorEnd = editor.getCursor("to");
            editor.setCursor(cursorEnd.line, cursorEnd.ch + 1);
          }
        });
    });
  }
}