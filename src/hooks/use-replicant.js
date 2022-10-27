import { useEffect, useState } from 'haunted';
import clone from 'lodash.clone';

/**
 * Subscribe to a replicant, returns tuple of the replicant value and `setValue` function.
 * The component using this function gets re-rendered when the value is updated.
 * The `setValue` function can be used to update replicant value.
 * @param replicantName The name of the replicant to use
 * @param initialValue Initial value to pass to `useState` function
 * @param options Options object.  Currently supports the optional `namespace` option
 */
const useReplicant = (replicantName, initialValue, options) => {
  const [value, updateValue] = useState(initialValue);

  const replicantOptions = options && {
    defaultValue: options.defaultValue,
    persistent: options.persistent,
    schemaPath: options.schemaPath,
  };
  const replicant = options && options.namespace
    ? nodecg.Replicant(
      replicantName,
      options.namespace,
      replicantOptions,
    )
    : nodecg.Replicant(replicantName, replicantOptions);

  const changeHandler = (newValue) => {
    updateValue((oldValue) => {
      if (newValue !== oldValue) {
        return newValue;
      }
      // replicant.value has always the same reference. Cloning to cause re-rendering
      return clone(newValue);
    });
  };

  useEffect(() => {
    replicant.on('change', changeHandler);
    return () => {
      replicant.removeListener('change', changeHandler);
    };
  }, [replicant]);

  return [
    value,
    (newValue) => {
      replicant.value = newValue;
    },
  ];
};

const useReplicantOnce = (replicantName, initialValue, options) => {
  const [state, setState] = useState(initialValue);
  if (options && options.bundle) {
    nodecg.readReplicant(replicantName, options.bundle, (value) => {
      setState(value);
    });
  } else {
    nodecg.readReplicant(replicantName, (value) => {
      setState(value);
    });
  }
  return state;
};

const useListenFor = (messageName, handler, options) => {
  useEffect(() => {
    if (options && options.bundle) {
      nodecg.listenFor(messageName, options.bundle, handler);
      return () => {
        nodecg.unlisten(messageName, options.bundle, handler);
      };
    }
    nodecg.listenFor(messageName, handler);
    return () => {
      nodecg.unlisten(messageName, handler);
    };
  }, [handler, messageName, options]);
};

export { useReplicant, useReplicantOnce, useListenFor };
