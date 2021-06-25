import { Component, ComponentInterface, Host, h } from "@stencil/core";

@Component({
  tag: "core-icon-grid",
  styleUrl: "core-icon-grid.css",
  shadow: true,
})
export class IconGrid implements ComponentInterface {
  render() {
    const iconList = [
      "alert-circle",
      "alert-triangle",
      "alert-triangle-solid",
      "anchor",
      "archive",
      "arrow-down",
      "arrow-left",
      "arrow-right",
      "arrow-up",
      "bar",
      "bell",
      "bell-mute",
      "bell-solid",
      "bold",
      "bullet",
      "calendar",
      "camera",
      "caret-down",
      "caret-left",
      "caret-right",
      "caret-up",
      "cart",
      "cart-solid",
      "category",
      "check",
      "check-sm",
      "chevron-down",
      "chevron-left",
      "chevron-right",
      "chevron-up",
      "circle",
      "clipboard",
      "clock",
      "columns",
      "cross",
      "cross-sm",
      "disable",
      "dot",
      "download",
      "drag",
      "fast-forward",
      "film-camera",
      "gear",
      "globe",
      "grad",
      "grid",
      "heading",
      "heart",
      "help",
      "help-solid",
      "history",
      "hourglass",
      "image",
      "info",
      "italic",
      "layers",
      "link",
      "link-out",
      "list-bullet",
      "list-num",
      "logout",
      "mail",
      "mail-solid",
      "menu",
      "meter",
      "minus",
      "minus-box",
      "more",
      "paragraph",
      "pen",
      "pencil",
      "play",
      "plus",
      "plus-box",
      "quote",
      "redo",
      "refresh",
      "rewind",
      "rows",
      "search",
      "settings",
      "speech",
      "spinner",
      "star",
      "star-half",
      "star-solid",
      "strike",
      "toolbox",
      "trash",
      "underline",
      "undo",
      "user",
      "users",
      "video",
    ];

    return (
      <Host>
        {iconList.map((icon) => (
          <div class="icon">
            <core-icon name={icon} />
            <div class="icon-name">{icon}</div>
          </div>
        ))}
      </Host>
    );
  }
}
