/* eslint-disable @stencil/strict-boolean-conditions */
import {
  Build,
  Component,
  Element,
  Host,
  Prop,
  State,
  Watch,
  h,
} from "@stencil/core";
import { getSvgContent, ioniconContent } from "./request";
import { getName, getUrl } from "./utils";

@Component({
  tag: "core-icon",
  styleUrl: "core-icon.less",
  assetsDir: "../../assets/icons",
  shadow: true,
})
export class Icon {
  private io?: IntersectionObserver;

  @Element() el!: HTMLCoreIconElement;

  @State() private svgContent?: string;
  @State() private isVisible = false;

  /**
   * Specifies the label to use for accessibility. Defaults to the icon name.
   */
  @Prop({ mutable: true, reflectToAttr: true }) ariaLabel?: string;

  /**
   * Optional color of the icon.
   * Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   * (e.g. `color="red"`, `color="gray-2"`, etc).
   */
  @Prop() color?: string;

  /**
   * A combination of both `name` and `src`. If a `src` url is detected
   * it will set the `src` property. Otherwise it assumes it's a built-in named
   * SVG and set the `name` property.
   */
  @Prop() icon?:
    | "alert-circle"
    | "alert-triangle"
    | "alert-triangle-solid"
    | "anchor"
    | "archive"
    | "arrow-down"
    | "arrow-left"
    | "arrow-right"
    | "arrow-up"
    | "bar"
    | "bell"
    | "bell-mute"
    | "bell-solid"
    | "bold"
    | "bullet"
    | "calendar"
    | "camera"
    | "caret-down"
    | "caret-left"
    | "caret-right"
    | "caret-up"
    | "cart"
    | "cart-solid"
    | "category"
    | "check"
    | "check-sm"
    | "chevron-down"
    | "chevron-left"
    | "chevron-right"
    | "chevron-up"
    | "circle"
    | "clipboard"
    | "clock"
    | "columns"
    | "cross"
    | "cross-sm"
    | "disable"
    | "dot"
    | "download"
    | "drag"
    | "fast-forward"
    | "film-camera"
    | "gear"
    | "globe"
    | "grad"
    | "grid"
    | "heading"
    | "heart"
    | "help"
    | "help-solid"
    | "history"
    | "hourglass"
    | "image"
    | "info"
    | "italic"
    | "layers"
    | "link"
    | "link-out"
    | "list-bullet"
    | "list-num"
    | "logout"
    | "mail"
    | "mail-solid"
    | "menu"
    | "meter"
    | "minus"
    | "minus-box"
    | "more"
    | "paragraph"
    | "pen"
    | "pencil"
    | "play"
    | "plus"
    | "plus-box"
    | "quote"
    | "redo"
    | "refresh"
    | "rewind"
    | "rows"
    | "search"
    | "settings"
    | "speech"
    | "spinner"
    | "star"
    | "star-half"
    | "star-solid"
    | "strike"
    | "toolbox"
    | "trash"
    | "underline"
    | "undo"
    | "user"
    | "users"
    | "video"
    | string;

  /**
   * If enabled, core-icon will be loaded lazily when it's visible in the viewport.
   */
  @Prop() lazy = false;

  /**
   * Specifies which icon to use from `src/core-icons`.
   */
  @Prop() name?: string;

  /**
   * The size of the icon.
   * Available options are: `"16"` and `"24"`.
   */
  @Prop() size?: "16" | "24" = "16";

  /**
   * Specifies the exact `src` of an SVG file to use.
   */
  @Prop() src?: string;

  connectedCallback() {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.el, "80px", () => {
      this.isVisible = true;
      this.loadIcon();
    });
  }

  disconnectedCallback() {
    // eslint-disable-next-line @stencil/strict-boolean-conditions
    if (this.io) {
      this.io.disconnect();
      this.io = undefined;
    }
  }

  private waitUntilVisible(
    el: HTMLElement,
    rootMargin: string,
    cb: () => void
  ) {
    if (
      Build.isBrowser &&
      this.lazy &&
      typeof window !== "undefined" &&
      (window as any).IntersectionObserver
    ) {
      const io = (this.io = new (window as any).IntersectionObserver(
        (data: IntersectionObserverEntry[]) => {
          if (data[0].isIntersecting) {
            io.disconnect();
            this.io = undefined;
            cb();
          }
        },
        { rootMargin }
      ));

      io.observe(el);
    } else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      cb();
    }
  }

  @Watch("name")
  @Watch("src")
  @Watch("icon")
  loadIcon() {
    if (Build.isBrowser && this.isVisible) {
      const url = getUrl(this);
      // eslint-disable-next-line @stencil/strict-boolean-conditions
      if (url) {
        if (ioniconContent.has(url)) {
          // sync if it's already loaded
          this.svgContent = ioniconContent.get(url);
        } else {
          // async if it hasn't been loaded
          getSvgContent(url).then(
            () => (this.svgContent = ioniconContent.get(url))
          );
        }
      }
    }

    // eslint-disable-next-line @stencil/strict-boolean-conditions
    if (!this.ariaLabel) {
      const label = getName(this.name, this.icon);
      // user did not provide a label
      // come up with the label based on the icon name
      // eslint-disable-next-line @stencil/strict-boolean-conditions
      if (label) {
        this.ariaLabel = label.replace(/\-/g, " ");
      }
    }
  }

  render() {
    return (
      <Host
        role="img"
        class={{
          "core-icon": true,
          // eslint-disable-next-line @stencil/strict-boolean-conditions
          [`core-icon--${this.size}`]: !!this.size,
        }}
      >
        {Build.isBrowser && this.svgContent ? (
          <div class="core-icon--inner" innerHTML={this.svgContent}></div>
        ) : (
          <div class="core-icon--inner"></div>
        )}
      </Host>
    );
  }
}