import { create } from 'zustand';

type SheetState = Record<string, boolean>;
type SheetsState = {
  sheets: SheetState;
  onOpen: (key: string) => void;
  onClose: (key: string) => void;
  isOpen: (key: string) => boolean;
};

export const useSheets = create<SheetsState>((set, get) => ({
  sheets: {
    newAccount: false,
  },
  onOpen: (key: string) => set((state) => ({ sheets: { ...state.sheets, [key]: true } })),
  onClose: (key: string) =>
    set((state) => ({ sheets: { ...state.sheets, [key]: false } })),
  isOpen: (key: string) => get().sheets[key] || false,
}));
