/* eslint-disable @stencil/strict-boolean-conditions */
import {
  Component,
  ComponentInterface,
  Host,
  Prop,
  State,
  h,
} from "@stencil/core";
import { colorPropsAll, labelPositionProps } from "../../assets/script/global";

@Component({
  tag: "core-select",
  styleUrl: "core-select.less",
  shadow: false, // disabling shadow dom enables native functionality
})
export class Select implements ComponentInterface {
  @State() hasFocus = false;

  /**
   * Boolean attribute lets you specify that a form control should
   * have select focus when the page loads.
   */
  @Prop() autofocus = false;

  /**
   * Optional color of the label (inherited).
   * Use any `@color` in [core-primitives](https://unpkg.com/@core-ds/primitives/core-primitives.less) without `@color-`.
   */
  @Prop() labelColor?: colorPropsAll = "gray-8";

  /**
   * If `true`, the user cannot interact with the element.
   */
  @Prop() disabled = false;

  /**
   * The core-icon to render inside the text select.
   */
  @Prop() icon?: string;

  /**
   * The label element associated with the element.
   */
  @Prop() label: string | undefined;

  /**
   * Sets the optional label to `inline` or `block` style [CSS display property](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
   */
  @Prop() labelDisplay?: "block" | "inline" = "block";

  /**
   * The label element position.
   */
  @Prop() labelPosition?: labelPositionProps = "left";

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * Apply the large pre-defined element size and styling.
   */
  @Prop() size?: "large";

  /**
   * How an <select> works varies considerably depending on the value of
   * its type attribute, hence the different types are covered in their
   * own separate reference pages. If this attribute is not specified,
   * the default type adopted is `text`. [<select> types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
   */
  @Prop() type?: string = "text";

  render() {
    const lowerCaseLabel = this.label
      ? `${this.label.toLowerCase()}-select`
      : "";

    return (
      <Host
        aria-disabled={this.disabled ? "true" : null}
        class={{ "has-focus": this.hasFocus }}
      >
        <div class="select-outer">
          {this.label && <label htmlFor={lowerCaseLabel}>{this.label}</label>}
          {this.icon && <core-icon slot="select-left" icon={this.icon} />}
          <select
            id={lowerCaseLabel}
            class="native-element"
            disabled={this.disabled}
            autoFocus={this.autofocus}
            required={this.required}
          >
            <slot />
          </select>
          <core-icon icon="caret-down"></core-icon>
        </div>
      </Host>
    );
  }
}
