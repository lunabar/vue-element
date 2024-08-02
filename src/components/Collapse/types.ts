import type { Ref, InjectionKey } from 'vue'
export type NameType = string | number
export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseContent {
  activeName: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}

export const collapseKey: InjectionKey<CollapseContent> = Symbol('collapseContent')