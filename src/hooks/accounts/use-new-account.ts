import { create } from 'zustand';

type NewAccountState = {
  isOpen: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
};

export const useNewAccount = create<NewAccountState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
