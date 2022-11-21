const Keyboard = {
  element: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: "",
    capsLock: false,
  },

  init() {},

  _createKeys() {},

  _triggerEvent(handlerName) {
    console.log("event triggered. event name: ", handlerName);
  },

  _toggleCapsLock() {
    console.log("CapsLock Triggered");
  },

  open(initialValue, oninput, onclose) {},

  close() {},
};
