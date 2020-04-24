/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CoreButton {
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled": boolean;
        /**
          * Specifies CSS display property of the custom element. [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
         */
        "display"?: "block" | "inline" | "inline-flex" | "none" | "flex";
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download": string | undefined;
        /**
          * The type of element.
         */
        "elementType": string;
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered instead of a button.
         */
        "href": string | undefined;
        /**
          * Specifies the loading animation location if applied. Use: `"left"`, `"right"`, or `"only"`.
         */
        "loading"?: "left" | "right" | "only";
        /**
          * Set to the value of border-radius applied. Default is 4px.
         */
        "radius"?: "0" | "2px" | "4px" | "8px" | "16px" | "32px" | "circle";
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel": string | undefined;
        /**
          * The pre-defined button size. Use: `"small"`, `"default"`, or `"large"`. Default size is `"default"`.
         */
        "size"?: "small" | "default" | "large";
        /**
          * The status classing of the button. Use: `"success"`, `"danger"`, `"warning"`, or `"alt"`.
         */
        "status": "success" | "danger" | "warning" | "alt";
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Use: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target": string | undefined;
        /**
          * The type of the button.
         */
        "type": "submit" | "reset" | "button";
        /**
          * The button variation.
         */
        "variation"?: "basic" | "primary" | "secondary" | "dark" | "light";
        /**
          * Set to "full" for a full-width button without border-radius or   borders or to "block"` for a 100% width "block style" button.
         */
        "width"?: "full" | "block" | undefined;
    }
    interface CoreIcon {
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        /**
          * Optional color of the icon. Use any `@color` in [core-primatives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`. (e.g. `color="red"`, `color="gray-2"`, etc).
         */
        "color"?: string;
        /**
          * A combination of both `name` and `src`. If a `src` url is detected it will set the `src` property. Otherwise it assumes it's a built-in named SVG and set the `name` property.
         */
        "icon"?: any;
        /**
          * If enabled, core-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
         */
        "lazy": boolean;
        /**
          * Specifies which icon to use from `src/core-icons`.
         */
        "name"?: string;
        /**
          * The size of the icon. Available options are: `"16"` and `"24"`. Default, `16`.
         */
        "size"?: "16" | "24";
        /**
          * Specifies the exact `src` of an SVG file to use.
         */
        "src"?: string;
    }
    interface CoreInput {
        /**
          * Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        "autofocus": boolean;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput": boolean;
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled": boolean;
        /**
          * Returns the native `<input>` element.
         */
        "getInputElement": () => Promise<HTMLInputElement>;
        /**
          * The core-icon to render inside the text input.
         */
        "icon"?: string;
        /**
          * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputkeyboard"?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name": string;
        /**
          * Instructional placeholder text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required": boolean;
        /**
          * The large pre-defined input size and styling. Use: `"large"`.
         */
        "size"?: "large";
        /**
          * How an <input> works varies considerably depending on the value of its type attribute, hence the different types are covered in their own separate reference pages. If this attribute is not specified, the default type adopted is `text`. [<input> types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
         */
        "type"?: string;
    }
    interface CoreLabel {
        /**
          * The display determines where and how the label behaves inside an item.
         */
        "display"?: "inline" | "block";
        /**
          * The id of a labelable form-related element.
         */
        "forId"?: string | null;
        /**
          * Applies the provided URL to the helpIcon href.
         */
        "helpurl"?: string | null;
    }
    interface CoreTextarea {
        /**
          * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
         */
        "cols"?: number;
        /**
          * If `true`, the user cannot interact with the textarea.
         */
        "disabled": boolean;
        /**
          * Returns the native `<textarea>` element used under the hood.
         */
        "getInputElement": () => Promise<HTMLTextAreaElement>;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required": boolean;
        /**
          * The number of visible text lines for the control.
         */
        "rows"?: number;
        /**
          * The value of the textarea.
         */
        "value"?: string | null;
    }
}
declare global {
    interface HTMLCoreButtonElement extends Components.CoreButton, HTMLStencilElement {
    }
    var HTMLCoreButtonElement: {
        prototype: HTMLCoreButtonElement;
        new (): HTMLCoreButtonElement;
    };
    interface HTMLCoreIconElement extends Components.CoreIcon, HTMLStencilElement {
    }
    var HTMLCoreIconElement: {
        prototype: HTMLCoreIconElement;
        new (): HTMLCoreIconElement;
    };
    interface HTMLCoreInputElement extends Components.CoreInput, HTMLStencilElement {
    }
    var HTMLCoreInputElement: {
        prototype: HTMLCoreInputElement;
        new (): HTMLCoreInputElement;
    };
    interface HTMLCoreLabelElement extends Components.CoreLabel, HTMLStencilElement {
    }
    var HTMLCoreLabelElement: {
        prototype: HTMLCoreLabelElement;
        new (): HTMLCoreLabelElement;
    };
    interface HTMLCoreTextareaElement extends Components.CoreTextarea, HTMLStencilElement {
    }
    var HTMLCoreTextareaElement: {
        prototype: HTMLCoreTextareaElement;
        new (): HTMLCoreTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "core-button": HTMLCoreButtonElement;
        "core-icon": HTMLCoreIconElement;
        "core-input": HTMLCoreInputElement;
        "core-label": HTMLCoreLabelElement;
        "core-textarea": HTMLCoreTextareaElement;
    }
}
declare namespace LocalJSX {
    interface CoreButton {
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * Specifies CSS display property of the custom element. [display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
         */
        "display"?: "block" | "inline" | "inline-flex" | "none" | "flex";
        /**
          * This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want).
         */
        "download"?: string | undefined;
        /**
          * The type of element.
         */
        "elementType"?: string;
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered instead of a button.
         */
        "href"?: string | undefined;
        /**
          * Specifies the loading animation location if applied. Use: `"left"`, `"right"`, or `"only"`.
         */
        "loading"?: "left" | "right" | "only";
        /**
          * Set to the value of border-radius applied. Default is 4px.
         */
        "radius"?: "0" | "2px" | "4px" | "8px" | "16px" | "32px" | "circle";
        /**
          * Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
         */
        "rel"?: string | undefined;
        /**
          * The pre-defined button size. Use: `"small"`, `"default"`, or `"large"`. Default size is `"default"`.
         */
        "size"?: "small" | "default" | "large";
        /**
          * The status classing of the button. Use: `"success"`, `"danger"`, `"warning"`, or `"alt"`.
         */
        "status"?: "success" | "danger" | "warning" | "alt";
        /**
          * Specifies where to display the linked URL. Only applies when an `href` is provided. Use: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
         */
        "target"?: string | undefined;
        /**
          * The type of the button.
         */
        "type"?: "submit" | "reset" | "button";
        /**
          * The button variation.
         */
        "variation"?: "basic" | "primary" | "secondary" | "dark" | "light";
        /**
          * Set to "full" for a full-width button without border-radius or   borders or to "block"` for a 100% width "block style" button.
         */
        "width"?: "full" | "block" | undefined;
    }
    interface CoreIcon {
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        /**
          * Optional color of the icon. Use any `@color` in [core-primatives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`. (e.g. `color="red"`, `color="gray-2"`, etc).
         */
        "color"?: string;
        /**
          * A combination of both `name` and `src`. If a `src` url is detected it will set the `src` property. Otherwise it assumes it's a built-in named SVG and set the `name` property.
         */
        "icon"?: any;
        /**
          * If enabled, core-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
         */
        "lazy"?: boolean;
        /**
          * Specifies which icon to use from `src/core-icons`.
         */
        "name"?: string;
        /**
          * The size of the icon. Available options are: `"16"` and `"24"`. Default, `16`.
         */
        "size"?: "16" | "24";
        /**
          * Specifies the exact `src` of an SVG file to use.
         */
        "src"?: string;
    }
    interface CoreInput {
        /**
          * Boolean attribute lets you specify that a form control should have input focus when the page loads.
         */
        "autofocus"?: boolean;
        /**
          * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
         */
        "clearInput"?: boolean;
        /**
          * If `true`, the user cannot interact with the input.
         */
        "disabled"?: boolean;
        /**
          * The core-icon to render inside the text input.
         */
        "icon"?: string;
        /**
          * A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
         */
        "inputkeyboard"?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";
        /**
          * The name of the control, which is submitted with the form data.
         */
        "name"?: string;
        /**
          * Instructional placeholder text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required"?: boolean;
        /**
          * The large pre-defined input size and styling. Use: `"large"`.
         */
        "size"?: "large";
        /**
          * How an <input> works varies considerably depending on the value of its type attribute, hence the different types are covered in their own separate reference pages. If this attribute is not specified, the default type adopted is `text`. [<input> types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
         */
        "type"?: string;
    }
    interface CoreLabel {
        /**
          * The display determines where and how the label behaves inside an item.
         */
        "display"?: "inline" | "block";
        /**
          * The id of a labelable form-related element.
         */
        "forId"?: string | null;
        /**
          * Applies the provided URL to the helpIcon href.
         */
        "helpurl"?: string | null;
    }
    interface CoreTextarea {
        /**
          * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
         */
        "cols"?: number;
        /**
          * If `true`, the user cannot interact with the textarea.
         */
        "disabled"?: boolean;
        /**
          * Instructional text that shows before the input has a value.
         */
        "placeholder"?: string | null;
        /**
          * If `true`, the user must fill in a value before submitting a form.
         */
        "required"?: boolean;
        /**
          * The number of visible text lines for the control.
         */
        "rows"?: number;
        /**
          * The value of the textarea.
         */
        "value"?: string | null;
    }
    interface IntrinsicElements {
        "core-button": CoreButton;
        "core-icon": CoreIcon;
        "core-input": CoreInput;
        "core-label": CoreLabel;
        "core-textarea": CoreTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "core-button": LocalJSX.CoreButton & JSXBase.HTMLAttributes<HTMLCoreButtonElement>;
            "core-icon": LocalJSX.CoreIcon & JSXBase.HTMLAttributes<HTMLCoreIconElement>;
            "core-input": LocalJSX.CoreInput & JSXBase.HTMLAttributes<HTMLCoreInputElement>;
            "core-label": LocalJSX.CoreLabel & JSXBase.HTMLAttributes<HTMLCoreLabelElement>;
            "core-textarea": LocalJSX.CoreTextarea & JSXBase.HTMLAttributes<HTMLCoreTextareaElement>;
        }
    }
}
