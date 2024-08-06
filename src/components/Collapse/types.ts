import type { Ref, InjectionKey } from 'vue'
export type NameType = string | number
export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseContent {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}

export interface CollapseProps {
  modelValue: NameType[],
  accordion?: boolean,  
}

export interface CollapseEmits {
  (e: 'update:modelVlaue', values: NameType[]): void;
  (e: 'change:modelVlaue', values: NameType[]): void;
}

export const collapseKey: InjectionKey<CollapseContent> = Symbol('collapseContent')