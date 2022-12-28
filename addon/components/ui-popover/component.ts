import UiContextualContainer, {
  SelectorStrategies,
  TriggerEvents,
} from '../-internals/contextual-container/component';

/**
 *
 */
export default class UiPopoverContextContainer extends UiContextualContainer {
  /**
   * The amount of time, in milliseconds, between the triggering interaction
   * and when the tooltip is displayed.
   */
  delay = 150;

  distance = 11;

  /** @hidden */
  ariaAttachAs = 'aria-controls';

  /** @hidden */
  closeOnOutsideClick = false;

  /** @hidden */
  triggerEvents = TriggerEvents.CLICK;

  /** @hidden */
  triggerSelector = SelectorStrategies.PARENT;

  /** @hidden */
  readonly overlayComponent = 'ui-popover/element';

  public didInsertElement() {
    super.didInsertElement();
    this.getAriaElement()?.setAttribute('aria-expanded', 'false');
  }

  /** @hidden */
  onShow = () => {
    this.getAriaElement()?.setAttribute('aria-expanded', 'true');
  };

  /** @hidden */
  onHide = () => {
    this.getAriaElement()?.setAttribute('aria-expanded', 'false');
  };
}
