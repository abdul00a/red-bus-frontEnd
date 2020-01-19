import { TOGGLE_TABS, CLOSE_TABS } from '../constant';

export const tabToggle = (key, bus) => {
  return { type: TOGGLE_TABS, payload: key, bus: bus };
};

export const closeTab = bus => {
  return {
    type: CLOSE_TABS,
    bus: bus
  };
};
