import { create } from 'zustand';

type SheetKeys = 'newAccount' | 'editAccount' | 'newTransaction';
type SheetState = Record<string, { isOpen: boolean; id?: string }>;
type SheetsState = {
  sheets: SheetState;
  onOpen: (key: SheetKeys, value?: string) => void;
  onClose: (key: SheetKeys) => void;
  isOpen: (key: SheetKeys) => boolean;
  getId: (key: SheetKeys) => string | undefined;
};

export const useSheets = create<SheetsState>((set, get) => ({
  sheets: {
    newAccount: { isOpen: false },
    editAccount: { isOpen: false, id: undefined },
    newTransaction: { isOpen: false },
  },
  onOpen: (key: SheetKeys, id?: string) =>
    set((state) => ({
      sheets: { ...state.sheets, [key]: { isOpen: true, id } },
    })),
  onClose: (key: SheetKeys) =>
    set((state) => ({
      sheets: { ...state.sheets, [key]: { isOpen: false, id: undefined } },
    })),
  isOpen: (key: SheetKeys) => get().sheets[key]?.isOpen || false,
  getId: (key: SheetKeys) => get().sheets[key]?.id,
}));
