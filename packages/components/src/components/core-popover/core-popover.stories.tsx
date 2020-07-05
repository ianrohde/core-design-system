import { boolean, select } from "@storybook/addon-knobs";
import { html, TemplateResult } from "lit-html";

export default {
  component: "core-popover",
  title: "Informers/Popover",
};

const variations = {
  top: "top",
  bottom: "bottom",
};

export const Default = (): TemplateResult => {
  return html`
    <div style="display:flex;height:250px;">
      <core-popover
        active=${boolean("Active", false)}
        hoverable=${boolean("Hoverable", false)}
        variation=${select("Varation", variations, "top")}
        style="margin:auto auto 0;"
      >
        <core-button slot="trigger">Trigger</core-button>
        <span slot="title">Popover Title</span>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </core-popover>
    </div>
  `;
};

export const Bottom = (): TemplateResult => {
  return html`
    <div style="display:flex;height:250px;">
      <core-popover
        active=${boolean("Active", false)}
        hoverable=${boolean("Hoverable", false)}
        variation=${select("Varation", variations, "bottom")}
        style="margin:50px auto auto;"
      >
        <core-button slot="trigger">Trigger</core-button>
        <span slot="title">Popover Title</span>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </core-popover>
    </div>
  `;
};

export const Hoverable = (): TemplateResult => {
  return html`
    <div style="display:flex;height:250px;">
      <core-popover
        active=${boolean("Active", false)}
        hoverable=${boolean("Hoverable", true)}
        variation=${select("Varation", variations, "top")}
        style="margin:auto auto 0;"
      >
        <core-button slot="trigger">Trigger</core-button>
        <span slot="title">Popover Title</span>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </core-popover>
    </div>
  `;
};