"use client";

import * as React from "react";
import { ToastProps } from "@radix-ui/react-toast";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 5000;

export type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
};

export const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

let count = 0;
const genId = () => (++count % Number.MAX_SAFE_INTEGER).toString();

type ActionType = typeof actionTypes;

type Action =
  | { type: ActionType["ADD_TOAST"]; toast: ToasterToast }
  | { type: ActionType["UPDATE_TOAST"]; toast: Partial<ToasterToast> }
  | { type: ActionType["DISMISS_TOAST"]; toastId?: string }
  | { type: ActionType["REMOVE_TOAST"]; toastId?: string };

interface State {
  toasts: ToasterToast[];
}

const toastTimeouts = new Map<string, NodeJS.Timeout>();

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        setTimeout(
          () => dispatch({ type: "REMOVE_TOAST", toastId }),
          TOAST_REMOVE_DELAY
        );
      } else {
        state.toasts.forEach((toast) =>
          setTimeout(
            () => dispatch({ type: "REMOVE_TOAST", toastId: toast.id }),
            TOAST_REMOVE_DELAY
          )
        );
      }
      return {
        ...state,
        toasts: state.toasts.map((t) => ({ ...t, open: false })),
      };
    }
    case "REMOVE_TOAST":
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    default:
      return state;
  }
};

const listeners: Array<(state: State) => void> = [];
let memoryState: State = { toasts: [] };

const dispatch = (action: Action) => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
};

export const useToast = () => {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return {
    ...state,
    toast: (props: Omit<ToasterToast, "id">) => {
      const id = genId();
      dispatch({
        type: "ADD_TOAST",
        toast: {
          ...props,
          id,
          open: true,
          onOpenChange: (open) =>
            !open && dispatch({ type: "DISMISS_TOAST", toastId: id }),
        },
      });
      return {
        id,
        dismiss: () => dispatch({ type: "DISMISS_TOAST", toastId: id }),
      };
    },
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
};
