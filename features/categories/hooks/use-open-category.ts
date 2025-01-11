import { create } from "zustand";

type OpenCategorytate = {
  id?: string;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
};

export const useOpenCategory = create<OpenCategorytate>((set) => ({
  id: undefined,
  isOpen: false,
  onOpen: (id: string) => set({ isOpen: true, id }),
  onClose: () => set({ isOpen: false, id: undefined }),
}));
